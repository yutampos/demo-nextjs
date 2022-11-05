import Head from "next/head";
const HeadInfo = () => {
  return (
    <Head>
      <title>毘沙門店　公式サイト｜日常に四川を味える喜びを</title>

      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <meta name="author" content="YUTA MIURA" />

      {/*  Social Share - Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:url" content="https://www.ogura-shop.com" />
      <meta
        property="og:image"
        content="https://www.dalufeng.jp/shared/img/shared/ogp.png"
      />
      <meta
        property="og:title"
        content="中華飯店　毘沙門店　公式サイト｜日常に四川を味える選択を"
      />
      <meta
        property="og:site_name"
        content="中華飯店　毘沙門店　公式サイト｜日常に四川を味える選択を"
      />
      <meta
        property="og:description"
        content="東京都・新宿で昼夜問わず中華を楽しめる人気の店「中華飯店 毘沙門店（ビシャモンテン）」。本場中国の味を日本でも楽しめるよう、辛さと旨味を合わせ持つ一皿を皆さまにご提供しております。"
      />
      <meta property="fb:app_id" content="954643861386437" />

      {/* SEO */}
      <meta name="keywords" content="大阪,南森町,中華,中国郷菜館 大陸風" />
      <meta
        name="description"
        content="東京都・新宿で昼夜問わず中華を楽しめる人気の店「中華飯店 毘沙門店（ビシャモンテン）」。本場中国の味を日本でも楽しめるよう、辛さと旨味を合わせ持つ一皿を皆さまにご提供しております。"
      />

      {/* Mobile */}
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="format-detection"
        content="telephone=no, date=no, address=no, email=no"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
export default HeadInfo;
