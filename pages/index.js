import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<script>
	
 
var btnSelam=document.getElementById("selam");
	btnSelam.onclick=function(){
		window.alert("Siteme Hoşgeldiniz İyi Eğlenceler.");
	}
</script>
  
      <main>
        <Header title="Siteme Hoşgeldiniz !" />
        <p className="description">
    
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
