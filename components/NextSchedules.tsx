const NextSchedules = () => {
  return (
    <p className="pt-10 pb-10 text-lg leading-7 text-gray-900 dark:text-gray-100">
      次回は{' '}
      <span className="text-3xl text-primary-500 dark:hover:text-primary-400">2/16 (日)</span> に{' '}
      <span className="text-3xl text-primary-500 dark:hover:text-primary-400">昭和記念公園</span>{' '}
      にて{' '}
      <span className="text-3xl text-primary-500 dark:hover:text-primary-400">フクジュソウ</span>{' '}
      を見る予定です！ <br /> <br />
      イベント詳細ページは{' '}
      <a
        href="https://21th-amur-adonis.peatix.com"
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
