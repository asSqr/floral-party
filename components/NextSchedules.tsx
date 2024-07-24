const NextSchedules = () => {
  return (
    <p className="pt-10 pb-10 text-lg leading-7 text-gray-900 dark:text-gray-100">
      次回は{' '}
      <span className="text-3xl text-primary-500 dark:hover:text-primary-400">8/11 (日)</span> に{' '}
      <span className="text-3xl text-primary-500 dark:hover:text-primary-400">昭和記念公園</span>{' '}
      にて <span className="text-3xl text-primary-500 dark:hover:text-primary-400">ヒマワリ</span>{' '}
      を見る予定です！ <br /> <br />
      イベント詳細ページは{' '}
      <a
        href="/blog/events/15th-sunflower"
        className="text-3xl text-primary-400 dark:hover:text-primary-300"
      >
        こちら
      </a>
      <br /> <br />
      次々回は{' '}
      <span className="text-3xl text-primary-500 dark:hover:text-primary-400">
        9/15 (日)
      </span> に{' '}
      <span className="text-3xl text-primary-500 dark:hover:text-primary-400">神代植物公園</span>{' '}
      にて{' '}
      <span className="text-3xl text-primary-500 dark:hover:text-primary-400">
        熱帯スイレン・シクンシ・イエライシャン
      </span>{' '}
      を見る予定です！ <br /> <br />
      イベント詳細ページは{' '}
      <a
        href="/blog/events/16th-tropical-waterlily"
        className="text-3xl text-primary-400 dark:hover:text-primary-300"
      >
        こちら
      </a>
      <br /> <br />
      申し込みは「花を見る会」{' '}
      <a
        href="https://peatix.com/group/16297931/events"
        className="text-3xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        公式 Peatix
      </a>{' '}
      へお願いします！ <br /> <br />
      何かご不明な点がありましたら、
      <a
        href={'mailto:floral.party2023@gmail.com'}
        className="text-3xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        公式メール
      </a>{' '}
      あるいは{' '}
      <a
        href="https://twitter.com/floral_party"
        className="text-3xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        公式 X
      </a>{' '}
      へお願いします！
    </p>
  )
}

export default NextSchedules
