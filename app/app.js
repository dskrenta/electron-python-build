'use strict';
import { remote } from 'electron';
import * as riot from 'riot';
import normalizeUrl from 'normalize-url';

// RIOT tag imports
import './components/main.js';

riot.mount('main');

// console.log(normalizeUrl('octograde.com'));
