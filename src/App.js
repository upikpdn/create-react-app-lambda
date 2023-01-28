import './App.css';
import { getPahlawanList, searchPahlawan } from "./api"
import { useEffect, useState } from 'react'

const App = () => {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    getPahlawanList().then((results) => {
      setHeroes(results)
    })
  }, [])

  const HeroesList = () => {
    return heroes.map((pahlawan, i) => {
      return (
        <div className='wrapper' key={i}>
          <div className='nama'>{pahlawan.name}</div>
          <div className='lahir'>Tahun Lahir : {pahlawan.birth_year}</div>
          <div className='wafat'>Tahun Wafat : {pahlawan.death_year}</div>
          <div className='semat'>Tahun Penyematan : {pahlawan.ascension_year}</div>
          <div className='deskripsi'>{pahlawan.description}</div>
        </div>
      )
    })
  }

  const cari = async (q) => {
    const que = await searchPahlawan(q)
    setHeroes(que)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>PAHLAWAN NASIONAL INDONESIA</h1>
        <p className='h3'>Pahlawan Nasional yaitu gelar yang diberikan kepada Warga Negara Indonesia atau seseorang yang berjuang melawan penjajahan di wilayah yang sekarang menjadi wilayah Indonesia yang gugur atau berpulang demi membela bangsa dan negara, atau yang semasa hidupnya memainkan aksi kepahlawanan atau menghasilkan prestasi dan karya yang luar biasa untuk pembangunan dan kemajuan bangsa dan negara Indonesia.</p>
        <p className='h3'>Gelar Pahlawan Nasional ditentukan oleh presiden. Sejak dilakukan pemberian gelar ini pada tahun 1959, nomenklaturnya tidak tetap. Untuk menyelaraskannya, maka dalam Undang-Undang Nomor 20 Tahun 2009 dituturkan bahwa gelar Pahlawan Nasional mencakup semua jenis gelar yang pernah diberikan sebelumnya, yaitu:</p>
        <p className='h3 p'>- Pahlawan Perintis Kemerdekaan</p>
        <p className='h3 p'>- Pahlawan Kemerdekaan Nasional</p>
        <p className='h3 p'>- Pahlawan Proklamator</p>
        <p className='h3 p'>- Pahlawan Kebangkitan Nasional</p>
        <p className='h3 p'>- Pahlawan Revolusi</p>
        <p className='h3 p'>- Pahlawan Ampera</p>
        <br></br>
        <input
          placeholder='Cari Pahlawan ...'
          className='search'
          list='data'
          onChange={({ target }) => cari(target.value)}
        />
        <datalist id='data'>
          {
            heroes.map(results =>{
              return(
              <option>{results.name}</option>
              )
            })
          }
        </datalist>
        <div className='container'>
          <HeroesList />
        </div>
      </header>
    </div>
  )
}

export default App;
