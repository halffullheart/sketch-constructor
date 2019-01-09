/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

const Color = require('../Color');

class Shadow {
  constructor(args, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, Shadow.model, args, {
        color: new Color( args.color )
      });
    }
  }
}

Shadow.model = {
  _class: "shadow",
  isEnabled: true,
  blurRadius: 4,
  color: Color.model,
  contextSettings: {
    _class: "graphicsContextSettings",
    blendMode: 0,
    opacity: 1
  },
  offsetX: 0,
  offsetY: 2,
  spread: 0
}

module.exports = Shadow;