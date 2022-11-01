import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useInView } from 'react-intersection-observer';

const three = () => {
  const { ref, inView } = useInView({
    rootMargin: '-360px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <>
      <div>
        <Header />
      </div>

      <div className='relative'>
        <img src='/profile.png' alt='profile' className='flex h-80 w-80 mx-auto' />
        <div>
          <p className='absolute top-0 left-0 text-yellow-200 text-6xl font-mono ml-20 mt-32 animate-bounce'>
            No code
          </p>
          <p className='absolute bottom-0 left-0 text-orange-500 text-6xl font-mono ml-64 mb-48 animate-bounce'>
            No life
          </p>
        </div>
      </div>

      {/* profile */}
      <div className='text-5xl font-mono flex text-center bg-orange-100 pt-10'>
        <h1 className='flex m-auto'>Profile</h1>
      </div>

      {inView && (
        <div>
          <div>
            <div className='p-5 bg-orange-100 h-full'>
              <div className='flex justify-center'>
                <div className='flex flex-col md:flex-row md:max-w-3xl rounded-3xl bg-white shadow-2xl'>
                  <div className='p-6 flex flex-col justify-start'>
                    <h5 className='flex justify-center text-gray-900 text-2xl font-serif'>
                      佐藤 亮介
                    </h5>
                    <h5 className='flex justify-center text-gray-900 text-3xl font-serif mb-10'>
                      RYOUSUKE SATOU
                    </h5>
                    <p className='text-gray-700 text-base mb-4 font-serif'>
                      - 生息地 : 北海道 札幌市
                    </p>
                    <p className='text-gray-700 text-base mb-4 font-serif'>
                      - 趣味 : 料理, サッカー, 将棋, NetFlix, 3D Graphics
                    </p>
                    <p className='text-gray-700 text-base mb-4 font-serif'>
                      - Motto : 感動を呼ぶサービス開発
                    </p>
                    <div className='flex ml-auto p-2 mt-8 space-x-5'>
                      <p>
                        <Link href='https://www.youtube.com/channel/UC-F1geS98nNWsD2z3aj7XAw'>
                          <a>
                            <YouTubeIcon className='text-4xl text-red-600 cursor-pointer' />
                          </a>
                        </Link>
                      </p>
                      <p>
                        <Link href='https://twitter.com/sRRRs45'>
                          <a>
                            <TwitterIcon className='text-4xl text-blue-300 cursor-pointer' />
                          </a>
                        </Link>
                      </p>
                      <p>
                        <Link href='https://www.facebook.com/profile.php?id=100008637453334'>
                          <a>
                            <FacebookIcon className='text-4xl text-blue-800 cursor-pointer' />
                          </a>
                        </Link>
                      </p>
                      <p>
                        <Link href='https://www.instagram.com/srrrs007/'>
                          <a>
                            <InstagramIcon className='text-4xl text-orange-500 cursor-pointer' />
                          </a>
                        </Link>
                      </p>
                      <p>
                        <Link href='https://github.com/sRRRs-7'>
                          <a>
                            <GitHubIcon className='text-4xl text-black cursor-pointer' />
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* background */}
      <div className='text-5xl font-mono flex text-center bg-orange-100 pt-10'>
        <h1 className='flex m-auto'>Background</h1>
      </div>
      <div className='text-xl font-mono flex text-center bg-orange-100 pt-10'>
        <h1 className='flex m-auto'>To Be Continue</h1>
      </div>

      <div className='flex bg-orange-100 pt-3' ref={ref}>
        <p className='text-5xl flex m-auto animate-bounce'>⇣</p>
      </div>
      <div className='bg-orange-100'>
        {inView && (
          <div className='p-10 px-64'>
            <div className='mx-64 p-10 rounded-3xl shadow-2xl bg-white'>
              <h1>2021年-2023年</h1>
              <h3>プログラミングスキル習得, 資格取得</h3>
              <br />
              <h1 className='text-md'>スキル</h1>

              <div className='ml-5 text-md'>
                <div>
                  <h4 className='text-md'>- Language</h4>
                  <p className='ml-10'> Rust | Go | Javascript | Typescript | Python</p>
                </div>
                <div>
                  <h4 className='text-md'>- Framework</h4>
                  <p className='ml-10'>React | Next.js | Axum | Gin-gonic | Django</p>
                </div>
                <div>
                  <h4 className='text-md'>- RDB/NoSQL</h4>
                  <p className='ml-10'>Postgres | Redis</p>
                </div>
                <div>
                  <h4 className='text-md'>- Cloud</h4>
                  <p className='ml-10'>AWS (EC2 | ECS) | GCP (Firebase)</p>
                </div>
                <div>
                  <h4 className='text-md'>- その他</h4>
                  <p className='ml-10'>Github | Docker | Terraform </p>
                </div>
              </div>
              <br />
              <h1 className='text-md'>資格</h1>

              <div className='ml-5'>
                <div>
                  <h4 className='text-md'>- 応用技術者</h4>
                  <h4 className='text-md'>- LPIC</h4>
                  <h4 className='text-md'>- AWS</h4>
                </div>
              </div>
            </div>
          </div>
        )}

        {inView && (
          <div className='flex'>
            <p className='text-5xl flex m-auto animate-bounce'>⇣</p>
          </div>
        )}

        {inView && (
          <div className='p-10 px-64'>
            <div className='mx-64 p-10 rounded-3xl shadow-2xl bg-white'>
              <h1>2019年-2021年</h1>
              <h3>
                サッポロホールディングス　ポッカサッポロフード&ビバレッジ株式会社 千葉支店 法人営業
              </h3>
              <br />
              <p>
                - 食品卸大手, 某ドラッグチェーン ローカルスーパーマーケット <br />
                - メイン商材　PJT リーダー
                <br />
                &nbsp; &nbsp; 毎月のKPI, KGI設定, 利益率管理
                <br />
                &nbsp; &nbsp; 統計分析(バスケット分析, ABC分析)による販売戦略の立案
                <br />
                &nbsp; &nbsp; VBAでの共通データ分析フォーマットの作成
              </p>
            </div>
          </div>
        )}

        {inView && (
          <div className='flex'>
            <p className='text-5xl flex m-auto animate-bounce'>⇣</p>
          </div>
        )}

        {inView && (
          <div className='p-10 px-64'>
            <div className='mx-64 p-10 rounded-3xl shadow-2xl bg-white'>
              <h1>2019年</h1>
              <h3>同志社大学 商学部 商学科 卒業</h3>
              <br />
              <p>
                - 一人一人の可能性を見つけ出すためのコミュニティの運営 <br />
                - DTL(doshisya tennis league)実行委員 経理部門 広報部門　担当
                <br />
              </p>
            </div>
          </div>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default three;
