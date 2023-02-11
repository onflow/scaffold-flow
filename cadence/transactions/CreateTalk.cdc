import "BlockTalk"

// This transaction creates a new tweet with an argument
transaction (body: String, tweetID: String?) {
  // Let's check that the account has a collection
  prepare(acct: AuthAccount) {
    if acct.borrow<&BlockTalk.Collection>(from: BlockTalk.TalkCollectionStoragePath) != nil {
      log("Collection exists!")
    } else {
        // let's create the collection if it doesn't exist
      acct.save<@BlockTalk.Collection>(<-BlockTalk.createEmptyCollection(), to: BlockTalk.TalkCollectionStoragePath)
      acct.link<&{BlockTalk.CollectionPublic}>(BlockTalk.TalkCollectionPublicPath, target: BlockTalk.TalkCollectionStoragePath)
    }

    // borrow the collection
    let collection = acct.borrow<&BlockTalk.Collection>(from: BlockTalk.TalkCollectionStoragePath)

    // call the collection's saveTweet method and pass in a Tweet resource
    collection?.saveTalk(talk: <-BlockTalk.createTalk(body: body, tweetID: tweetID))
    log("Talk created successfully!")
  }
}
 