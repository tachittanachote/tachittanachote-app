import Head from 'next/head'

export default function CustomHead() {
    return (
        <Head>
            <title>Tachittanachote's site!</title>
            <meta name="description" content="I am great to introduce myself to everyone. Visit me!" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#1a1a1a" />

            <meta property="og:title" content="Tachittanachote's site!" />
            <meta property="og:description" content="I am great to introduce myself to everyone. Visit me!" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.tachittanachote.com/" />
            <meta property="og:image" content="https://avatars.githubusercontent.com/u/54389403?v=4" />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
    )
}
