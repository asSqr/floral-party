import Link from 'next/link'

const NextSchedules = () => {
  return (
    <p className="pt-10 pb-10 text-lg leading-7 text-gray-900 dark:text-gray-100">
      次回は{' '}
      <span className="text-3xl text-primary-500 dark:hover:text-primary-400">4/28 (日)</span> に{' '}
      <span className="text-3xl text-primary-500 dark:hover:text-primary-400">
        国営昭和記念公園
      </span>{' '}
      にて <span className="text-3xl text-primary-500 dark:hover:text-primary-400">ネモフィラ</span>{' '}
      を見る予定です！ <br /> <br /> <br />
      次々回は{' '}
      <span className="text-3xl text-primary-500 dark:hover:text-primary-400">
        5/19 (日)
      </span> に{' '}
      <span className="text-3xl text-primary-500 dark:hover:text-primary-400">
        ポピー・ハッピースクエア
      </span>{' '}
      にて <span className="text-3xl text-primary-500 dark:hover:text-primary-400">ポピー</span>{' '}
      を見る予定です！ <br /> <br /> <br />
      申し込みは「花を見る会」{' '}
      <Link
        href={'mailto:floral.party2023@gmail.com'}
        className="text-3xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        公式メール
      </Link>{' '}
      あるいは{' '}
      <Link
        href="https://twitter.com/floral_party"
        className="text-3xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        公式 X
      </Link>{' '}
      へお願いします！
    </p>
  )
}

export default NextSchedules
