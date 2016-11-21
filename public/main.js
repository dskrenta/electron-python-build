import riot from 'riot';
import './components/app.tag';
import './components/login.tag';
import './components/mapview.tag';
import './components/earnings.tag';
import './components/article-table.tag';
import './components/dash-header.tag';
import './components/dropdown.tag';
import './components/modal-large.tag';
import './components/editor.tag';
import './components/earningsv2.tag';
import './components/report.tag';
import './components/bmo.tag';
import './components/amc.tag';
import './components/tns.tag';
import './components/time-icon.tag';
import './components/tracker.tag';
import './components/option-calculator.tag';
import './components/option.tag';
<<<<<<< HEAD
=======
import './components/options-chain.tag';
>>>>>>> ad2cdd2f56e666f127f1da14786e8cbed3db5225

const globalMixin = {
  request: (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(xhr.responseText);
      }
    }
    xhr.open("GET", url, true);
    xhr.send(null);
  }
};

riot.mixin(globalMixin);
riot.mount('app');
riot.route.start(true);
riot.route.exec();

/*
function request (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.responseText);
    }
  }
  xhr.open("GET", url, true);
  xhr.send(null);
}
*/
