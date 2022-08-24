import { useEffect, useContext, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
      displayName: 'Rishabh',
      userName: '0x858844nnffnf488844848484',
      avatar:
      'https://th.bing.com/th/id/OIP._ff40XXJbf1BpqVLYvbs6gHaGl?w=231&h=205&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      text: 'gm',
      isProfileImageNft: true,
      timestamp: '2020-06-01T12:00:00.000Z'
  },
  {
      displayName: 'Rishabh',
      userName: '0x858844nnffnf488844848484',
      avatar:
      'https://th.bing.com/th/id/OIP._ff40XXJbf1BpqVLYvbs6gHaGl?w=231&h=205&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      text: 'gm',
      isProfileImageNft: false,
      timestamp: '2020-06-01T12:00:00.000Z'
  },
  {
      displayName: 'Rishabh',
      userName: '0x858844nnffnf488844848484',
      avatar:
      'https://th.bing.com/th/id/OIP._ff40XXJbf1BpqVLYvbs6gHaGl?w=231&h=205&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      text: 'gm',
      isProfileImageNft: false,
      timestamp: '2020-06-01T12:00:00.000Z'
  },
  {
      displayName: 'Rishabh',
      userName: '0x858844nnffnf488844848484',
      avatar:
      'https://th.bing.com/th/id/OIP._ff40XXJbf1BpqVLYvbs6gHaGl?w=231&h=205&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      text: 'gm',
      isProfileImageNft: false,
      timestamp: '2020-06-01T12:00:00.000Z'
  },
  {
      displayName: 'Rishabh',
      userName: '0x858844nnffnf488844848484',
      avatar:
      'https://th.bing.com/th/id/OIP._ff40XXJbf1BpqVLYvbs6gHaGl?w=231&h=205&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      text: 'gm',
      isProfileImageNft: false,
      timestamp: '2020-06-01T12:00:00.000Z'
  },

]


function ProfileTweets() {
  const { currentAccount, currentUser } = useContext(TwitterContext)
  return (
    <div className={style.wrapper}>
       {currentUser.tweets?.map((tweet, index) => (
        <Post 
        key={index}
        displayName={currentUser.name == 'unnamed' ? currentUser.walletAddress : currentUser.name}
        userName={`${currentAccount.slice(0, 5)}...${currentAccount.slice(-5)}`}
        text={tweet.tweet}
        avatar={currentUser.profileImage}
        isProfileImageNft={currentUser.isProfileImageNft}
        timestamp={tweet.timestamp}
        />
       ))}
    </div>
  )
}

export default ProfileTweets
