import * as fcl from '@onflow/fcl'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import GetUserTalks from '../../cadence/scripts/GetUserTalks.cdc'
import { TalkList } from '../../components/TalkList'

export default function Mints() {
  const { query } = useRouter()
  const addr = query?.id
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

  return (
    <>
      <br />
      <h2>Talks for {addr}</h2>
      <TalkList talks={talks} />
    </>
  )
}