import * as d from '../../declarations';
import { augmentDiagnosticWithNode, buildWarn } from '@utils';
import ts from 'typescript';


export const validatePublicName = (config: d.Config, diagnostics: d.Diagnostic[], memberName: string, decorator: string, memberType: string, node: ts.Node) => {
  if (/^on(-|[A-Z])/.test(memberName)) {
    const warn = buildWarn(diagnostics);
    warn.messageText = [
      `The ${decorator} name "${memberName}" looks like an event.`,
      `Please use the "@Event()" decorator to expose events instead, not properties or methods.`,
    ].join('');
    augmentDiagnosticWithNode(config, warn, node);
    return;
  }
  if (RESERVED_PUBLIC_MEMBERS.has(memberName.toLowerCase())) {
    const warn = buildWarn(diagnostics);
    warn.messageText = [
      `The ${decorator} name "${memberName}" is a reserved public name. `,
      `Please rename the "${memberName}" ${memberType} so it does not conflict with an existing standardized prototype member. `,
      `Reusing ${memberType} names that are already defined on the element's prototype may cause `,
      `unexpected runtime errors or user-interface issues on various browsers, so it's best to avoid them entirely.`
    ].join('');
    augmentDiagnosticWithNode(config, warn, node);
    return;
  }
};

const HTML_ELEMENT_KEYS = [
  'title',
  'lang',
  'translate',
  'dir',
  // 'dataset',
  // 'hidden',
  'tabIndex',
  'accessKey',
  'draggable',
  // 'spellcheck',
  // 'autocapitalize',
  'contentEditable',
  'isContentEditable',
  // 'inputMode',
  'offsetParent',
  'offsetTop',
  'offsetLeft',
  'offsetWidth',
  'offsetHeight',
  'style',
  'innerText',
  'outerText',
  'oncopy',
  'oncut',
  'onpaste',
  'onabort',
  'onblur',
  'oncancel',
  'oncanplay',
  'oncanplaythrough',
  'onchange',
  'onclick',
  'onclose',
  'oncontextmenu',
  'oncuechange',
  'ondblclick',
  'ondrag',
  'ondragend',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondragstart',
  'ondrop',
  'ondurationchange',
  'onemptied',
  'onended',
  'onerror',
  'onfocus',
  'oninput',
  'oninvalid',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onload',
  'onloadeddata',
  'onloadedmetadata',
  'onloadstart',
  'onmousedown',
  'onmouseenter',
  'onmouseleave',
  'onmousemove',
  'onmouseout',
  'onmouseover',
  'onmouseup',
  'onmousewheel',
  'onpause',
  'onplay',
  'onplaying',
  'onprogress',
  'onratechange',
  'onreset',
  'onresize',
  'onscroll',
  'onseeked',
  'onseeking',
  'onselect',
  'onstalled',
  'onsubmit',
  'onsuspend',
  'ontimeupdate',
  'ontoggle',
  'onvolumechange',
  'onwaiting',
  'onwheel',
  'onauxclick',
  'ongotpointercapture',
  'onlostpointercapture',
  'onpointerdown',
  'onpointermove',
  'onpointerup',
  'onpointercancel',
  'onpointerover',
  'onpointerout',
  'onpointerenter',
  'onpointerleave',
  'onselectstart',
  'onselectionchange',
  'nonce',
  'click',
  'focus',
  'blur'
];

const ELEMENT_KEYS = [
  'namespaceURI',
  'prefix',
  'localName',
  'tagName',
  'id',
  'className',
  'classList',
  'slot',
  'attributes',
  'shadowRoot',
  'assignedSlot',
  'innerHTML',
  'outerHTML',
  'scrollTop',
  'scrollLeft',
  'scrollWidth',
  'scrollHeight',
  'clientTop',
  'clientLeft',
  'clientWidth',
  'clientHeight',
  'attributeStyleMap',
  'onbeforecopy',
  'onbeforecut',
  'onbeforepaste',
  'onsearch',
  'previousElementSibling',
  'nextElementSibling',
  'children',
  'firstElementChild',
  'lastElementChild',
  'childElementCount',
  'onfullscreenchange',
  'onfullscreenerror',
  'onwebkitfullscreenchange',
  'onwebkitfullscreenerror',
  'setPointerCapture',
  'releasePointerCapture',
  'hasPointerCapture',
  'hasAttributes',
  'getAttributeNames',
  'getAttribute',
  'getAttributeNS',
  'setAttribute',
  'setAttributeNS',
  'removeAttribute',
  'removeAttributeNS',
  'hasAttribute',
  'hasAttributeNS',
  'toggleAttribute',
  'getAttributeNode',
  'getAttributeNodeNS',
  'setAttributeNode',
  'setAttributeNodeNS',
  'removeAttributeNode',
  'closest',
  'matches',
  'webkitMatchesSelector',
  'attachShadow',
  'getElementsByTagName',
  'getElementsByTagNameNS',
  'getElementsByClassName',
  'insertAdjacentElement',
  'insertAdjacentText',
  'insertAdjacentHTML',
  'requestPointerLock',
  'getClientRects',
  'getBoundingClientRect',
  'scrollIntoView',
  'scroll',
  'scrollTo',
  'scrollBy',
  'scrollIntoViewIfNeeded',
  'animate',
  'computedStyleMap',
  'before',
  'after',
  'replaceWith',
  'remove',
  'prepend',
  'append',
  'querySelector',
  'querySelectorAll',
  'requestFullscreen',
  'webkitRequestFullScreen',
  'webkitRequestFullscreen',
  'part',
  'createShadowRoot',
  'getDestinationInsertionPoints'
];

const NODE_KEYS = [
  'ELEMENT_NODE',
  'ATTRIBUTE_NODE',
  'TEXT_NODE',
  'CDATA_SECTION_NODE',
  'ENTITY_REFERENCE_NODE',
  'ENTITY_NODE',
  'PROCESSING_INSTRUCTION_NODE',
  'COMMENT_NODE',
  'DOCUMENT_NODE',
  'DOCUMENT_TYPE_NODE',
  'DOCUMENT_FRAGMENT_NODE',
  'NOTATION_NODE',
  'DOCUMENT_POSITION_DISCONNECTED',
  'DOCUMENT_POSITION_PRECEDING',
  'DOCUMENT_POSITION_FOLLOWING',
  'DOCUMENT_POSITION_CONTAINS',
  'DOCUMENT_POSITION_CONTAINED_BY',
  'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC',
  'nodeType',
  'nodeName',
  'baseURI',
  'isConnected',
  'ownerDocument',
  'parentNode',
  'parentElement',
  'childNodes',
  'firstChild',
  'lastChild',
  'previousSibling',
  'nextSibling',
  'nodeValue',
  'textContent',
  'hasChildNodes',
  'getRootNode',
  'normalize',
  'cloneNode',
  'isEqualNode',
  'isSameNode',
  'compareDocumentPosition',
  'contains',
  'lookupPrefix',
  'lookupNamespaceURI',
  'isDefaultNamespace',
  'insertBefore',
  'appendChild',
  'replaceChild',
  'removeChild'
];

const JSX_KEYS = [
  'ref',
  'key'
];

const ALL_KEYS = [
  ...HTML_ELEMENT_KEYS,
  ...ELEMENT_KEYS,
  ...NODE_KEYS,
  ...JSX_KEYS,
].map(p => p.toLowerCase());

const RESERVED_PUBLIC_MEMBERS = new Set(ALL_KEYS);
