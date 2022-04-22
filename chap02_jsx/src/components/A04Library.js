// A04Library.js
// npm i jquery

import React from 'react'
import $ from 'jquery'

function A04Library() {

  const getTotal = () => {
    const qty = $('#qty').val();
    const cost = $('#cost').val();

    const result = qty * cost;
    $('#result').html(result);
  };

  return (
    <div>
      <h3>A04 jQuery</h3>

      <div>
        <input type="text" className='form-control' id="qty" />
        <input type="text" className='form-control' id="cost" />
        <button onClick={getTotal}>CLICK</button>
      </div>

      <div>
        Total: <span id="result"></span>
      </div>
    </div>
  )
}

export default A04Library