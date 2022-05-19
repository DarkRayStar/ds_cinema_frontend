import React,{useState} from 'react'
import QRCode from 'qrcode'

function QrGencomponent() {
    const [url, setUrl] = useState('')
    const [qrcode, setQrCode] = useState('')

    const GenerateQRCode = () => {
        QRCode.toDataURL(url,{
          width: 400,
          margin: 1,
        }, (err,url) => {
            if(err) return console.error(err)
            setQrCode(url)
        })
    }

  return (
    <div>
      <input type="text"
      placeholder="ENter the details"
      value={url}
      onChange={(evt) => setUrl(evt.target.value)} />
        <button onClick={GenerateQRCode}> Generate </button>
        {qrcode && <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png"> Download</a>
        </>}
    </div>
  )
}

export default QrGencomponent
