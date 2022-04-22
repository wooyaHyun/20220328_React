// A03Fragment.js

import React, { Fragment } from "react";

function A03Fragment() {

  // Fragment와 빈 태그는 컴파일시 삭제된다.
  return (
    <Fragment>
      <h3>A03 Fragment</h3>

      <>
        This is Fragment Component
      </>
    </Fragment>
  )
}
export default A03Fragment;
