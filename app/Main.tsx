import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            「花を見る会」について
          </h1>

          <p className="pt-10 pb-10 text-lg leading-7 text-gray-900 dark:text-gray-100">
            「花を見る会」は、「花見という身近なテーマで色々な人と交流したい！」という願いの下、2023
            年 5 月に発足しました。
            <br />
            それからほぼ毎月開催しています。X (旧 Twitter)
            で募集したたくさんの方に参加いただきました。
            <br /> <br />
            当会では有名な名所ではなく、できるだけ空いている穴場のスポットで花を見ることをコンセプトとしています。
            <br />
            当会の植物アドバイザーの持つ豊富な穴場リストを参考に開催場所を選定しています。
            <br /> <br />
            どうぞお気軽にご参加ください。話すのが苦手という方も、不安になる必要は全くありません。それぞれのペースで花を見ながら楽しみましょう。
            <br />
            (そういう主催者自身もどちらかというと内気です) <br /> <br />
            このような会の主催は初めてで，至らぬ点もあるかと思いますが、よろしくお願いします。
          </p>

          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            次回開催予定
          </h1>

          <p className="pt-10 pb-10 text-lg leading-7 text-gray-900 dark:text-gray-100">
            次回は{' '}
            <span className="text-3xl text-primary-500 dark:hover:text-primary-400">2/18 (日)</span>{' '}
            に <span className="text-3xl text-primary-500 dark:hover:text-primary-400">皇居</span>{' '}
            にて <span className="text-3xl text-primary-500 dark:hover:text-primary-400">ウメ</span>{' '}
            を見る予定です！ <br /> <br /> <br />
            次々回は{' '}
            <span className="text-3xl text-primary-500 dark:hover:text-primary-400">
              3/31 (日)
            </span>{' '}
            に{' '}
            <span className="text-3xl text-primary-500 dark:hover:text-primary-400">
              国営昭和記念公園
            </span>{' '}
            にて{' '}
            <span className="text-3xl text-primary-500 dark:hover:text-primary-400">
              ナノハナ・サクラ・チューリップ
            </span>{' '}
            を見る予定です！ <br /> <br /> <br />
            申し込みは「花を見る会」{' '}
            <Link
              href={`mailto:${siteMetadata.email}`}
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

          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              最新の投稿
            </h1>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && '投稿が見つかりませんでした'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags, images } = post
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                          {images && images.length > 0 && (
                            <Image
                              src={images[0]}
                              alt={title}
                              className="pt-6"
                              width={220}
                              height={220}
                            />
                          )}
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`"${title}" を読みましょう`}
                          >
                            もっと見る &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>

          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end text-base font-medium leading-6">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="全ての投稿"
              >
                全ての投稿 &rarr;
              </Link>
            </div>
          )}

          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            過去の開催記録
          </h1>

          <p className="pt-6 pb-6 text-lg leading-7 text-gray-900 dark:text-gray-100">
            過去の開催記録については以下をご覧ください：
          </p>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/1st-rose"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 1 回 バラ (@与野公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image alt="バラ 1" src="/static/images/rose/rose-6.jpg" width={420} height={800} />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image alt="バラ 2" src="/static/images/rose/rose-8.jpg" width={420} height={800} />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="バラ 3"
                  src="/static/images/rose/rose-12.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="バラ 4"
                  src="/static/images/rose/rose-10.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/2nd-hydrangea"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 2 回 アジサイ (@昭和記念公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="アジサイ 1"
                  src="/static/images/hydrangea/hydrangea-1.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="アジサイ 2"
                  src="/static/images/hydrangea/hydrangea-3.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="アジサイ 3"
                  src="/static/images/hydrangea/hydrangea-12.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="アジサイ 4"
                  src="/static/images/hydrangea/hydrangea-15.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/3rd-morning-glory"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 3 回 アサガオ (@文京朝顔・ほおづき市)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="アサガオ 1"
                  src="/static/images/morning-glory/morning-glory-1.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="アサガオ 2"
                  src="/static/images/morning-glory/morning-glory-10.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="アサガオ 3"
                  src="/static/images/morning-glory/morning-glory-13.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="アサガオ 4"
                  src="/static/images/morning-glory/morning-glory-16.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/4th-hurricane-lily"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 4 回 ヒガンバナ (@小石川植物園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ヒガンバナ 1"
                  src="/static/images/hurricane-lily/hurricane-lily-10.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ヒガンバナ 2"
                  src="/static/images/hurricane-lily/hurricane-lily-11.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ヒガンバナ 3"
                  src="/static/images/hurricane-lily/hurricane-lily-30.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ヒガンバナ 4"
                  src="/static/images/hurricane-lily/hurricane-lily-36.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/5th-cosmos"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 5 回 コスモス (@都市農業公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="コスモス 1"
                  src="/static/images/cosmos/cosmos-5.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="コスモス 2"
                  src="/static/images/cosmos/cosmos-15.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="コスモス 3"
                  src="/static/images/cosmos/cosmos-18.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="コスモス 4"
                  src="/static/images/cosmos/cosmos-32.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/special-germany"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              特別編 マリーゴールド (@東京ドイツ村)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ドイツ 1"
                  src="/static/images/germany/germany-36.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ドイツ 2"
                  src="/static/images/germany/germany-37.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ドイツ 3"
                  src="/static/images/germany/germany-14.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ドイツ 4"
                  src="/static/images/germany/germany-25.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/6th-metasequoia"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 6 回 メタセコイア (@トーベ・ヤンソンあけぼの子どもの森公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="メタセコイア 1"
                  src="/static/images/metasequoia/metasequoia-21.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="メタセコイア 2"
                  src="/static/images/metasequoia/metasequoia-29.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="メタセコイア 3"
                  src="/static/images/metasequoia/metasequoia-32.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="メタセコイア 4"
                  src="/static/images/metasequoia/metasequoia-36.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/7th-sasanqua"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 7 回 サザンカ (@亀戸中央公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="サザンカ 1"
                  src="/static/images/sasanqua/sasanqua-18.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="サザンカ 2"
                  src="/static/images/sasanqua/sasanqua-40.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="サザンカ 3"
                  src="/static/images/sasanqua/sasanqua-57.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="サザンカ 4"
                  src="/static/images/sasanqua/sasanqua-62.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/8th-daffodil-wintersweet"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 8 回 スイセン・ロウバイ (@京王百草園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="スイセン・ロウバイ 1"
                  src="/static/images/daffo-win/daffo-win-20.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="スイセン・ロウバイ 2"
                  src="/static/images/daffo-win/daffo-win-39.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="スイセン・ロウバイ 3"
                  src="/static/images/daffo-win/daffo-win-44.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="スイセン・ロウバイ 4"
                  src="/static/images/daffo-win/daffo-win-56.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
