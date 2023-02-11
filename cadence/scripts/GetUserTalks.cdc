import "BlockTalk"

pub struct TalkMetadata {
  pub let id: UInt64
  pub let body: String
  pub let tweetID: String?

  init(id: UInt64, body: String, tweetID: String?) {
    self.id = id
    self.body = body
    self.tweetID = tweetID
  }
}

pub fun main(address: Address): [TalkMetadata] {
  let talkOwner = getAccount(address)

  let capability = talkOwner.getCapability<&{BlockTalk.CollectionPublic}>(BlockTalk.TalkCollectionPublicPath)

  let publicRef = capability.borrow()
    ?? panic("Could not borrow public reference to the owner's Talk collection")

  let talkIDs = publicRef.getIDs()

  let talks: [TalkMetadata] = []

  for talkId in talkIDs {
    let talk = publicRef.borrowTalk(id: talkId)
      ?? panic("Could not borrow talk from collection")
    
    let talkMetadata = TalkMetadata(id: talk.id, body: talk.metadata["body"]!, tweetID: talk.metadata["tweetID"])
    talks.append(talkMetadata)
  }
  

  return talks
}