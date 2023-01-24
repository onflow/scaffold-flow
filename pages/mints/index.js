import * as fcl from '@onflow/fcl'
import { useEffect, useState } from "react"
import GetUserTalks from '../../cadence/scripts/GetUserTalks.cdc'
import useCurrentUser from '../../hooks/useCurrentUser'
import { Minter } from '../../components/Minter'
import { TalkList } from '../../components/TalkList'

export default function Mints() {
  const { addr } = useCurrentUser()
  const [talks, setTalks] = useState([])

  const fetchTalks = async () => {
    if (addr) {
      let res

      try {
        res = await fcl.query({
          cadence: GetUserTalks,
          args: (arg, t) => [arg(addr, t.Address)]
        })
      } catch(e) {
        // Likely need to mint first to create capability if this fails
        res = []
      } finally {
        setTalks(res)
      }
    }
  }

  useEffect(() => {
    fetchTalks()
  }, [addr])

  const onMint = () => {
    fetchTalks()
  }

  return (
    <>
      <Minter onMint={onMint} />
      <hr />
      {talks && talks.length > 0 ? 
        (
         <>
            <h2>Your Talks</h2>
            <TalkList talks={talks} />
         </>
        ) : (
          <div>You don't have any talks yet. Mint one.</div>
        )
      }
    </>
  )
}