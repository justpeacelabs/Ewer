import React from "react";
const SectionHeader = ({previousPage}) => (
  <div className="pure-g section-header">
    <div class="section-title pure-u-1-5"
      onTouchTap={previousPage}>
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
    <div class="pure-u-3-5 section-title">
      Report a rumour
        </div>
    <div class="pure-u-1-5 section-title">&nbsp;
        </div>
  </div>
);

export default SectionHeader;