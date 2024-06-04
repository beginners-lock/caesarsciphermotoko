import { useState } from 'react';
import LoadingSpinner from './Spinner';
import { caesarscipher_backend } from 'declarations/caesarscipher_backend';
//import './App.css';

function App() {
  const [encryptedmsg, setEncryptedmsg] = useState('');
  const [decryptedmsg, setDecryptedmsg] = useState('');
  const [encryptionloading, setEncryptionloading] = useState('');
  const [decryptionloading, setDecryptionloading] = useState('');

  const encrypt = () => {
    let msg = document.getElementById('encryptiontextarea').value;
    let shift = document.getElementById('encshift').value;
    shift = shift?shift:1;
    console.log('enc:'+msg+' '+shift);
    setEncryptionloading(true);
    caesarscipher_backend.Encrypt(msg, parseInt(shift)).then((encryption) => {
      setEncryptedmsg(encryption);
      setEncryptionloading(false);
    });
  }

  const decrypt = () => {
    let msg = document.getElementById('decryptiontextarea').value;
    let shift = document.getElementById('decshift').value;
    shift = shift?shift:1;
    console.log('dec:'+msg+' '+shift);
    setDecryptionloading(true);
    caesarscipher_backend.Decrypt(msg, parseInt(shift)).then((decryption) => {
      setDecryptedmsg(decryption);
      setDecryptionloading(false);
    });
  }

  return (
    <div className="w-full h-[100vh] bg-repeat bg-cover box-border" style={{ border:'5px green solid'}}>
      <div className="w-full h-[100vh] flex flex-col items-center justify-start pt-8 px-5 box-border" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <div className="text-6xl font-bold text-white ">Caesar's Cipher</div>

        <div className='mt-6 italic text-white font-semibold text-lg flex flex-col items-center jsutify-center'>
          <div className='underline'>Encrypt Message</div>
          <div className='text-sm mt-2 flex flex-row items-center'>
            Shift
            <input id="encshift" className='px-1 py-1 ml-4 w-20 bg-transparent active:outline-none focus:outline-none' type="number" style={{border:'1px white solid'}} defaultValue={1} min={1}/>
          </div>  
        </div>
        <div className='w-full lg:w-[1000px] mt-4 flex flex-col lg:flex-row items-center justify-between'>
          <div className='w-[400px]'>
            <textarea id='encryptiontextarea' placeholder='Write your message here' className='text-sm p-2 w-[400px] h-[150px] bg-transparent text-white active:outline-none focus:outline-none resize-none' style={{ border: '2px white solid' }}>

            </textarea>
          </div>
          <div className='w-[100px] font-semibold flex flex-row items-center justify-center py-2 px-4 cursor-pointer rounded-md shadow-lg bg-amber-700 text-white text-sm my-4 lg:my-0' onClick={()=>{ encrypt(); }}>
            <div style={{display:encryptionloading?'none':'flex'}}>Encrypt</div>
            <LoadingSpinner
              borderColor={'white'}
              borderTopColor={'transparent'}
              size={'20px'}
              loading={encryptionloading}
            />
          </div>
          <div className='p-2 text-sm min-w-[400px] max-w-[400px] min-h-[150px] max-h-[150px] overflow-x-hidden overflow-y-auto text-white' style={{ border: '2px white dashed' }}>
            {encryptedmsg}
          </div>
        </div>

        <div className='mt-20 italic text-white font-semibold text-lg flex flex-col items-center jsutify-center'>
          <div className='underline'>Decrypt Message</div>
          <div className='text-sm mt-2 flex flex-row items-center'>
            Shift
            <input id="decshift" className='px-1 py-1 ml-4 w-20 bg-transparent active:outline-none focus:outline-none' type="number" style={{border:'1px white solid'}} defaultValue={1} min={1}/>
          </div>  
        </div>
        <div className='w-full lg:w-[1000px] mt-4 flex flex-col lg:flex-row items-center justify-between'>
          <div className='w-[400px]'>
            <textarea id='decryptiontextarea' placeholder='Write your encrypted message here' className='text-sm p-2 w-[400px] h-[150px] bg-transparent text-white active:outline-none focus:outline-none resize-none' style={{ border: '2px white solid' }}>

            </textarea>
          </div>
          <div className='w-[100px] font-semibold flex flex-row items-center justify-center py-2 px-4 cursor-pointer rounded-md shadow-lg bg-amber-700 text-white text-sm my-4 lg:my-0' onClick={()=>{ decrypt(); }}>
            <div style={{display:decryptionloading?'none':'flex'}}>Decrypt</div>
            <LoadingSpinner
              borderColor={'white'}
              borderTopColor={'transparent'}
              size={'20px'}
              loading={decryptionloading}
            />
          </div>
          <div className='p-2 text-sm min-w-[400px] max-w-[400px] min-h-[150px] max-h-[150px] overflow-x-hidden overflow-y-auto text-white' style={{ border: '2px white dashed' }}>
            {decryptedmsg}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

/*import { useState } from 'react';
import { caesarscipher_backend } from 'declarations/caesarscipher_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    caesarscipher_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;*/
