import React from "react";
const SectionHeader = ({previousPage, title}) => {
  return previousPage ? (
    <div className="pure-g section-header">
      <div class="section-title pure-u-1-5"
        onTouchTap={previousPage}>
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="pure-u-3-5 section-title">
        {title}
      </div>
      <div class="pure-u-1-5 section-title">&nbsp;
        </div>
    </div>
  ) : (
      <div className="pure-g section-header">
        <div class="pure-u-1 section-title">
          {title}
        </div>
      </div>
    );
};

export default SectionHeader;