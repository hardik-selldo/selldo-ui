import React from 'react'
import Page from '../../components/Page'
import BackGround from "../../components/BackGround";
import { SignUpCard } from "../../components/Card";
import logo from '../../../src/assets/images/bg.jpg'

export default function HomePage() {
  return (
    <Page style={{ alignItems: 'center', justifyContent: 'center' }}>
      <BackGround url={logo} />
      <SignUpCard />

      <div className="d-flex mt-3 signup-link">
        <p className='mx-2'>Don't Have SellDo Account?</p>
        <a className='link' href='#'>Sign Up Now</a>
      </div>

    </Page>
  );
}
