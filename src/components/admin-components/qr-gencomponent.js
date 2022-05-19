import React, { useState } from 'react'
import QRCode from 'qrcode'

function QrGencomponent() {
  // var movies = JSON.parse(sessionStorage.getItem('cart'));
  // const movies = sessionStorage.getItem('cart');
  const [url, setUrl] = useState('')
  const [qrcode, setQrCode] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 400,
      margin: 1,
    }, (err, url) => {
      if (err) return console.error(err)
      setQrCode(url)
    })
  }

  return (
    <div style={{ paddingBottom: "625px" }}>

      <input type="text" className='inputMod'
        placeholder="ENter the details"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)} />

      <div className="btnView">
        <button onClick={GenerateQRCode}> Generate </button>
      </div>
      <br />
      {qrcode && <>
        <img src={qrcode} />
        <br /><br />
        <a href={qrcode} class="fcc-btn" download="qrcode.png"> Download</a>
      </>}

    </div>
  )
}

export default QrGencomponent
