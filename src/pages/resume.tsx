import Link from '@components/Link';
import Template from '@components/templates/Template';
import React from 'react';

export default function Resume() {
  return (
    <Template title="이력서">
      <div className="tw-flex tw-flex-col tw-gap-y-8">
        <div>
          <h2>메인 프로젝트</h2>
          <table className="tw-w-full tw-text-center tw-border-2 tw-border-collapse">
            <thead>
              <tr>
                <th className="tw-px-2 tw-border-2">이름</th>
                <th className="tw-px-2 tw-border-2">설명</th>
                <th className="tw-px-2 tw-border-2">개발</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tw-p-2 tw-border-2">
                  🏗️&nbsp;<span className="tw-font-semibold">pryst</span> (2020-)
                </td>
                <td className="tw-p-2 tw-font-semibold tw-border-2">
                  C++로 바닥부터 만든 프로그래밍 언어.
                  <br />
                  <Link href="https://pryst.cliid.dev/syntax" className="tw-font-semibold">
                    [문법]
                  </Link>{' '}
                  <Link href="https://pryst.cliid.dev/demo">[사용 예시]</Link>{' '}
                  <Link href="https://github.com/cliid/pryst">[깃허브 레포]</Link>
                </td>
                <td className="tw-p-2 tw-border-2">개인작</td>
              </tr>
              <tr>
                <td className="tw-p-2 tw-border-2">
                  ✔️&nbsp;<span className="tw-font-semibold">미세봇</span> (2019-)
                </td>
                <td className="tw-p-2 tw-font-semibold tw-border-2">
                  NLP를 활용한 미세먼지 정보 제공 챗봇.
                  <br />
                  <Link href="https://m.me/dustackle">[메신저]</Link>{' '}
                  <Link href="https://github.com/cliid/dustackle">[깃허브 레포]</Link>
                </td>
                <td className="tw-p-2 tw-border-2">개인작</td>
              </tr>
              <tr>
                <td className="tw-p-2 tw-border-2">
                  ⏹️&nbsp;<span className="tw-font-semibold">ASKY</span> (2019)
                </td>
                <td className="tw-p-2 tw-font-semibold tw-border-2">
                  LUIS.ai를 활용한 대화형 가상친구.
                  <br />
                  <Link href="https://github.com/cliid/ASKY-Unity" className="tw-font-semibold">
                    [프론트엔드]
                  </Link>{' '}
                  <Link href="https://github.com/cliid/ASKY-Python">[백엔드]</Link>
                </td>
                <td className="tw-p-2 tw-border-2">
                  with{' '}
                  <Link href="https://github.com/krrrr0" className="tw-font-semibold">
                    @krrrr0
                  </Link>{' '}
                  and 2 others
                </td>
              </tr>
              <tr>
                <td className="tw-p-2 tw-border-2">
                  🏗️&nbsp;<span className="tw-font-semibold">세븐위키</span> (2020-)
                </td>
                <td className="tw-p-2 tw-font-semibold tw-border-2">
                  개발자들을 위한 Markdown 테크 위키.
                  <br />
                  <Link href="https://seven.wiki" className="tw-font-semibold">
                    [웹사이트]
                  </Link>
                </td>
                <td className="tw-p-2 tw-border-2">
                  <Link href="https://github.com/dazzleofficial" className="tw-font-semibold">
                    @dazzleofficial
                  </Link>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="tw-italic tw-font-semibold">
                  Work In Progress...
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div>
          <h2>사이드 프로젝트</h2>
          <table className="tw-w-full tw-text-center tw-border-2 tw-border-collapse">
            <thead>
              <tr>
                <th className="tw-px-2 tw-border-2">이름</th>
                <th className="tw-px-2 tw-border-2">설명</th>
                <th className="tw-px-2 tw-border-2">개발</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tw-p-2 tw-border-2">
                  ✔️&nbsp;<span className="tw-font-semibold">rehype-twemojify</span> (2021-2022)
                </td>
                <td className="tw-p-2 tw-font-semibold tw-border-2">
                  이모지를 Twemoji로 변환해주는 도구
                  <br />
                  <Link href="https://cliid.dev/blog/integrating-twemoji-with-rehype">
                    [사용 예시]
                  </Link>{' '}
                  <Link href="https://github.com/cliid/rehype-twemojify">[깃허브 레포]</Link>
                </td>
                <td className="tw-p-2 tw-border-2">개인작</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="tw-italic tw-font-semibold">
                  Work In Progress...
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <hr />
        <div className="tw-flex tw-flex-col tw-gap-y-4">
          <div>
            <h2>대회</h2>
            <ul className="tw-font-semibold">
              <li>🏅 KOI 2021 중등부 1차 은상, 2차 동상</li>
              <li>🥈 USACO 2021 Silver Qualified</li>
              <li>🥉 AMC10, AIME 2020 참가</li>
            </ul>
          </div>
          <div>
            <h2>활동</h2>
            <ul className="tw-font-semibold">
              <li>
                🏢 <Link href="https://dazzle.works">@dazzleofficial</Link> 창업
              </li>
            </ul>
          </div>
          <div>
            <h2>교육</h2>
            <ul className="tw-font-semibold">
              <li>
                🧑‍🎓 <Link href="http://hafs.hs.kr/?main">Hankuk Academy of Foreign Studies</Link>{' '}
                18th
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <h2>☎️ 연락 방법</h2>
            <div className="tw-flex tw-flex-col tw-gap-y-4">
              <div>
                <div>
                  업무용 E-mail:{' '}
                  <Link href="mailto:cliid@dazzle.works" className="tw-font-semibold">
                    cliid@dazzle.works
                  </Link>
                </div>
                <div>
                  개인 E-mail:{' '}
                  <Link href="mailto:cliid@pm.me" className="tw-font-semibold">
                    cliid@pm.me
                  </Link>
                  ,{' '}
                  <a href="/static/files/pubkey.asc" className="tw-font-semibold">
                    [GPG 퍼블릭 키]
                  </a>
                </div>
              </div>
              <div>
                <Link href="https://getsession.org" className="tw-font-semibold">
                  Session 메신저
                </Link>
                &nbsp;ID:{' '}
                <span className="tw-font-semibold tw-break-all">
                  05fc1c63ad8cb22e9b7b616d60c43b1d8fa280e9e135879201470cfedc9c948f0b
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
