﻿/*!
 * ==============================================================================
 * mdObject JavaScript Library v1.0.12
 * http://mdObject.com/
 *
 * Copyright (c) 2015 mdObject, Inc. and other contributors
 * All Rights RESERVED
 * Released under the Microsoft Public License (MS-PL)
 * http://opensource.org/licenses/MS-PL
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Note: This mdObject are compatible only with GE EMR 9.8 & CPS 12.0 or above.
 * This file should not be modified
 *
 * Date: 2013-11-4
 * ============================================================================ */

import { MdObject } from './classes/classes';

/* initialize the module */

(function (_window) {

    let _mdObject;
    try {
        _mdObject = new MdObject(_window, _window.document);
        _window['mdObject'] = _mdObject;
    } catch (e) {
        console.error(e);
    }

    return _mdObject;
})(window);