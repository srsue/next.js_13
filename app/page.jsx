import Link from 'next/link'

const Home = () => {
  return (
    <>
      <h1>Wellcome to srsue Portfolio</h1>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/profile'>Profile</Link></li>
      </ul>
    </>
  )
}
export default Home;