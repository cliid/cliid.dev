import Link from '@components/Link';
import Template from '@components/templates/Template';
import React from 'react';

export default function Home() {
  return (
    <Template title="안녕하세요!">
      <div className="tw-flex tw-flex-col tw-gap-y-8">
        <div className="tw-flex tw-flex-col tw-gap-y-4">
          <p>
            저는 프론트엔드를 좋아하는 프로그래머, <span className="tw-font-semibold">cliid</span>
            라고 합니다.
          </p>
          <div>
            <h3>
              약력
              <Link href="/resume">
                <sup>[더보기]</sup>
              </Link>
            </h3>
            <ul className="tw-font-semibold">
              <li>
                🧑‍🎓 <Link href="http://hafs.hs.kr/?main">Hankuk Academy of Foreign Studies</Link>{' '}
                18th
              </li>
              <li>
                🏢 <Link href="https://dazzle.works">@dazzleofficial</Link> 공동창업자
              </li>
              <li>🏅 KOI 2021 중등부 1차 은상, 2차 동상</li>
            </ul>
          </div>
          <div>
            <h3>관심사</h3>
            <ul className="tw-font-semibold">
              <li>🕊️ 사용자의 자유를 존중하는 Free/Libre Software에 관심이 많습니다.</li>
              <li>
                💻 정보보안 / 프라이버시에 민감합니다.{' '}
                <Link href="https://spreadprivacy.com/three-reasons-why-the-nothing-to-hide-argument-is-flawed/">
                  Nothing to hide, nothing to fear... really?
                </Link>
              </li>
              <li>
                🔥 <Link href="https://neovim.io">Neovim</Link> +{' '}
                <Link href="https://www.kaufmann.no/roland/dvorak/">Programmer Dvorak</Link> +{' '}
                <Link href="https://www.parabola.nu/">Parabola GNU/Linux-libre</Link>를 좋아합니다.
              </li>
            </ul>
          </div>
          <div>
            <h3>🌐 좋아하는 언어</h3>
            <div className="tw-flex tw-flex-row tw-flex-wrap tw-justify-start">
              <img
                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                aria-label="TypeScript"
              />
              <img
                src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
                aria-label="C++"
              />
              <img
                src="https://img.shields.io/badge/WebAssembly-654FF0?style=for-the-badge&logo=WebAssembly&logoColor=white"
                aria-label="WebAssembly"
              />
            </div>
          </div>
          <div>
            <h3>📚 좋아하는 스택</h3>
            <div className="tw-flex tw-flex-row tw-flex-wrap tw-justify-start">
              <img
                src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
                aria-label="Next.js"
              />
              <img
                src="https://img.shields.io/badge/fastify-202020?style=for-the-badge&logo=fastify&logoColor=white"
                aria-label="Fastify"
              />
              <img
                src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                aria-label="Tailwind"
              />
              <img
                src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                aria-label="Sass"
              />
            </div>
          </div>
          <div>
            <h3>⌨️ 좋아하는 에디터</h3>
            <div className="tw-flex tw-flex-row tw-flex-wrap tw-justify-start">
              <img
                src="https://img.shields.io/badge/VIM-%2311AB00.svg?&style=for-the-badge&logo=vim&logoColor=white"
                aria-label="VIM"
              />
              <img
                src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
                aria-label="VSCode"
              />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
