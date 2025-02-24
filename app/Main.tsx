import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Image from '@/components/Image'
import NextSchedules from '@/components/NextSchedules'
import About from '@/components/About'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            「花を見る会」について
          </h1>

          <About className="pt-10 pb-10 text-lg leading-7 text-gray-900 dark:text-gray-100" />

          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            次回開催予定
          </h1>

          <NextSchedules />

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
              href="/blog/special-1st-germany"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              特別編 第 1 回 マリーゴールド (@東京ドイツ村)
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

          <div className="pt-8 pb-8">
            <Link
              href="/blog/9th-plum"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 9 回 ウメ (@皇居)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ウメ 1"
                  src="/static/images/plum/plum-24.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ウメ 2"
                  src="/static/images/plum/plum-35.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ウメ 3"
                  src="/static/images/plum/plum-36.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ウメ 4"
                  src="/static/images/plum/plum-51.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/10th-sakura-tulip-canola-flower"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 10 回 サクラ・チューリップ・ナノハナ (@昭和記念公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="サクラ・チューリップ・ナノハナ 1"
                  src="/static/images/sakura-tulip-canola-flower/sakura-tulip-canola-flower-12.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="サクラ・チューリップ・ナノハナ 2"
                  src="/static/images/sakura-tulip-canola-flower/sakura-tulip-canola-flower-100.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="サクラ・チューリップ・ナノハナ 3"
                  src="/static/images/sakura-tulip-canola-flower/sakura-tulip-canola-flower-109.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="サクラ・チューリップ・ナノハナ 4"
                  src="/static/images/sakura-tulip-canola-flower/sakura-tulip-canola-flower-117.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/special-2nd-azalea"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              特別編 第 2 回 ツツジ (@根津神社)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ツツジ 1"
                  src="/static/images/azalea/azalea-16.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ツツジ 2"
                  src="/static/images/azalea/azalea-65.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ツツジ 3"
                  src="/static/images/azalea/azalea-67.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ツツジ 4"
                  src="/static/images/azalea/azalea-94.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/special-3rd-wisteria"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              特別編 第 3 回 フジ (@あしかがフラワーパーク)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="フジ 1"
                  src="/static/images/wisteria/wisteria-36.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="フジ 2"
                  src="/static/images/wisteria/wisteria-46.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="フジ 3"
                  src="/static/images/wisteria/wisteria-59.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="フジ 4"
                  src="/static/images/wisteria/wisteria-114.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/11th-nemophila"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 11 回 ネモフィラ (@都立舎人公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ネモフィラ 1"
                  src="/static/images/nemophila/nemophila-12.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ネモフィラ 2"
                  src="/static/images/nemophila/nemophila-30.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ネモフィラ 3"
                  src="/static/images/nemophila/nemophila-61.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ネモフィラ 4"
                  src="/static/images/nemophila/nemophila-63.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <Link
              href="/blog/12th-poppy"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 12 回 ポピー (@ポピー・ハッピースクエア)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ポピー 1"
                  src="/static/images/poppy/poppy-28.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ポピー 2"
                  src="/static/images/poppy/poppy-31.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ポピー 3"
                  src="/static/images/poppy/poppy-34.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ポピー 4"
                  src="/static/images/poppy/poppy-77.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="pt-8 pb-8">
            <Link
              href="/blog/13th-lily"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 13 回 ユリ (@日比谷公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ユリ 1"
                  src="/static/images/lily/lily-43.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ユリ 2"
                  src="/static/images/lily/lily-46.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ユリ 3"
                  src="/static/images/lily/lily-58.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ユリ 4"
                  src="/static/images/lily/lily-61.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="pt-8 pb-8">
            <Link
              href="/blog/14th-lotus-waterlily"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 14 回 ハス・オニバス・アサザ (@水元公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ハス・オニバス・アサザ 1"
                  src="/static/images/lotus-waterlily/lotus-waterlily-39.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ハス・オニバス・アサザ 2"
                  src="/static/images/lotus-waterlily/lotus-waterlily-13.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ハス・オニバス・アサザ 3"
                  src="/static/images/lotus-waterlily/lotus-waterlily-48.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ハス・オニバス・アサザ 4"
                  src="/static/images/lotus-waterlily/lotus-waterlily-67.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="pt-8 pb-8">
            <Link
              href="/blog/16th-tropical-waterlily"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 16 回 熱帯スイレン・サガリバナ・パラグアイオニバス (@神代植物公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="熱帯スイレン・サガリバナ・パラグアイオニバス 1"
                  src="/static/images/tropical-waterlily/tropical-waterlily-20.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="熱帯スイレン・サガリバナ・パラグアイオニバス 2"
                  src="/static/images/tropical-waterlily/tropical-waterlily-29.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="熱帯スイレン・サガリバナ・パラグアイオニバス 3"
                  src="/static/images/tropical-waterlily/tropical-waterlily-48.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="熱帯スイレン・サガリバナ・パラグアイオニバス 4"
                  src="/static/images/tropical-waterlily/tropical-waterlily-56.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="pt-8 pb-8">
            <Link
              href="/blog/17th-autumn-roses"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 17 回 秋バラ (@旧古河庭園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="秋バラ 1"
                  src="/static/images/autumn-roses/autumn-roses-30.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="秋バラ 2"
                  src="/static/images/autumn-roses/autumn-roses-69.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="秋バラ 3"
                  src="/static/images/autumn-roses/autumn-roses-147.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="秋バラ 4"
                  src="/static/images/autumn-roses/autumn-roses-153.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="pt-8 pb-8">
            <Link
              href="/blog/18th-camellia"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 18 回 ツバキ (@伊豆大島)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ツバキ 1"
                  src="/static/images/camellia/camellia-68.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ツバキ 2"
                  src="/static/images/camellia/camellia-84.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ツバキ 3"
                  src="/static/images/camellia/camellia-103.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ツバキ 4"
                  src="/static/images/camellia/camellia-104.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="pt-8 pb-8">
            <Link
              href="/blog/19th-maple"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 19 回 モミジ (@大田黒公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="モミジ 1"
                  src="/static/images/maple/maple-8.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="モミジ 2"
                  src="/static/images/maple/maple-10.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="モミジ 3"
                  src="/static/images/maple/maple-17.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="モミジ 4"
                  src="/static/images/maple/maple-18.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="pt-8 pb-8">
            <Link
              href="/blog/20th-peony-ice-tulip"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 20 回 ボタン・アイスチューリップ (@上野恩賜公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ボタン・アイスチューリップ 1"
                  src="/static/images/peony-ice-tulip/peony-ice-tulip-29.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ボタン・アイスチューリップ 2"
                  src="/static/images/peony-ice-tulip/peony-ice-tulip-71.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ボタン・アイスチューリップ 3"
                  src="/static/images/peony-ice-tulip/peony-ice-tulip-176.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="ボタン・アイスチューリップ 4"
                  src="/static/images/peony-ice-tulip/peony-ice-tulip-216.jpg"
                  width={420}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="pt-8 pb-8">
            <Link
              href="/blog/21th-amur-adonis"
              className="text-2xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              第 21 回 フクジュソウ (@昭和記念公園)
            </Link>

            <div className="pt-8 flex flex-wrap overflow-hidden xl:-mx-2">
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="フクジュソウ 1"
                  src="/static/images/amur-adonis/amur-adonis-4.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="フクジュソウ 2"
                  src="/static/images/amur-adonis/amur-adonis-5.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="フクジュソウ 3"
                  src="/static/images/amur-adonis/amur-adonis-7.jpg"
                  width={420}
                  height={800}
                />
              </div>
              <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
                <Image
                  alt="フクジュソウ 4"
                  src="/static/images/amur-adonis/amur-adonis-18.jpg"
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
