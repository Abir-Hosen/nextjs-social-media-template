import { withAuthentication, WithAuthorization } from 'hocs'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import { PublicHomeViewProps } from 'view/public/home'
import styles from '../styles/Home.module.css'

const PublicHomeView = dynamic<PublicHomeViewProps>(
  () => import('view/public/home').then((i) => i.PublicHomeView),
  { ssr: false }
)

const Home: NextPage = () => {
  return (
    <>
      <WithAuthorization permission="user" access="public">
        <PublicHomeView />
      </WithAuthorization>
    </>
  )
}

export default withAuthentication(Home)
