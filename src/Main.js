import React, { useEffect, useState } from 'react';

function Main() {
  const [data, setData] = useState([]);
  const apiValue = '$hrmws$e-8547-65265-85845-12';
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'js/vendor/select2.full.min.js'; // Replace with the URL or path to your script
  //   script.async = true;
  //   script.onload = () => {
  //     // Initialize Select2 here
  //     window.$('#selectBasic').select2({placeholder: 'Treatment or venue'});
  //     // Other Select2 configurations and styles
  //     window.$('.select2-container').css('width', 'auto');
  //     window.$('.select2-container--default').toggleClass('select2-container--bootstrap4');
  //     window.$('.select2-container--bootstrap4').removeClass('select2-container--default');
  //   };
  //   document.body.appendChild(script);

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    // Fetch data from your API using both the API key and value in the Authorization header
    // fetch('https://skedwise.pro/sked_api_test/api/getservicetypes', {
      fetch('https://reqres.in/api/users?page=2', {
        method: 'GET',
        headers: {
          'SKED-API-KEY': `${apiValue}`,
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData.data);
        // console.log(responseData.data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
      const script = document.createElement('script');
    script.src = 'js/vendor/select2.full.min.js'; // Replace with the URL or path to your script
    script.async = true;
    script.onload = () => {
      // Initialize Select2 here
      window.$('#selectBasic').select2({placeholder: 'Treatment or venue'});
      // Other Select2 configurations and styles
      window.$('.select2-container').css('width', 'auto');
      window.$('.select2-container--default').toggleClass('select2-container--bootstrap4');
      window.$('.select2-container--bootstrap4').removeClass('select2-container--default');
      window.$(".selection").click(function(){
        window.$('.select2-container--default').toggleClass('select2-container--bootstrap4');
        window.$('.select2-container--bootstrap4').removeClass('select2-container--default');
      });
    };
    document.body.appendChild(script);
    const script2 = document.createElement('script');
    script2.src = 'js/vendor/datepicker/bootstrap-datepicker.min.js'; // Replace with the URL or path to your script
    script2.async = true;
    script2.onload = () => {
      // Initialize Select2 here
      window.$('#datePickerBasic').datepicker({
        autoclose: true,
      });
    };
    document.body.appendChild(script2);
  },[apiValue]); // Include apiValue in the dependency array
 
  return (
    <>
      <main>
        <div className="container">
        <section className="scroll-section">
        <div className="card mb-5">
            <div className="card-body row g-0">
              <div className="col-12">
                <h1><b>Book local beauty and wellness services</b></h1>
                <div className="mb-3 cta-3 text-primary">Join our email list!</div>
                <div className="text-muted mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="row gx-2 d-flex justify-content-center">
                  <div className="col-12 col-sm-2">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="text-muted mb-3 mb-sm-0">
                        <select id="selectBasic" className=''>
                          <option value="">Treatment or venue</option>

                          {data.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.email}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-2">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="text-muted mb-3 mb-sm-0">
                        <input type="email" className="form-control" placeholder="Current location"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-2">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="text-muted mb-3 mb-sm-0">
                        <input type="text" className="form-control date-picker" placeholder="Any date" id="datePickerBasic"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-2">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="text-muted mb-3 mb-sm-0">
                        <input type="email" className="form-control" placeholder="Any Time"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-auto">
                    <button className="btn btn-icon btn-icon-start btn-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="acorn-icons acorn-icons-chevron-right undefined"><path d="M7 4L12.6464 9.64645C12.8417 9.84171 12.8417 10.1583 12.6464 10.3536L7 16"></path></svg>
                      <span>Search</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    </main>
    </>
  );
}

export default Main;
