import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('white');
  const [currentStep, setCurrentStep] = useState(0);

  const [firstName, setFirstName] = useState('');
  const [firstNameValid, setFirstNameValid] = useState(false);

  const [lastName, setLastName] = useState('');
  const [lastNameValid, setLastNameValid] = useState(false);

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const [phone, setPhone] = useState('');
  const [phoneValid, setPhoneValid] = useState(false);

  const [coutry, setCoutry] = useState('');
  const [coutryValid, setCoutryValid] = useState(false);

  const [region, setRegion] = useState('');
  const [regionValid, setRegionValid] = useState(false);

  const [city, setCity] = useState('');
  const [cityValid, setCityValid] = useState(false);

  const [address, setAddress] = useState('');
  const [addressValid, setAddressValid] = useState(false);

  const [building, setBuilding] = useState('');
  const [apartment, setApartment] = useState('');
  const [comment, setСomment] = useState('');
  const [expectation, setExpectation] = useState('');
  const [news, setNews] = useState('');

  const step = <span>
    (step {currentStep} of 5)
  </span>

  function ShowStep() {
    if (currentStep === 0) {
      return (
        <div className='step step-start'>
          <h2>
            You must create account to view this content
          </h2>
          <div className='control'>
            <button onClick={nextStep}>
              Сreate
            </button>
          </div>
        </div>
      )
    } else if (currentStep === 1) {
      return (
        <div className='step'>
          <h2>
            Name
            {step}
          </h2>
          <div className='inputs'>
            <label>
              First Name <span>*</span>
              <input type='text' placeholder='Required field' value={firstName} onChange={handleFirstName} />
            </label>
            <label>
              Last Name <span>*</span>
              <input type='text' placeholder='Required field' name='surname' value={lastName} onChange={handleLastName} />
            </label>
          </div>
          <div className='control'>
            <button onClick={previousStep}>
              Previous
            </button>
            <button onClick={nextStep} disabled={(firstNameValid && lastNameValid) ? false : true}>
              Next
            </button>
          </div>
        </div>
      )
    } else if (currentStep === 2) {
      return (
        <div className='step'>
          <h2>
            Email & Phone
            {step}
          </h2>
          <div className='inputs'>
            <label>
              Email <span>*</span>
              <input type='email' value={email} onChange={handleEmail} />
            </label>
            <label>
              Phone <span>*</span>
              <input type='tel' value={phone} onChange={handlePhone} />
            </label>
          </div>
          <div className='control'>
            <button onClick={previousStep}>
              Previous
            </button>
            <button onClick={nextStep} disabled={(phoneValid && emailValid) ? false : true}>
              Next
            </button>
          </div>
        </div>
      )
    } else if (currentStep === 3) {
      return (
        <div className='step'>
          <h2>
            Country & State
            {step}
          </h2>
          <div className='inputs'>
            <label>
              Country <span>*</span>
              <input type='text' value={coutry} onChange={handleCountry} />
            </label>
            <label>
              State <span>*</span>
              <input type='text' value={region} onChange={handleRegion} />
            </label>
          </div>
          <div className='control'>
            <button onClick={previousStep}>
              Previous
            </button>
            <button onClick={nextStep} disabled={(coutryValid && regionValid) ? false : true}>
              Next
            </button>
          </div>
        </div>
      )
    } else if (currentStep === 4) {
      return (
        <div className='step'>
          <h2>
            City & Street
            {step}
          </h2>
          <div className='inputs cl-2'>
            <label>
              City <span>*</span>
              <input type='text' value={city} onChange={handleCity} />
            </label>
            <label>
              Street <span>*</span>
              <input type='text' value={address} onChange={handleAddress} />
            </label>
            <label>
              Building
              <input type='text' value={building} onChange={(e) => setBuilding(e.target.value)} />
            </label>
            <label>
              Apartment
              <input type='text' value={apartment} onChange={(e) => setApartment(e.target.value)} />
            </label>
          </div>
          <div className='control'>
            <button onClick={previousStep}>
              Previous
            </button>
            <button onClick={nextStep} disabled={(cityValid && addressValid) ? false : true}>
              Next
            </button>
          </div>
        </div>
      )
    } else if (currentStep === 5) {
      return (
        <div className='step'>
          <h2>
            Other
            {step}
          </h2>
          <div className='inputs cl-1'>
            <label>
              How will you use our app?
              <textarea value={comment} onChange={(e) => setСomment(e.target.value)} />
            </label>
            <label>
              What do you expect from the app?
              <textarea value={expectation} onChange={(e) => setExpectation(e.target.value)} />
            </label>
            <label>
              <input type='checkbox' checked={news} onClick={(e) => setNews(e.target.checked)} />
              I want to receive news and updates
            </label>
          </div>
          <div className='control'>
            <button onClick={previousStep}>
              Previous
            </button>
            <button onClick={nextStep}>
              Create Account
            </button>
          </div>
        </div>
      )
    } else if (currentStep === 6) {
      return (
        <div className='step step-content'>
          <h2>
            Congratulations, you have created an account!
          </h2>
          <h3>
            Here's your content!
          </h3>
          <div className='content'>
            <img alt='content' src='https://blog.soundcloud.com/wp-content/uploads/2011/11/kitten.jpg' />
          </div>
        </div>
      )
    }
  }

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  function previousStep() {
    setCurrentStep(currentStep - 1);
  }

  function setValid(e) {
    e.target.classList.remove('invalid');
    e.target.placeholder = 'Required field';
  }

  function handleFirstName(e) {
    let firstNameValue = e.target.value;
    setFirstName(firstNameValue);
    if (firstNameValue !== '') {
      setFirstNameValid(true);
      setValid(e);
    } else {
      setFirstNameValid(false);
      e.target.classList.add('invalid');
    }
  }

  function handleLastName(e) {
    let lastNameValue = e.target.value;
    setLastName(lastNameValue);
    if (lastNameValue !== '') {
      setLastNameValid(true);
      setValid(e);
    } else {
      setLastNameValid(false);
      e.target.classList.add('invalid');
    }
  }

  function handlePhone(e) {
    let phoneValue = e.target.value;
    setPhone(phoneValue);
    if (phoneValue !== '') {
      setPhoneValid(true);
      setValid(e);
    } else {
      setPhoneValid(false);
      e.target.classList.add('invalid');
    }
  }

  function handleEmail(e) {
    let emailValue = e.target.value;
    setEmail(emailValue);
    if (emailValue !== '') {
      setEmailValid(true);
      setValid(e);
    } else {
      setEmailValid(false);
      e.target.classList.add('invalid');
    }
  }

  function handleCountry(e) {
    let countryValue = e.target.value;
    setCoutry(countryValue);
    if (countryValue !== '') {
      setCoutryValid(true);
      setValid(e);
    } else {
      setCoutryValid(false);
      e.target.classList.add('invalid');
    }
  }

  function handleRegion(e) {
    let regionValue = e.target.value;
    setRegion(regionValue);
    if (regionValue !== '') {
      setRegionValid(true);
      setValid(e);
    } else {
      setRegionValid(false);
      e.target.classList.add('invalid');
    }
  }

  function handleCity(e) {
    let cityValue = e.target.value;
    setCity(cityValue);
    if (cityValue !== '') {
      setCityValid(true);
      setValid(e);
    } else {
      setCityValid(false);
      e.target.classList.add('invalid');
    }
  }

  function handleAddress(e) {
    let addressValue = e.target.value;
    setAddress(addressValue);
    if (addressValue !== '') {
      setAddressValid(true);
      setValid(e);
    } else {
      setAddressValid(false);
      e.target.classList.add('invalid');
    }
  }

  function changeTheme(e) {
    (e.target.checked) ? setTheme('dark') : setTheme('white');
  }

  return (
    <div className={(theme === 'white') ? 'app' : 'app dark'}>
      <header>
        <h1>
          App Logo
        </h1>
        <div>
          <p>
            Dark theme {(theme === 'white') ? 'OFF' : 'ON '}
          </p>
          <label className='switch'>
            <input type='checkbox' onClick={changeTheme} />
            <span className='slider'></span>
          </label>
        </div>
      </header>
      <main>
        {ShowStep()}
      </main>
    </div>
  );
}

export default App;