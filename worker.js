// used in Attr to signal changes
const CHANGED = Symbol('changed');

// used in Element to setup once classList
const CLASS_LIST = Symbol('classList');

// used in Document to attach once customElements
const CUSTOM_ELEMENTS = Symbol('CustomElements');

// used in HTMLTemplateElement
const CONTENT = Symbol('content');

// used in Element for data attributes
const DATASET = Symbol('dataset');

// used in Document to attach the DocType
const DOCTYPE = Symbol('doctype');

// used in parser and Document to attach once a DOMParser
const DOM_PARSER = Symbol('DOMParser');

// used to reference an end node
const END = Symbol('end');

// used in Document to make the globalThis an event target
const EVENT_TARGET = Symbol('EventTarget');

// used to augment a created document defaultView
const GLOBALS = Symbol('globals');

// used in both Canvas and Document to provide images
const IMAGE = Symbol('image');

// used to define Document mime type
const MIME = Symbol('mime');

// used in Document to attach once MutationObserver
const MUTATION_OBSERVER = Symbol('MutationObserver');

// used to define next node reference
const NEXT = Symbol('next');

// used to define Attr owner elements
const OWNER_ELEMENT = Symbol('ownerElement');

// used to define previous node reference
const PREV = Symbol('prev');

// used to define various "private" properties
const PRIVATE = Symbol('private');

// used to define the CSSStyleSheet.sheet
const SHEET = Symbol('sheet');

// used to define start node reference
const START = Symbol('start');

// used to define special CSS style attribute
const STYLE = Symbol('style');

// used to upgrade Custom Elements
const UPGRADE = Symbol('upgrade');

// used to define generic values
const VALUE = Symbol('value');

// Generated using scripts/write-decode-map.ts
var htmlDecodeTree = new Uint16Array(
// prettier-ignore
"\u1d41<\xd5\u0131\u028a\u049d\u057b\u05d0\u0675\u06de\u07a2\u07d6\u080f\u0a4a\u0a91\u0da1\u0e6d\u0f09\u0f26\u10ca\u1228\u12e1\u1415\u149d\u14c3\u14df\u1525\0\0\0\0\0\0\u156b\u16cd\u198d\u1c12\u1ddd\u1f7e\u2060\u21b0\u228d\u23c0\u23fb\u2442\u2824\u2912\u2d08\u2e48\u2fce\u3016\u32ba\u3639\u37ac\u38fe\u3a28\u3a71\u3ae0\u3b2e\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803b\xc6\u40c6P\u803b&\u4026cute\u803b\xc1\u40c1reve;\u4102\u0100iyx}rc\u803b\xc2\u40c2;\u4410r;\uc000\ud835\udd04rave\u803b\xc0\u40c0pha;\u4391acr;\u4100d;\u6a53\u0100gp\x9d\xa1on;\u4104f;\uc000\ud835\udd38plyFunction;\u6061ing\u803b\xc5\u40c5\u0100cs\xbe\xc3r;\uc000\ud835\udc9cign;\u6254ilde\u803b\xc3\u40c3ml\u803b\xc4\u40c4\u0400aceforsu\xe5\xfb\xfe\u0117\u011c\u0122\u0127\u012a\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6ae7ed;\u6306y;\u4411\u0180crt\u0105\u010b\u0114ause;\u6235noullis;\u612ca;\u4392r;\uc000\ud835\udd05pf;\uc000\ud835\udd39eve;\u42d8c\xf2\u0113mpeq;\u624e\u0700HOacdefhilorsu\u014d\u0151\u0156\u0180\u019e\u01a2\u01b5\u01b7\u01ba\u01dc\u0215\u0273\u0278\u027ecy;\u4427PY\u803b\xa9\u40a9\u0180cpy\u015d\u0162\u017aute;\u4106\u0100;i\u0167\u0168\u62d2talDifferentialD;\u6145leys;\u612d\u0200aeio\u0189\u018e\u0194\u0198ron;\u410cdil\u803b\xc7\u40c7rc;\u4108nint;\u6230ot;\u410a\u0100dn\u01a7\u01adilla;\u40b8terDot;\u40b7\xf2\u017fi;\u43a7rcle\u0200DMPT\u01c7\u01cb\u01d1\u01d6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01e2\u01f8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020foubleQuote;\u601duote;\u6019\u0200lnpu\u021e\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6a74\u0180git\u022f\u0236\u023aruent;\u6261nt;\u622fourIntegral;\u622e\u0100fr\u024c\u024e;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6a2fcr;\uc000\ud835\udc9ep\u0100;C\u0284\u0285\u62d3ap;\u624d\u0580DJSZacefios\u02a0\u02ac\u02b0\u02b4\u02b8\u02cb\u02d7\u02e1\u02e6\u0333\u048d\u0100;o\u0179\u02a5trahd;\u6911cy;\u4402cy;\u4405cy;\u440f\u0180grs\u02bf\u02c4\u02c7ger;\u6021r;\u61a1hv;\u6ae4\u0100ay\u02d0\u02d5ron;\u410e;\u4414l\u0100;t\u02dd\u02de\u6207a;\u4394r;\uc000\ud835\udd07\u0100af\u02eb\u0327\u0100cm\u02f0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031ccute;\u40b4o\u0174\u030b\u030d;\u42d9bleAcute;\u42ddrave;\u4060ilde;\u42dcond;\u62c4ferentialD;\u6146\u0470\u033d\0\0\0\u0342\u0354\0\u0405f;\uc000\ud835\udd3b\u0180;DE\u0348\u0349\u034d\u40a8ot;\u60dcqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03cf\u03e2\u03f8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037b\xbb\u0349nArrow;\u61d3\u0100eo\u0387\u03a4ft\u0180ART\u0390\u0396\u03a1rrow;\u61d0ightArrow;\u61d4e\xe5\u02cang\u0100LR\u03ab\u03c4eft\u0100AR\u03b3\u03b9rrow;\u67f8ightArrow;\u67faightArrow;\u67f9ight\u0100AT\u03d8\u03derrow;\u61d2ee;\u62a8p\u0241\u03e9\0\0\u03efrrow;\u61d1ownArrow;\u61d5erticalBar;\u6225n\u0300ABLRTa\u0412\u042a\u0430\u045e\u047f\u037crrow\u0180;BU\u041d\u041e\u0422\u6193ar;\u6913pArrow;\u61f5reve;\u4311eft\u02d2\u043a\0\u0446\0\u0450ightVector;\u6950eeVector;\u695eector\u0100;B\u0459\u045a\u61bdar;\u6956ight\u01d4\u0467\0\u0471eeVector;\u695fector\u0100;B\u047a\u047b\u61c1ar;\u6957ee\u0100;A\u0486\u0487\u62a4rrow;\u61a7\u0100ct\u0492\u0497r;\uc000\ud835\udc9frok;\u4110\u0800NTacdfglmopqstux\u04bd\u04c0\u04c4\u04cb\u04de\u04e2\u04e7\u04ee\u04f5\u0521\u052f\u0536\u0552\u055d\u0560\u0565G;\u414aH\u803b\xd0\u40d0cute\u803b\xc9\u40c9\u0180aiy\u04d2\u04d7\u04dcron;\u411arc\u803b\xca\u40ca;\u442dot;\u4116r;\uc000\ud835\udd08rave\u803b\xc8\u40c8ement;\u6208\u0100ap\u04fa\u04fecr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65fberySmallSquare;\u65ab\u0100gp\u0526\u052aon;\u4118f;\uc000\ud835\udd3csilon;\u4395u\u0100ai\u053c\u0549l\u0100;T\u0542\u0543\u6a75ilde;\u6242librium;\u61cc\u0100ci\u0557\u055ar;\u6130m;\u6a73a;\u4397ml\u803b\xcb\u40cb\u0100ip\u056a\u056fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058d\u05b2\u05ccy;\u4424r;\uc000\ud835\udd09lled\u0253\u0597\0\0\u05a3mallSquare;\u65fcerySmallSquare;\u65aa\u0370\u05ba\0\u05bf\0\0\u05c4f;\uc000\ud835\udd3dAll;\u6200riertrf;\u6131c\xf2\u05cb\u0600JTabcdfgorst\u05e8\u05ec\u05ef\u05fa\u0600\u0612\u0616\u061b\u061d\u0623\u066c\u0672cy;\u4403\u803b>\u403emma\u0100;d\u05f7\u05f8\u4393;\u43dcreve;\u411e\u0180eiy\u0607\u060c\u0610dil;\u4122rc;\u411c;\u4413ot;\u4120r;\uc000\ud835\udd0a;\u62d9pf;\uc000\ud835\udd3eeater\u0300EFGLST\u0635\u0644\u064e\u0656\u065b\u0666qual\u0100;L\u063e\u063f\u6265ess;\u62dbullEqual;\u6267reater;\u6aa2ess;\u6277lantEqual;\u6a7eilde;\u6273cr;\uc000\ud835\udca2;\u626b\u0400Aacfiosu\u0685\u068b\u0696\u069b\u069e\u06aa\u06be\u06caRDcy;\u442a\u0100ct\u0690\u0694ek;\u42c7;\u405eirc;\u4124r;\u610clbertSpace;\u610b\u01f0\u06af\0\u06b2f;\u610dizontalLine;\u6500\u0100ct\u06c3\u06c5\xf2\u06a9rok;\u4126mp\u0144\u06d0\u06d8ownHum\xf0\u012fqual;\u624f\u0700EJOacdfgmnostu\u06fa\u06fe\u0703\u0707\u070e\u071a\u071e\u0721\u0728\u0744\u0778\u078b\u078f\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803b\xcd\u40cd\u0100iy\u0713\u0718rc\u803b\xce\u40ce;\u4418ot;\u4130r;\u6111rave\u803b\xcc\u40cc\u0180;ap\u0720\u072f\u073f\u0100cg\u0734\u0737r;\u412ainaryI;\u6148lie\xf3\u03dd\u01f4\u0749\0\u0762\u0100;e\u074d\u074e\u622c\u0100gr\u0753\u0758ral;\u622bsection;\u62c2isible\u0100CT\u076c\u0772omma;\u6063imes;\u6062\u0180gpt\u077f\u0783\u0788on;\u412ef;\uc000\ud835\udd40a;\u4399cr;\u6110ilde;\u4128\u01eb\u079a\0\u079ecy;\u4406l\u803b\xcf\u40cf\u0280cfosu\u07ac\u07b7\u07bc\u07c2\u07d0\u0100iy\u07b1\u07b5rc;\u4134;\u4419r;\uc000\ud835\udd0dpf;\uc000\ud835\udd41\u01e3\u07c7\0\u07ccr;\uc000\ud835\udca5rcy;\u4408kcy;\u4404\u0380HJacfos\u07e4\u07e8\u07ec\u07f1\u07fd\u0802\u0808cy;\u4425cy;\u440cppa;\u439a\u0100ey\u07f6\u07fbdil;\u4136;\u441ar;\uc000\ud835\udd0epf;\uc000\ud835\udd42cr;\uc000\ud835\udca6\u0580JTaceflmost\u0825\u0829\u082c\u0850\u0863\u09b3\u09b8\u09c7\u09cd\u0a37\u0a47cy;\u4409\u803b<\u403c\u0280cmnpr\u0837\u083c\u0841\u0844\u084dute;\u4139bda;\u439bg;\u67ealacetrf;\u6112r;\u619e\u0180aey\u0857\u085c\u0861ron;\u413ddil;\u413b;\u441b\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087e\u08a9\u08b1\u08e0\u08e6\u08fc\u092f\u095b\u0390\u096a\u0100nr\u0883\u088fgleBracket;\u67e8row\u0180;BR\u0899\u089a\u089e\u6190ar;\u61e4ightArrow;\u61c6eiling;\u6308o\u01f5\u08b7\0\u08c3bleBracket;\u67e6n\u01d4\u08c8\0\u08d2eeVector;\u6961ector\u0100;B\u08db\u08dc\u61c3ar;\u6959loor;\u630aight\u0100AV\u08ef\u08f5rrow;\u6194ector;\u694e\u0100er\u0901\u0917e\u0180;AV\u0909\u090a\u0910\u62a3rrow;\u61a4ector;\u695aiangle\u0180;BE\u0924\u0925\u0929\u62b2ar;\u69cfqual;\u62b4p\u0180DTV\u0937\u0942\u094cownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61bfar;\u6958ector\u0100;B\u0965\u0966\u61bcar;\u6952ight\xe1\u039cs\u0300EFGLST\u097e\u098b\u0995\u099d\u09a2\u09adqualGreater;\u62daullEqual;\u6266reater;\u6276ess;\u6aa1lantEqual;\u6a7dilde;\u6272r;\uc000\ud835\udd0f\u0100;e\u09bd\u09be\u62d8ftarrow;\u61daidot;\u413f\u0180npw\u09d4\u0a16\u0a1bg\u0200LRlr\u09de\u09f7\u0a02\u0a10eft\u0100AR\u09e6\u09ecrrow;\u67f5ightArrow;\u67f7ightArrow;\u67f6eft\u0100ar\u03b3\u0a0aight\xe1\u03bfight\xe1\u03caf;\uc000\ud835\udd43er\u0100LR\u0a22\u0a2ceftArrow;\u6199ightArrow;\u6198\u0180cht\u0a3e\u0a40\u0a42\xf2\u084c;\u61b0rok;\u4141;\u626a\u0400acefiosu\u0a5a\u0a5d\u0a60\u0a77\u0a7c\u0a85\u0a8b\u0a8ep;\u6905y;\u441c\u0100dl\u0a65\u0a6fiumSpace;\u605flintrf;\u6133r;\uc000\ud835\udd10nusPlus;\u6213pf;\uc000\ud835\udd44c\xf2\u0a76;\u439c\u0480Jacefostu\u0aa3\u0aa7\u0aad\u0ac0\u0b14\u0b19\u0d91\u0d97\u0d9ecy;\u440acute;\u4143\u0180aey\u0ab4\u0ab9\u0aberon;\u4147dil;\u4145;\u441d\u0180gsw\u0ac7\u0af0\u0b0eative\u0180MTV\u0ad3\u0adf\u0ae8ediumSpace;\u600bhi\u0100cn\u0ae6\u0ad8\xeb\u0ad9eryThi\xee\u0ad9ted\u0100GL\u0af8\u0b06reaterGreate\xf2\u0673essLes\xf3\u0a48Line;\u400ar;\uc000\ud835\udd11\u0200Bnpt\u0b22\u0b28\u0b37\u0b3areak;\u6060BreakingSpace;\u40a0f;\u6115\u0680;CDEGHLNPRSTV\u0b55\u0b56\u0b6a\u0b7c\u0ba1\u0beb\u0c04\u0c5e\u0c84\u0ca6\u0cd8\u0d61\u0d85\u6aec\u0100ou\u0b5b\u0b64ngruent;\u6262pCap;\u626doubleVerticalBar;\u6226\u0180lqx\u0b83\u0b8a\u0b9bement;\u6209ual\u0100;T\u0b92\u0b93\u6260ilde;\uc000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0bb6\u0bb7\u0bbd\u0bc9\u0bd3\u0bd8\u0be5\u626fqual;\u6271ullEqual;\uc000\u2267\u0338reater;\uc000\u226b\u0338ess;\u6279lantEqual;\uc000\u2a7e\u0338ilde;\u6275ump\u0144\u0bf2\u0bfdownHump;\uc000\u224e\u0338qual;\uc000\u224f\u0338e\u0100fs\u0c0a\u0c27tTriangle\u0180;BE\u0c1a\u0c1b\u0c21\u62eaar;\uc000\u29cf\u0338qual;\u62ecs\u0300;EGLST\u0c35\u0c36\u0c3c\u0c44\u0c4b\u0c58\u626equal;\u6270reater;\u6278ess;\uc000\u226a\u0338lantEqual;\uc000\u2a7d\u0338ilde;\u6274ested\u0100GL\u0c68\u0c79reaterGreater;\uc000\u2aa2\u0338essLess;\uc000\u2aa1\u0338recedes\u0180;ES\u0c92\u0c93\u0c9b\u6280qual;\uc000\u2aaf\u0338lantEqual;\u62e0\u0100ei\u0cab\u0cb9verseElement;\u620cghtTriangle\u0180;BE\u0ccb\u0ccc\u0cd2\u62ebar;\uc000\u29d0\u0338qual;\u62ed\u0100qu\u0cdd\u0d0cuareSu\u0100bp\u0ce8\u0cf9set\u0100;E\u0cf0\u0cf3\uc000\u228f\u0338qual;\u62e2erset\u0100;E\u0d03\u0d06\uc000\u2290\u0338qual;\u62e3\u0180bcp\u0d13\u0d24\u0d4eset\u0100;E\u0d1b\u0d1e\uc000\u2282\u20d2qual;\u6288ceeds\u0200;EST\u0d32\u0d33\u0d3b\u0d46\u6281qual;\uc000\u2ab0\u0338lantEqual;\u62e1ilde;\uc000\u227f\u0338erset\u0100;E\u0d58\u0d5b\uc000\u2283\u20d2qual;\u6289ilde\u0200;EFT\u0d6e\u0d6f\u0d75\u0d7f\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uc000\ud835\udca9ilde\u803b\xd1\u40d1;\u439d\u0700Eacdfgmoprstuv\u0dbd\u0dc2\u0dc9\u0dd5\u0ddb\u0de0\u0de7\u0dfc\u0e02\u0e20\u0e22\u0e32\u0e3f\u0e44lig;\u4152cute\u803b\xd3\u40d3\u0100iy\u0dce\u0dd3rc\u803b\xd4\u40d4;\u441eblac;\u4150r;\uc000\ud835\udd12rave\u803b\xd2\u40d2\u0180aei\u0dee\u0df2\u0df6cr;\u414cga;\u43a9cron;\u439fpf;\uc000\ud835\udd46enCurly\u0100DQ\u0e0e\u0e1aoubleQuote;\u601cuote;\u6018;\u6a54\u0100cl\u0e27\u0e2cr;\uc000\ud835\udcaaash\u803b\xd8\u40d8i\u016c\u0e37\u0e3cde\u803b\xd5\u40d5es;\u6a37ml\u803b\xd6\u40d6er\u0100BP\u0e4b\u0e60\u0100ar\u0e50\u0e53r;\u603eac\u0100ek\u0e5a\u0e5c;\u63deet;\u63b4arenthesis;\u63dc\u0480acfhilors\u0e7f\u0e87\u0e8a\u0e8f\u0e92\u0e94\u0e9d\u0eb0\u0efcrtialD;\u6202y;\u441fr;\uc000\ud835\udd13i;\u43a6;\u43a0usMinus;\u40b1\u0100ip\u0ea2\u0eadncareplan\xe5\u069df;\u6119\u0200;eio\u0eb9\u0eba\u0ee0\u0ee4\u6abbcedes\u0200;EST\u0ec8\u0ec9\u0ecf\u0eda\u627aqual;\u6aaflantEqual;\u627cilde;\u627eme;\u6033\u0100dp\u0ee9\u0eeeuct;\u620fortion\u0100;a\u0225\u0ef9l;\u621d\u0100ci\u0f01\u0f06r;\uc000\ud835\udcab;\u43a8\u0200Ufos\u0f11\u0f16\u0f1b\u0f1fOT\u803b\"\u4022r;\uc000\ud835\udd14pf;\u611acr;\uc000\ud835\udcac\u0600BEacefhiorsu\u0f3e\u0f43\u0f47\u0f60\u0f73\u0fa7\u0faa\u0fad\u1096\u10a9\u10b4\u10bearr;\u6910G\u803b\xae\u40ae\u0180cnr\u0f4e\u0f53\u0f56ute;\u4154g;\u67ebr\u0100;t\u0f5c\u0f5d\u61a0l;\u6916\u0180aey\u0f67\u0f6c\u0f71ron;\u4158dil;\u4156;\u4420\u0100;v\u0f78\u0f79\u611cerse\u0100EU\u0f82\u0f99\u0100lq\u0f87\u0f8eement;\u620builibrium;\u61cbpEquilibrium;\u696fr\xbb\u0f79o;\u43a1ght\u0400ACDFTUVa\u0fc1\u0feb\u0ff3\u1022\u1028\u105b\u1087\u03d8\u0100nr\u0fc6\u0fd2gleBracket;\u67e9row\u0180;BL\u0fdc\u0fdd\u0fe1\u6192ar;\u61e5eftArrow;\u61c4eiling;\u6309o\u01f5\u0ff9\0\u1005bleBracket;\u67e7n\u01d4\u100a\0\u1014eeVector;\u695dector\u0100;B\u101d\u101e\u61c2ar;\u6955loor;\u630b\u0100er\u102d\u1043e\u0180;AV\u1035\u1036\u103c\u62a2rrow;\u61a6ector;\u695biangle\u0180;BE\u1050\u1051\u1055\u62b3ar;\u69d0qual;\u62b5p\u0180DTV\u1063\u106e\u1078ownVector;\u694feeVector;\u695cector\u0100;B\u1082\u1083\u61bear;\u6954ector\u0100;B\u1091\u1092\u61c0ar;\u6953\u0100pu\u109b\u109ef;\u611dndImplies;\u6970ightarrow;\u61db\u0100ch\u10b9\u10bcr;\u611b;\u61b1leDelayed;\u69f4\u0680HOacfhimoqstu\u10e4\u10f1\u10f7\u10fd\u1119\u111e\u1151\u1156\u1161\u1167\u11b5\u11bb\u11bf\u0100Cc\u10e9\u10eeHcy;\u4429y;\u4428FTcy;\u442ccute;\u415a\u0280;aeiy\u1108\u1109\u110e\u1113\u1117\u6abcron;\u4160dil;\u415erc;\u415c;\u4421r;\uc000\ud835\udd16ort\u0200DLRU\u112a\u1134\u113e\u1149ownArrow\xbb\u041eeftArrow\xbb\u089aightArrow\xbb\u0fddpArrow;\u6191gma;\u43a3allCircle;\u6218pf;\uc000\ud835\udd4a\u0272\u116d\0\0\u1170t;\u621aare\u0200;ISU\u117b\u117c\u1189\u11af\u65a1ntersection;\u6293u\u0100bp\u118f\u119eset\u0100;E\u1197\u1198\u628fqual;\u6291erset\u0100;E\u11a8\u11a9\u6290qual;\u6292nion;\u6294cr;\uc000\ud835\udcaear;\u62c6\u0200bcmp\u11c8\u11db\u1209\u120b\u0100;s\u11cd\u11ce\u62d0et\u0100;E\u11cd\u11d5qual;\u6286\u0100ch\u11e0\u1205eeds\u0200;EST\u11ed\u11ee\u11f4\u11ff\u627bqual;\u6ab0lantEqual;\u627dilde;\u627fTh\xe1\u0f8c;\u6211\u0180;es\u1212\u1213\u1223\u62d1rset\u0100;E\u121c\u121d\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123e\u1244\u1249\u1255\u125e\u1271\u1276\u129f\u12c2\u12c8\u12d1ORN\u803b\xde\u40deADE;\u6122\u0100Hc\u124e\u1252cy;\u440by;\u4426\u0100bu\u125a\u125c;\u4009;\u43a4\u0180aey\u1265\u126a\u126fron;\u4164dil;\u4162;\u4422r;\uc000\ud835\udd17\u0100ei\u127b\u1289\u01f2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128e\u1298kSpace;\uc000\u205f\u200aSpace;\u6009lde\u0200;EFT\u12ab\u12ac\u12b2\u12bc\u623cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uc000\ud835\udd4bipleDot;\u60db\u0100ct\u12d6\u12dbr;\uc000\ud835\udcafrok;\u4166\u0ae1\u12f7\u130e\u131a\u1326\0\u132c\u1331\0\0\0\0\0\u1338\u133d\u1377\u1385\0\u13ff\u1404\u140a\u1410\u0100cr\u12fb\u1301ute\u803b\xda\u40dar\u0100;o\u1307\u1308\u619fcir;\u6949r\u01e3\u1313\0\u1316y;\u440eve;\u416c\u0100iy\u131e\u1323rc\u803b\xdb\u40db;\u4423blac;\u4170r;\uc000\ud835\udd18rave\u803b\xd9\u40d9acr;\u416a\u0100di\u1341\u1369er\u0100BP\u1348\u135d\u0100ar\u134d\u1350r;\u405fac\u0100ek\u1357\u1359;\u63dfet;\u63b5arenthesis;\u63ddon\u0100;P\u1370\u1371\u62c3lus;\u628e\u0100gp\u137b\u137fon;\u4172f;\uc000\ud835\udd4c\u0400ADETadps\u1395\u13ae\u13b8\u13c4\u03e8\u13d2\u13d7\u13f3rrow\u0180;BD\u1150\u13a0\u13a4ar;\u6912ownArrow;\u61c5ownArrow;\u6195quilibrium;\u696eee\u0100;A\u13cb\u13cc\u62a5rrow;\u61a5own\xe1\u03f3er\u0100LR\u13de\u13e8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13f9\u13fa\u43d2on;\u43a5ing;\u416ecr;\uc000\ud835\udcb0ilde;\u4168ml\u803b\xdc\u40dc\u0480Dbcdefosv\u1427\u142c\u1430\u1433\u143e\u1485\u148a\u1490\u1496ash;\u62abar;\u6aeby;\u4412ash\u0100;l\u143b\u143c\u62a9;\u6ae6\u0100er\u1443\u1445;\u62c1\u0180bty\u144c\u1450\u147aar;\u6016\u0100;i\u144f\u1455cal\u0200BLST\u1461\u1465\u146a\u1474ar;\u6223ine;\u407ceparator;\u6758ilde;\u6240ThinSpace;\u600ar;\uc000\ud835\udd19pf;\uc000\ud835\udd4dcr;\uc000\ud835\udcb1dash;\u62aa\u0280cefos\u14a7\u14ac\u14b1\u14b6\u14bcirc;\u4174dge;\u62c0r;\uc000\ud835\udd1apf;\uc000\ud835\udd4ecr;\uc000\ud835\udcb2\u0200fios\u14cb\u14d0\u14d2\u14d8r;\uc000\ud835\udd1b;\u439epf;\uc000\ud835\udd4fcr;\uc000\ud835\udcb3\u0480AIUacfosu\u14f1\u14f5\u14f9\u14fd\u1504\u150f\u1514\u151a\u1520cy;\u442fcy;\u4407cy;\u442ecute\u803b\xdd\u40dd\u0100iy\u1509\u150drc;\u4176;\u442br;\uc000\ud835\udd1cpf;\uc000\ud835\udd50cr;\uc000\ud835\udcb4ml;\u4178\u0400Hacdefos\u1535\u1539\u153f\u154b\u154f\u155d\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417d;\u4417ot;\u417b\u01f2\u1554\0\u155boWidt\xe8\u0ad9a;\u4396r;\u6128pf;\u6124cr;\uc000\ud835\udcb5\u0be1\u1583\u158a\u1590\0\u15b0\u15b6\u15bf\0\0\0\0\u15c6\u15db\u15eb\u165f\u166d\0\u1695\u169b\u16b2\u16b9\0\u16becute\u803b\xe1\u40e1reve;\u4103\u0300;Ediuy\u159c\u159d\u15a1\u15a3\u15a8\u15ad\u623e;\uc000\u223e\u0333;\u623frc\u803b\xe2\u40e2te\u80bb\xb4\u0306;\u4430lig\u803b\xe6\u40e6\u0100;r\xb2\u15ba;\uc000\ud835\udd1erave\u803b\xe0\u40e0\u0100ep\u15ca\u15d6\u0100fp\u15cf\u15d4sym;\u6135\xe8\u15d3ha;\u43b1\u0100ap\u15dfc\u0100cl\u15e4\u15e7r;\u4101g;\u6a3f\u0264\u15f0\0\0\u160a\u0280;adsv\u15fa\u15fb\u15ff\u1601\u1607\u6227nd;\u6a55;\u6a5clope;\u6a58;\u6a5a\u0380;elmrsz\u1618\u1619\u161b\u161e\u163f\u164f\u1659\u6220;\u69a4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163a\u163c\u163e;\u69a8;\u69a9;\u69aa;\u69ab;\u69ac;\u69ad;\u69ae;\u69aft\u0100;v\u1645\u1646\u621fb\u0100;d\u164c\u164d\u62be;\u699d\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637c\u0100gp\u1663\u1667on;\u4105f;\uc000\ud835\udd52\u0380;Eaeiop\u12c1\u167b\u167d\u1682\u1684\u1687\u168a;\u6a70cir;\u6a6f;\u624ad;\u624bs;\u4027rox\u0100;e\u12c1\u1692\xf1\u1683ing\u803b\xe5\u40e5\u0180cty\u16a1\u16a6\u16a8r;\uc000\ud835\udcb6;\u402amp\u0100;e\u12c1\u16af\xf1\u0288ilde\u803b\xe3\u40e3ml\u803b\xe4\u40e4\u0100ci\u16c2\u16c8onin\xf4\u0272nt;\u6a11\u0800Nabcdefiklnoprsu\u16ed\u16f1\u1730\u173c\u1743\u1748\u1778\u177d\u17e0\u17e6\u1839\u1850\u170d\u193d\u1948\u1970ot;\u6aed\u0100cr\u16f6\u171ek\u0200ceps\u1700\u1705\u170d\u1713ong;\u624cpsilon;\u43f6rime;\u6035im\u0100;e\u171a\u171b\u623dq;\u62cd\u0176\u1722\u1726ee;\u62bded\u0100;g\u172c\u172d\u6305e\xbb\u172drk\u0100;t\u135c\u1737brk;\u63b6\u0100oy\u1701\u1741;\u4431quo;\u601e\u0280cmprt\u1753\u175b\u1761\u1764\u1768aus\u0100;e\u010a\u0109ptyv;\u69b0s\xe9\u170cno\xf5\u0113\u0180ahw\u176f\u1771\u1773;\u43b2;\u6136een;\u626cr;\uc000\ud835\udd1fg\u0380costuvw\u178d\u179d\u17b3\u17c1\u17d5\u17db\u17de\u0180aiu\u1794\u1796\u179a\xf0\u0760rc;\u65efp\xbb\u1371\u0180dpt\u17a4\u17a8\u17adot;\u6a00lus;\u6a01imes;\u6a02\u0271\u17b9\0\0\u17becup;\u6a06ar;\u6605riangle\u0100du\u17cd\u17d2own;\u65bdp;\u65b3plus;\u6a04e\xe5\u1444\xe5\u14adarow;\u690d\u0180ako\u17ed\u1826\u1835\u0100cn\u17f2\u1823k\u0180lst\u17fa\u05ab\u1802ozenge;\u69ebriangle\u0200;dlr\u1812\u1813\u1818\u181d\u65b4own;\u65beeft;\u65c2ight;\u65b8k;\u6423\u01b1\u182b\0\u1833\u01b2\u182f\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183e\u184d\u0100;q\u1843\u1846\uc000=\u20e5uiv;\uc000\u2261\u20e5t;\u6310\u0200ptwx\u1859\u185e\u1867\u186cf;\uc000\ud835\udd53\u0100;t\u13cb\u1863om\xbb\u13cctie;\u62c8\u0600DHUVbdhmptuv\u1885\u1896\u18aa\u18bb\u18d7\u18db\u18ec\u18ff\u1905\u190a\u1910\u1921\u0200LRlr\u188e\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18a1\u18a2\u18a4\u18a6\u18a8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18b3\u18b5\u18b7\u18b9;\u655d;\u655a;\u655c;\u6559\u0380;HLRhlr\u18ca\u18cb\u18cd\u18cf\u18d1\u18d3\u18d5\u6551;\u656c;\u6563;\u6560;\u656b;\u6562;\u655fox;\u69c9\u0200LRlr\u18e4\u18e6\u18e8\u18ea;\u6555;\u6552;\u6510;\u650c\u0280;DUdu\u06bd\u18f7\u18f9\u18fb\u18fd;\u6565;\u6568;\u652c;\u6534inus;\u629flus;\u629eimes;\u62a0\u0200LRlr\u1919\u191b\u191d\u191f;\u655b;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193b\u6502;\u656a;\u6561;\u655e;\u653c;\u6524;\u651c\u0100ev\u0123\u1942bar\u803b\xa6\u40a6\u0200ceio\u1951\u1956\u195a\u1960r;\uc000\ud835\udcb7mi;\u604fm\u0100;e\u171a\u171cl\u0180;bh\u1968\u1969\u196b\u405c;\u69c5sub;\u67c8\u016c\u1974\u197el\u0100;e\u1979\u197a\u6022t\xbb\u197ap\u0180;Ee\u012f\u1985\u1987;\u6aae\u0100;q\u06dc\u06db\u0ce1\u19a7\0\u19e8\u1a11\u1a15\u1a32\0\u1a37\u1a50\0\0\u1ab4\0\0\u1ac1\0\0\u1b21\u1b2e\u1b4d\u1b52\0\u1bfd\0\u1c0c\u0180cpr\u19ad\u19b2\u19ddute;\u4107\u0300;abcds\u19bf\u19c0\u19c4\u19ca\u19d5\u19d9\u6229nd;\u6a44rcup;\u6a49\u0100au\u19cf\u19d2p;\u6a4bp;\u6a47ot;\u6a40;\uc000\u2229\ufe00\u0100eo\u19e2\u19e5t;\u6041\xee\u0693\u0200aeiu\u19f0\u19fb\u1a01\u1a05\u01f0\u19f5\0\u19f8s;\u6a4don;\u410ddil\u803b\xe7\u40e7rc;\u4109ps\u0100;s\u1a0c\u1a0d\u6a4cm;\u6a50ot;\u410b\u0180dmn\u1a1b\u1a20\u1a26il\u80bb\xb8\u01adptyv;\u69b2t\u8100\xa2;e\u1a2d\u1a2e\u40a2r\xe4\u01b2r;\uc000\ud835\udd20\u0180cei\u1a3d\u1a40\u1a4dy;\u4447ck\u0100;m\u1a47\u1a48\u6713ark\xbb\u1a48;\u43c7r\u0380;Ecefms\u1a5f\u1a60\u1a62\u1a6b\u1aa4\u1aaa\u1aae\u65cb;\u69c3\u0180;el\u1a69\u1a6a\u1a6d\u42c6q;\u6257e\u0261\u1a74\0\0\u1a88rrow\u0100lr\u1a7c\u1a81eft;\u61baight;\u61bb\u0280RSacd\u1a92\u1a94\u1a96\u1a9a\u1a9f\xbb\u0f47;\u64c8st;\u629birc;\u629aash;\u629dnint;\u6a10id;\u6aefcir;\u69c2ubs\u0100;u\u1abb\u1abc\u6663it\xbb\u1abc\u02ec\u1ac7\u1ad4\u1afa\0\u1b0aon\u0100;e\u1acd\u1ace\u403a\u0100;q\xc7\xc6\u026d\u1ad9\0\0\u1ae2a\u0100;t\u1ade\u1adf\u402c;\u4040\u0180;fl\u1ae8\u1ae9\u1aeb\u6201\xee\u1160e\u0100mx\u1af1\u1af6ent\xbb\u1ae9e\xf3\u024d\u01e7\u1afe\0\u1b07\u0100;d\u12bb\u1b02ot;\u6a6dn\xf4\u0246\u0180fry\u1b10\u1b14\u1b17;\uc000\ud835\udd54o\xe4\u0254\u8100\xa9;s\u0155\u1b1dr;\u6117\u0100ao\u1b25\u1b29rr;\u61b5ss;\u6717\u0100cu\u1b32\u1b37r;\uc000\ud835\udcb8\u0100bp\u1b3c\u1b44\u0100;e\u1b41\u1b42\u6acf;\u6ad1\u0100;e\u1b49\u1b4a\u6ad0;\u6ad2dot;\u62ef\u0380delprvw\u1b60\u1b6c\u1b77\u1b82\u1bac\u1bd4\u1bf9arr\u0100lr\u1b68\u1b6a;\u6938;\u6935\u0270\u1b72\0\0\u1b75r;\u62dec;\u62dfarr\u0100;p\u1b7f\u1b80\u61b6;\u693d\u0300;bcdos\u1b8f\u1b90\u1b96\u1ba1\u1ba5\u1ba8\u622arcap;\u6a48\u0100au\u1b9b\u1b9ep;\u6a46p;\u6a4aot;\u628dr;\u6a45;\uc000\u222a\ufe00\u0200alrv\u1bb5\u1bbf\u1bde\u1be3rr\u0100;m\u1bbc\u1bbd\u61b7;\u693cy\u0180evw\u1bc7\u1bd4\u1bd8q\u0270\u1bce\0\0\u1bd2re\xe3\u1b73u\xe3\u1b75ee;\u62ceedge;\u62cfen\u803b\xa4\u40a4earrow\u0100lr\u1bee\u1bf3eft\xbb\u1b80ight\xbb\u1bbde\xe4\u1bdd\u0100ci\u1c01\u1c07onin\xf4\u01f7nt;\u6231lcty;\u632d\u0980AHabcdefhijlorstuwz\u1c38\u1c3b\u1c3f\u1c5d\u1c69\u1c75\u1c8a\u1c9e\u1cac\u1cb7\u1cfb\u1cff\u1d0d\u1d7b\u1d91\u1dab\u1dbb\u1dc6\u1dcdr\xf2\u0381ar;\u6965\u0200glrs\u1c48\u1c4d\u1c52\u1c54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1c5a\u1c5b\u6010\xbb\u090a\u016b\u1c61\u1c67arow;\u690fa\xe3\u0315\u0100ay\u1c6e\u1c73ron;\u410f;\u4434\u0180;ao\u0332\u1c7c\u1c84\u0100gr\u02bf\u1c81r;\u61catseq;\u6a77\u0180glm\u1c91\u1c94\u1c98\u803b\xb0\u40b0ta;\u43b4ptyv;\u69b1\u0100ir\u1ca3\u1ca8sht;\u697f;\uc000\ud835\udd21ar\u0100lr\u1cb3\u1cb5\xbb\u08dc\xbb\u101e\u0280aegsv\u1cc2\u0378\u1cd6\u1cdc\u1ce0m\u0180;os\u0326\u1cca\u1cd4nd\u0100;s\u0326\u1cd1uit;\u6666amma;\u43ddin;\u62f2\u0180;io\u1ce7\u1ce8\u1cf8\u40f7de\u8100\xf7;o\u1ce7\u1cf0ntimes;\u62c7n\xf8\u1cf7cy;\u4452c\u026f\u1d06\0\0\u1d0arn;\u631eop;\u630d\u0280lptuw\u1d18\u1d1d\u1d22\u1d49\u1d55lar;\u4024f;\uc000\ud835\udd55\u0280;emps\u030b\u1d2d\u1d37\u1d3d\u1d42q\u0100;d\u0352\u1d33ot;\u6251inus;\u6238lus;\u6214quare;\u62a1blebarwedg\xe5\xfan\u0180adh\u112e\u1d5d\u1d67ownarrow\xf3\u1c83arpoon\u0100lr\u1d72\u1d76ef\xf4\u1cb4igh\xf4\u1cb6\u0162\u1d7f\u1d85karo\xf7\u0f42\u026f\u1d8a\0\0\u1d8ern;\u631fop;\u630c\u0180cot\u1d98\u1da3\u1da6\u0100ry\u1d9d\u1da1;\uc000\ud835\udcb9;\u4455l;\u69f6rok;\u4111\u0100dr\u1db0\u1db4ot;\u62f1i\u0100;f\u1dba\u1816\u65bf\u0100ah\u1dc0\u1dc3r\xf2\u0429a\xf2\u0fa6angle;\u69a6\u0100ci\u1dd2\u1dd5y;\u445fgrarr;\u67ff\u0900Dacdefglmnopqrstux\u1e01\u1e09\u1e19\u1e38\u0578\u1e3c\u1e49\u1e61\u1e7e\u1ea5\u1eaf\u1ebd\u1ee1\u1f2a\u1f37\u1f44\u1f4e\u1f5a\u0100Do\u1e06\u1d34o\xf4\u1c89\u0100cs\u1e0e\u1e14ute\u803b\xe9\u40e9ter;\u6a6e\u0200aioy\u1e22\u1e27\u1e31\u1e36ron;\u411br\u0100;c\u1e2d\u1e2e\u6256\u803b\xea\u40ealon;\u6255;\u444dot;\u4117\u0100Dr\u1e41\u1e45ot;\u6252;\uc000\ud835\udd22\u0180;rs\u1e50\u1e51\u1e57\u6a9aave\u803b\xe8\u40e8\u0100;d\u1e5c\u1e5d\u6a96ot;\u6a98\u0200;ils\u1e6a\u1e6b\u1e72\u1e74\u6a99nters;\u63e7;\u6113\u0100;d\u1e79\u1e7a\u6a95ot;\u6a97\u0180aps\u1e85\u1e89\u1e97cr;\u4113ty\u0180;sv\u1e92\u1e93\u1e95\u6205et\xbb\u1e93p\u01001;\u1e9d\u1ea4\u0133\u1ea1\u1ea3;\u6004;\u6005\u6003\u0100gs\u1eaa\u1eac;\u414bp;\u6002\u0100gp\u1eb4\u1eb8on;\u4119f;\uc000\ud835\udd56\u0180als\u1ec4\u1ece\u1ed2r\u0100;s\u1eca\u1ecb\u62d5l;\u69e3us;\u6a71i\u0180;lv\u1eda\u1edb\u1edf\u43b5on\xbb\u1edb;\u43f5\u0200csuv\u1eea\u1ef3\u1f0b\u1f23\u0100io\u1eef\u1e31rc\xbb\u1e2e\u0269\u1ef9\0\0\u1efb\xed\u0548ant\u0100gl\u1f02\u1f06tr\xbb\u1e5dess\xbb\u1e7a\u0180aei\u1f12\u1f16\u1f1als;\u403dst;\u625fv\u0100;D\u0235\u1f20D;\u6a78parsl;\u69e5\u0100Da\u1f2f\u1f33ot;\u6253rr;\u6971\u0180cdi\u1f3e\u1f41\u1ef8r;\u612fo\xf4\u0352\u0100ah\u1f49\u1f4b;\u43b7\u803b\xf0\u40f0\u0100mr\u1f53\u1f57l\u803b\xeb\u40ebo;\u60ac\u0180cip\u1f61\u1f64\u1f67l;\u4021s\xf4\u056e\u0100eo\u1f6c\u1f74ctatio\xee\u0559nential\xe5\u0579\u09e1\u1f92\0\u1f9e\0\u1fa1\u1fa7\0\0\u1fc6\u1fcc\0\u1fd3\0\u1fe6\u1fea\u2000\0\u2008\u205allingdotse\xf1\u1e44y;\u4444male;\u6640\u0180ilr\u1fad\u1fb3\u1fc1lig;\u8000\ufb03\u0269\u1fb9\0\0\u1fbdg;\u8000\ufb00ig;\u8000\ufb04;\uc000\ud835\udd23lig;\u8000\ufb01lig;\uc000fj\u0180alt\u1fd9\u1fdc\u1fe1t;\u666dig;\u8000\ufb02ns;\u65b1of;\u4192\u01f0\u1fee\0\u1ff3f;\uc000\ud835\udd57\u0100ak\u05bf\u1ff7\u0100;v\u1ffc\u1ffd\u62d4;\u6ad9artint;\u6a0d\u0100ao\u200c\u2055\u0100cs\u2011\u2052\u03b1\u201a\u2030\u2038\u2045\u2048\0\u2050\u03b2\u2022\u2025\u2027\u202a\u202c\0\u202e\u803b\xbd\u40bd;\u6153\u803b\xbc\u40bc;\u6155;\u6159;\u615b\u01b3\u2034\0\u2036;\u6154;\u6156\u02b4\u203e\u2041\0\0\u2043\u803b\xbe\u40be;\u6157;\u615c5;\u6158\u01b6\u204c\0\u204e;\u615a;\u615d8;\u615el;\u6044wn;\u6322cr;\uc000\ud835\udcbb\u0880Eabcdefgijlnorstv\u2082\u2089\u209f\u20a5\u20b0\u20b4\u20f0\u20f5\u20fa\u20ff\u2103\u2112\u2138\u0317\u213e\u2152\u219e\u0100;l\u064d\u2087;\u6a8c\u0180cmp\u2090\u2095\u209dute;\u41f5ma\u0100;d\u209c\u1cda\u43b3;\u6a86reve;\u411f\u0100iy\u20aa\u20aerc;\u411d;\u4433ot;\u4121\u0200;lqs\u063e\u0642\u20bd\u20c9\u0180;qs\u063e\u064c\u20c4lan\xf4\u0665\u0200;cdl\u0665\u20d2\u20d5\u20e5c;\u6aa9ot\u0100;o\u20dc\u20dd\u6a80\u0100;l\u20e2\u20e3\u6a82;\u6a84\u0100;e\u20ea\u20ed\uc000\u22db\ufe00s;\u6a94r;\uc000\ud835\udd24\u0100;g\u0673\u061bmel;\u6137cy;\u4453\u0200;Eaj\u065a\u210c\u210e\u2110;\u6a92;\u6aa5;\u6aa4\u0200Eaes\u211b\u211d\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6a8arox\xbb\u2124\u0100;q\u212e\u212f\u6a88\u0100;q\u212e\u211bim;\u62e7pf;\uc000\ud835\udd58\u0100ci\u2143\u2146r;\u610am\u0180;el\u066b\u214e\u2150;\u6a8e;\u6a90\u8300>;cdlqr\u05ee\u2160\u216a\u216e\u2173\u2179\u0100ci\u2165\u2167;\u6aa7r;\u6a7aot;\u62d7Par;\u6995uest;\u6a7c\u0280adels\u2184\u216a\u2190\u0656\u219b\u01f0\u2189\0\u218epro\xf8\u209er;\u6978q\u0100lq\u063f\u2196les\xf3\u2088i\xed\u066b\u0100en\u21a3\u21adrtneqq;\uc000\u2269\ufe00\xc5\u21aa\u0500Aabcefkosy\u21c4\u21c7\u21f1\u21f5\u21fa\u2218\u221d\u222f\u2268\u227dr\xf2\u03a0\u0200ilmr\u21d0\u21d4\u21d7\u21dbrs\xf0\u1484f\xbb\u2024il\xf4\u06a9\u0100dr\u21e0\u21e4cy;\u444a\u0180;cw\u08f4\u21eb\u21efir;\u6948;\u61adar;\u610firc;\u4125\u0180alr\u2201\u220e\u2213rts\u0100;u\u2209\u220a\u6665it\xbb\u220alip;\u6026con;\u62b9r;\uc000\ud835\udd25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223a\u223e\u2243\u225e\u2263rr;\u61fftht;\u623bk\u0100lr\u2249\u2253eftarrow;\u61a9ightarrow;\u61aaf;\uc000\ud835\udd59bar;\u6015\u0180clt\u226f\u2274\u2278r;\uc000\ud835\udcbdas\xe8\u21f4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1c5b\u0ae1\u22a3\0\u22aa\0\u22b8\u22c5\u22ce\0\u22d5\u22f3\0\0\u22f8\u2322\u2367\u2362\u237f\0\u2386\u23aa\u23b4cute\u803b\xed\u40ed\u0180;iy\u0771\u22b0\u22b5rc\u803b\xee\u40ee;\u4438\u0100cx\u22bc\u22bfy;\u4435cl\u803b\xa1\u40a1\u0100fr\u039f\u22c9;\uc000\ud835\udd26rave\u803b\xec\u40ec\u0200;ino\u073e\u22dd\u22e9\u22ee\u0100in\u22e2\u22e6nt;\u6a0ct;\u622dfin;\u69dcta;\u6129lig;\u4133\u0180aop\u22fe\u231a\u231d\u0180cgt\u2305\u2308\u2317r;\u412b\u0180elp\u071f\u230f\u2313in\xe5\u078ear\xf4\u0720h;\u4131f;\u62b7ed;\u41b5\u0280;cfot\u04f4\u232c\u2331\u233d\u2341are;\u6105in\u0100;t\u2338\u2339\u621eie;\u69dddo\xf4\u2319\u0280;celp\u0757\u234c\u2350\u235b\u2361al;\u62ba\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234darhk;\u6a17rod;\u6a3c\u0200cgpt\u236f\u2372\u2376\u237by;\u4451on;\u412ff;\uc000\ud835\udd5aa;\u43b9uest\u803b\xbf\u40bf\u0100ci\u238a\u238fr;\uc000\ud835\udcben\u0280;Edsv\u04f4\u239b\u239d\u23a1\u04f3;\u62f9ot;\u62f5\u0100;v\u23a6\u23a7\u62f4;\u62f3\u0100;i\u0777\u23aelde;\u4129\u01eb\u23b8\0\u23bccy;\u4456l\u803b\xef\u40ef\u0300cfmosu\u23cc\u23d7\u23dc\u23e1\u23e7\u23f5\u0100iy\u23d1\u23d5rc;\u4135;\u4439r;\uc000\ud835\udd27ath;\u4237pf;\uc000\ud835\udd5b\u01e3\u23ec\0\u23f1r;\uc000\ud835\udcbfrcy;\u4458kcy;\u4454\u0400acfghjos\u240b\u2416\u2422\u2427\u242d\u2431\u2435\u243bppa\u0100;v\u2413\u2414\u43ba;\u43f0\u0100ey\u241b\u2420dil;\u4137;\u443ar;\uc000\ud835\udd28reen;\u4138cy;\u4445cy;\u445cpf;\uc000\ud835\udd5ccr;\uc000\ud835\udcc0\u0b80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248d\u2491\u250e\u253d\u255a\u2580\u264e\u265e\u2665\u2679\u267d\u269a\u26b2\u26d8\u275d\u2768\u278b\u27c0\u2801\u2812\u0180art\u2477\u247a\u247cr\xf2\u09c6\xf2\u0395ail;\u691barr;\u690e\u0100;g\u0994\u248b;\u6a8bar;\u6962\u0963\u24a5\0\u24aa\0\u24b1\0\0\0\0\0\u24b5\u24ba\0\u24c6\u24c8\u24cd\0\u24f9ute;\u413amptyv;\u69b4ra\xee\u084cbda;\u43bbg\u0180;dl\u088e\u24c1\u24c3;\u6991\xe5\u088e;\u6a85uo\u803b\xab\u40abr\u0400;bfhlpst\u0899\u24de\u24e6\u24e9\u24eb\u24ee\u24f1\u24f5\u0100;f\u089d\u24e3s;\u691fs;\u691d\xeb\u2252p;\u61abl;\u6939im;\u6973l;\u61a2\u0180;ae\u24ff\u2500\u2504\u6aabil;\u6919\u0100;s\u2509\u250a\u6aad;\uc000\u2aad\ufe00\u0180abr\u2515\u2519\u251drr;\u690crk;\u6772\u0100ak\u2522\u252cc\u0100ek\u2528\u252a;\u407b;\u405b\u0100es\u2531\u2533;\u698bl\u0100du\u2539\u253b;\u698f;\u698d\u0200aeuy\u2546\u254b\u2556\u2558ron;\u413e\u0100di\u2550\u2554il;\u413c\xec\u08b0\xe2\u2529;\u443b\u0200cqrs\u2563\u2566\u256d\u257da;\u6936uo\u0100;r\u0e19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694bh;\u61b2\u0280;fgqs\u258b\u258c\u0989\u25f3\u25ff\u6264t\u0280ahlrt\u2598\u25a4\u25b7\u25c2\u25e8rrow\u0100;t\u0899\u25a1a\xe9\u24f6arpoon\u0100du\u25af\u25b4own\xbb\u045ap\xbb\u0966eftarrows;\u61c7ight\u0180ahs\u25cd\u25d6\u25derrow\u0100;s\u08f4\u08a7arpoon\xf3\u0f98quigarro\xf7\u21f0hreetimes;\u62cb\u0180;qs\u258b\u0993\u25falan\xf4\u09ac\u0280;cdgs\u09ac\u260a\u260d\u261d\u2628c;\u6aa8ot\u0100;o\u2614\u2615\u6a7f\u0100;r\u261a\u261b\u6a81;\u6a83\u0100;e\u2622\u2625\uc000\u22da\ufe00s;\u6a93\u0280adegs\u2633\u2639\u263d\u2649\u264bppro\xf8\u24c6ot;\u62d6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248c\xf4\u099bi\xed\u09b2\u0180ilr\u2655\u08e1\u265asht;\u697c;\uc000\ud835\udd29\u0100;E\u099c\u2663;\u6a91\u0161\u2669\u2676r\u0100du\u25b2\u266e\u0100;l\u0965\u2673;\u696alk;\u6584cy;\u4459\u0280;acht\u0a48\u2688\u268b\u2691\u2696r\xf2\u25c1orne\xf2\u1d08ard;\u696bri;\u65fa\u0100io\u269f\u26a4dot;\u4140ust\u0100;a\u26ac\u26ad\u63b0che\xbb\u26ad\u0200Eaes\u26bb\u26bd\u26c9\u26d4;\u6268p\u0100;p\u26c3\u26c4\u6a89rox\xbb\u26c4\u0100;q\u26ce\u26cf\u6a87\u0100;q\u26ce\u26bbim;\u62e6\u0400abnoptwz\u26e9\u26f4\u26f7\u271a\u272f\u2741\u2747\u2750\u0100nr\u26ee\u26f1g;\u67ecr;\u61fdr\xeb\u08c1g\u0180lmr\u26ff\u270d\u2714eft\u0100ar\u09e6\u2707ight\xe1\u09f2apsto;\u67fcight\xe1\u09fdparrow\u0100lr\u2725\u2729ef\xf4\u24edight;\u61ac\u0180afl\u2736\u2739\u273dr;\u6985;\uc000\ud835\udd5dus;\u6a2dimes;\u6a34\u0161\u274b\u274fst;\u6217\xe1\u134e\u0180;ef\u2757\u2758\u1800\u65cange\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277c\u2785\u2787r\xf2\u08a8orne\xf2\u1d8car\u0100;d\u0f98\u2783;\u696d;\u600eri;\u62bf\u0300achiqt\u2798\u279d\u0a40\u27a2\u27ae\u27bbquo;\u6039r;\uc000\ud835\udcc1m\u0180;eg\u09b2\u27aa\u27ac;\u6a8d;\u6a8f\u0100bu\u252a\u27b3o\u0100;r\u0e1f\u27b9;\u601arok;\u4142\u8400<;cdhilqr\u082b\u27d2\u2639\u27dc\u27e0\u27e5\u27ea\u27f0\u0100ci\u27d7\u27d9;\u6aa6r;\u6a79re\xe5\u25f2mes;\u62c9arr;\u6976uest;\u6a7b\u0100Pi\u27f5\u27f9ar;\u6996\u0180;ef\u2800\u092d\u181b\u65c3r\u0100du\u2807\u280dshar;\u694ahar;\u6966\u0100en\u2817\u2821rtneqq;\uc000\u2268\ufe00\xc5\u281e\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288e\u2893\u28a0\u28a5\u28a8\u28da\u28e2\u28e4\u0a83\u28f3\u2902Dot;\u623a\u0200clpr\u284e\u2852\u2863\u287dr\u803b\xaf\u40af\u0100et\u2857\u2859;\u6642\u0100;e\u285e\u285f\u6720se\xbb\u285f\u0100;s\u103b\u2868to\u0200;dlu\u103b\u2873\u2877\u287bow\xee\u048cef\xf4\u090f\xf0\u13d1ker;\u65ae\u0100oy\u2887\u288cmma;\u6a29;\u443cash;\u6014asuredangle\xbb\u1626r;\uc000\ud835\udd2ao;\u6127\u0180cdn\u28af\u28b4\u28c9ro\u803b\xb5\u40b5\u0200;acd\u1464\u28bd\u28c0\u28c4s\xf4\u16a7ir;\u6af0ot\u80bb\xb7\u01b5us\u0180;bd\u28d2\u1903\u28d3\u6212\u0100;u\u1d3c\u28d8;\u6a2a\u0163\u28de\u28e1p;\u6adb\xf2\u2212\xf0\u0a81\u0100dp\u28e9\u28eeels;\u62a7f;\uc000\ud835\udd5e\u0100ct\u28f8\u28fdr;\uc000\ud835\udcc2pos\xbb\u159d\u0180;lm\u2909\u290a\u290d\u43bctimap;\u62b8\u0c00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297e\u2989\u2998\u29da\u29e9\u2a15\u2a1a\u2a58\u2a5d\u2a83\u2a95\u2aa4\u2aa8\u2b04\u2b07\u2b44\u2b7f\u2bae\u2c34\u2c67\u2c7c\u2ce9\u0100gt\u2947\u294b;\uc000\u22d9\u0338\u0100;v\u2950\u0bcf\uc000\u226b\u20d2\u0180elt\u295a\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61cdightarrow;\u61ce;\uc000\u22d8\u0338\u0100;v\u297b\u0c47\uc000\u226a\u20d2ightarrow;\u61cf\u0100Dd\u298e\u2993ash;\u62afash;\u62ae\u0280bcnpt\u29a3\u29a7\u29ac\u29b1\u29ccla\xbb\u02deute;\u4144g;\uc000\u2220\u20d2\u0280;Eiop\u0d84\u29bc\u29c0\u29c5\u29c8;\uc000\u2a70\u0338d;\uc000\u224b\u0338s;\u4149ro\xf8\u0d84ur\u0100;a\u29d3\u29d4\u666el\u0100;s\u29d3\u0b38\u01f3\u29df\0\u29e3p\u80bb\xa0\u0b37mp\u0100;e\u0bf9\u0c00\u0280aeouy\u29f4\u29fe\u2a03\u2a10\u2a13\u01f0\u29f9\0\u29fb;\u6a43on;\u4148dil;\u4146ng\u0100;d\u0d7e\u2a0aot;\uc000\u2a6d\u0338p;\u6a42;\u443dash;\u6013\u0380;Aadqsx\u0b92\u2a29\u2a2d\u2a3b\u2a41\u2a45\u2a50rr;\u61d7r\u0100hr\u2a33\u2a36k;\u6924\u0100;o\u13f2\u13f0ot;\uc000\u2250\u0338ui\xf6\u0b63\u0100ei\u2a4a\u2a4ear;\u6928\xed\u0b98ist\u0100;s\u0ba0\u0b9fr;\uc000\ud835\udd2b\u0200Eest\u0bc5\u2a66\u2a79\u2a7c\u0180;qs\u0bbc\u2a6d\u0be1\u0180;qs\u0bbc\u0bc5\u2a74lan\xf4\u0be2i\xed\u0bea\u0100;r\u0bb6\u2a81\xbb\u0bb7\u0180Aap\u2a8a\u2a8d\u2a91r\xf2\u2971rr;\u61aear;\u6af2\u0180;sv\u0f8d\u2a9c\u0f8c\u0100;d\u2aa1\u2aa2\u62fc;\u62facy;\u445a\u0380AEadest\u2ab7\u2aba\u2abe\u2ac2\u2ac5\u2af6\u2af9r\xf2\u2966;\uc000\u2266\u0338rr;\u619ar;\u6025\u0200;fqs\u0c3b\u2ace\u2ae3\u2aeft\u0100ar\u2ad4\u2ad9rro\xf7\u2ac1ightarro\xf7\u2a90\u0180;qs\u0c3b\u2aba\u2aealan\xf4\u0c55\u0100;s\u0c55\u2af4\xbb\u0c36i\xed\u0c5d\u0100;r\u0c35\u2afei\u0100;e\u0c1a\u0c25i\xe4\u0d90\u0100pt\u2b0c\u2b11f;\uc000\ud835\udd5f\u8180\xac;in\u2b19\u2b1a\u2b36\u40acn\u0200;Edv\u0b89\u2b24\u2b28\u2b2e;\uc000\u22f9\u0338ot;\uc000\u22f5\u0338\u01e1\u0b89\u2b33\u2b35;\u62f7;\u62f6i\u0100;v\u0cb8\u2b3c\u01e1\u0cb8\u2b41\u2b43;\u62fe;\u62fd\u0180aor\u2b4b\u2b63\u2b69r\u0200;ast\u0b7b\u2b55\u2b5a\u2b5flle\xec\u0b7bl;\uc000\u2afd\u20e5;\uc000\u2202\u0338lint;\u6a14\u0180;ce\u0c92\u2b70\u2b73u\xe5\u0ca5\u0100;c\u0c98\u2b78\u0100;e\u0c92\u2b7d\xf1\u0c98\u0200Aait\u2b88\u2b8b\u2b9d\u2ba7r\xf2\u2988rr\u0180;cw\u2b94\u2b95\u2b99\u619b;\uc000\u2933\u0338;\uc000\u219d\u0338ghtarrow\xbb\u2b95ri\u0100;e\u0ccb\u0cd6\u0380chimpqu\u2bbd\u2bcd\u2bd9\u2b04\u0b78\u2be4\u2bef\u0200;cer\u0d32\u2bc6\u0d37\u2bc9u\xe5\u0d45;\uc000\ud835\udcc3ort\u026d\u2b05\0\0\u2bd6ar\xe1\u2b56m\u0100;e\u0d6e\u2bdf\u0100;q\u0d74\u0d73su\u0100bp\u2beb\u2bed\xe5\u0cf8\xe5\u0d0b\u0180bcp\u2bf6\u2c11\u2c19\u0200;Ees\u2bff\u2c00\u0d22\u2c04\u6284;\uc000\u2ac5\u0338et\u0100;e\u0d1b\u2c0bq\u0100;q\u0d23\u2c00c\u0100;e\u0d32\u2c17\xf1\u0d38\u0200;Ees\u2c22\u2c23\u0d5f\u2c27\u6285;\uc000\u2ac6\u0338et\u0100;e\u0d58\u2c2eq\u0100;q\u0d60\u2c23\u0200gilr\u2c3d\u2c3f\u2c45\u2c47\xec\u0bd7lde\u803b\xf1\u40f1\xe7\u0c43iangle\u0100lr\u2c52\u2c5ceft\u0100;e\u0c1a\u2c5a\xf1\u0c26ight\u0100;e\u0ccb\u2c65\xf1\u0cd7\u0100;m\u2c6c\u2c6d\u43bd\u0180;es\u2c74\u2c75\u2c79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2c8f\u2c94\u2c99\u2c9e\u2ca3\u2cb0\u2cb6\u2cd3\u2ce3ash;\u62adarr;\u6904p;\uc000\u224d\u20d2ash;\u62ac\u0100et\u2ca8\u2cac;\uc000\u2265\u20d2;\uc000>\u20d2nfin;\u69de\u0180Aet\u2cbd\u2cc1\u2cc5rr;\u6902;\uc000\u2264\u20d2\u0100;r\u2cca\u2ccd\uc000<\u20d2ie;\uc000\u22b4\u20d2\u0100At\u2cd8\u2cdcrr;\u6903rie;\uc000\u22b5\u20d2im;\uc000\u223c\u20d2\u0180Aan\u2cf0\u2cf4\u2d02rr;\u61d6r\u0100hr\u2cfa\u2cfdk;\u6923\u0100;o\u13e7\u13e5ear;\u6927\u1253\u1a95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2d2d\0\u2d38\u2d48\u2d60\u2d65\u2d72\u2d84\u1b07\0\0\u2d8d\u2dab\0\u2dc8\u2dce\0\u2ddc\u2e19\u2e2b\u2e3e\u2e43\u0100cs\u2d31\u1a97ute\u803b\xf3\u40f3\u0100iy\u2d3c\u2d45r\u0100;c\u1a9e\u2d42\u803b\xf4\u40f4;\u443e\u0280abios\u1aa0\u2d52\u2d57\u01c8\u2d5alac;\u4151v;\u6a38old;\u69bclig;\u4153\u0100cr\u2d69\u2d6dir;\u69bf;\uc000\ud835\udd2c\u036f\u2d79\0\0\u2d7c\0\u2d82n;\u42dbave\u803b\xf2\u40f2;\u69c1\u0100bm\u2d88\u0df4ar;\u69b5\u0200acit\u2d95\u2d98\u2da5\u2da8r\xf2\u1a80\u0100ir\u2d9d\u2da0r;\u69beoss;\u69bbn\xe5\u0e52;\u69c0\u0180aei\u2db1\u2db5\u2db9cr;\u414dga;\u43c9\u0180cdn\u2dc0\u2dc5\u01cdron;\u43bf;\u69b6pf;\uc000\ud835\udd60\u0180ael\u2dd4\u2dd7\u01d2r;\u69b7rp;\u69b9\u0380;adiosv\u2dea\u2deb\u2dee\u2e08\u2e0d\u2e10\u2e16\u6228r\xf2\u1a86\u0200;efm\u2df7\u2df8\u2e02\u2e05\u6a5dr\u0100;o\u2dfe\u2dff\u6134f\xbb\u2dff\u803b\xaa\u40aa\u803b\xba\u40bagof;\u62b6r;\u6a56lope;\u6a57;\u6a5b\u0180clo\u2e1f\u2e21\u2e27\xf2\u2e01ash\u803b\xf8\u40f8l;\u6298i\u016c\u2e2f\u2e34de\u803b\xf5\u40f5es\u0100;a\u01db\u2e3as;\u6a36ml\u803b\xf6\u40f6bar;\u633d\u0ae1\u2e5e\0\u2e7d\0\u2e80\u2e9d\0\u2ea2\u2eb9\0\0\u2ecb\u0e9c\0\u2f13\0\0\u2f2b\u2fbc\0\u2fc8r\u0200;ast\u0403\u2e67\u2e72\u0e85\u8100\xb6;l\u2e6d\u2e6e\u40b6le\xec\u0403\u0269\u2e78\0\0\u2e7bm;\u6af3;\u6afdy;\u443fr\u0280cimpt\u2e8b\u2e8f\u2e93\u1865\u2e97nt;\u4025od;\u402eil;\u6030enk;\u6031r;\uc000\ud835\udd2d\u0180imo\u2ea8\u2eb0\u2eb4\u0100;v\u2ead\u2eae\u43c6;\u43d5ma\xf4\u0a76ne;\u660e\u0180;tv\u2ebf\u2ec0\u2ec8\u43c0chfork\xbb\u1ffd;\u43d6\u0100au\u2ecf\u2edfn\u0100ck\u2ed5\u2eddk\u0100;h\u21f4\u2edb;\u610e\xf6\u21f4s\u0480;abcdemst\u2ef3\u2ef4\u1908\u2ef9\u2efd\u2f04\u2f06\u2f0a\u2f0e\u402bcir;\u6a23ir;\u6a22\u0100ou\u1d40\u2f02;\u6a25;\u6a72n\u80bb\xb1\u0e9dim;\u6a26wo;\u6a27\u0180ipu\u2f19\u2f20\u2f25ntint;\u6a15f;\uc000\ud835\udd61nd\u803b\xa3\u40a3\u0500;Eaceinosu\u0ec8\u2f3f\u2f41\u2f44\u2f47\u2f81\u2f89\u2f92\u2f7e\u2fb6;\u6ab3p;\u6ab7u\xe5\u0ed9\u0100;c\u0ece\u2f4c\u0300;acens\u0ec8\u2f59\u2f5f\u2f66\u2f68\u2f7eppro\xf8\u2f43urlye\xf1\u0ed9\xf1\u0ece\u0180aes\u2f6f\u2f76\u2f7approx;\u6ab9qq;\u6ab5im;\u62e8i\xed\u0edfme\u0100;s\u2f88\u0eae\u6032\u0180Eas\u2f78\u2f90\u2f7a\xf0\u2f75\u0180dfp\u0eec\u2f99\u2faf\u0180als\u2fa0\u2fa5\u2faalar;\u632eine;\u6312urf;\u6313\u0100;t\u0efb\u2fb4\xef\u0efbrel;\u62b0\u0100ci\u2fc0\u2fc5r;\uc000\ud835\udcc5;\u43c8ncsp;\u6008\u0300fiopsu\u2fda\u22e2\u2fdf\u2fe5\u2feb\u2ff1r;\uc000\ud835\udd2epf;\uc000\ud835\udd62rime;\u6057cr;\uc000\ud835\udcc6\u0180aeo\u2ff8\u3009\u3013t\u0100ei\u2ffe\u3005rnion\xf3\u06b0nt;\u6a16st\u0100;e\u3010\u3011\u403f\xf1\u1f19\xf4\u0f14\u0a80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30e0\u310e\u312b\u3147\u3162\u3172\u318e\u3206\u3215\u3224\u3229\u3258\u326e\u3272\u3290\u32b0\u32b7\u0180art\u3047\u304a\u304cr\xf2\u10b3\xf2\u03ddail;\u691car\xf2\u1c65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307f\u308f\u3094\u30cc\u0100eu\u306d\u3071;\uc000\u223d\u0331te;\u4155i\xe3\u116emptyv;\u69b3g\u0200;del\u0fd1\u3089\u308b\u308d;\u6992;\u69a5\xe5\u0fd1uo\u803b\xbb\u40bbr\u0580;abcfhlpstw\u0fdc\u30ac\u30af\u30b7\u30b9\u30bc\u30be\u30c0\u30c3\u30c7\u30cap;\u6975\u0100;f\u0fe0\u30b4s;\u6920;\u6933s;\u691e\xeb\u225d\xf0\u272el;\u6945im;\u6974l;\u61a3;\u619d\u0100ai\u30d1\u30d5il;\u691ao\u0100;n\u30db\u30dc\u6236al\xf3\u0f1e\u0180abr\u30e7\u30ea\u30eer\xf2\u17e5rk;\u6773\u0100ak\u30f3\u30fdc\u0100ek\u30f9\u30fb;\u407d;\u405d\u0100es\u3102\u3104;\u698cl\u0100du\u310a\u310c;\u698e;\u6990\u0200aeuy\u3117\u311c\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0ff2\xe2\u30fa;\u4440\u0200clqs\u3134\u3137\u313d\u3144a;\u6937dhar;\u6969uo\u0100;r\u020e\u020dh;\u61b3\u0180acg\u314e\u315f\u0f44l\u0200;ips\u0f78\u3158\u315b\u109cn\xe5\u10bbar\xf4\u0fa9t;\u65ad\u0180ilr\u3169\u1023\u316esht;\u697d;\uc000\ud835\udd2f\u0100ao\u3177\u3186r\u0100du\u317d\u317f\xbb\u047b\u0100;l\u1091\u3184;\u696c\u0100;v\u318b\u318c\u43c1;\u43f1\u0180gns\u3195\u31f9\u31fcht\u0300ahlrst\u31a4\u31b0\u31c2\u31d8\u31e4\u31eerrow\u0100;t\u0fdc\u31ada\xe9\u30c8arpoon\u0100du\u31bb\u31bfow\xee\u317ep\xbb\u1092eft\u0100ah\u31ca\u31d0rrow\xf3\u0feaarpoon\xf3\u0551ightarrows;\u61c9quigarro\xf7\u30cbhreetimes;\u62ccg;\u42daingdotse\xf1\u1f32\u0180ahm\u320d\u3210\u3213r\xf2\u0feaa\xf2\u0551;\u600foust\u0100;a\u321e\u321f\u63b1che\xbb\u321fmid;\u6aee\u0200abpt\u3232\u323d\u3240\u3252\u0100nr\u3237\u323ag;\u67edr;\u61fer\xeb\u1003\u0180afl\u3247\u324a\u324er;\u6986;\uc000\ud835\udd63us;\u6a2eimes;\u6a35\u0100ap\u325d\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6a12ar\xf2\u31e3\u0200achq\u327b\u3280\u10bc\u3285quo;\u603ar;\uc000\ud835\udcc7\u0100bu\u30fb\u328ao\u0100;r\u0214\u0213\u0180hir\u3297\u329b\u32a0re\xe5\u31f8mes;\u62cai\u0200;efl\u32aa\u1059\u1821\u32ab\u65b9tri;\u69celuhar;\u6968;\u611e\u0d61\u32d5\u32db\u32df\u332c\u3338\u3371\0\u337a\u33a4\0\0\u33ec\u33f0\0\u3428\u3448\u345a\u34ad\u34b1\u34ca\u34f1\0\u3616\0\0\u3633cute;\u415bqu\xef\u27ba\u0500;Eaceinpsy\u11ed\u32f3\u32f5\u32ff\u3302\u330b\u330f\u331f\u3326\u3329;\u6ab4\u01f0\u32fa\0\u32fc;\u6ab8on;\u4161u\xe5\u11fe\u0100;d\u11f3\u3307il;\u415frc;\u415d\u0180Eas\u3316\u3318\u331b;\u6ab6p;\u6abaim;\u62e9olint;\u6a13i\xed\u1204;\u4441ot\u0180;be\u3334\u1d47\u3335\u62c5;\u6a66\u0380Aacmstx\u3346\u334a\u3357\u335b\u335e\u3363\u336drr;\u61d8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0a36\u0a34t\u803b\xa7\u40a7i;\u403bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uc000\ud835\udd30\u0200acoy\u3382\u3386\u3391\u33a0rp;\u666f\u0100hy\u338b\u338fcy;\u4449;\u4448rt\u026d\u3399\0\0\u339ci\xe4\u1464ara\xec\u2e6f\u803b\xad\u40ad\u0100gm\u33a8\u33b4ma\u0180;fv\u33b1\u33b2\u33b2\u43c3;\u43c2\u0400;deglnpr\u12ab\u33c5\u33c9\u33ce\u33d6\u33de\u33e1\u33e6ot;\u6a6a\u0100;q\u12b1\u12b0\u0100;E\u33d3\u33d4\u6a9e;\u6aa0\u0100;E\u33db\u33dc\u6a9d;\u6a9fe;\u6246lus;\u6a24arr;\u6972ar\xf2\u113d\u0200aeit\u33f8\u3408\u340f\u3417\u0100ls\u33fd\u3404lsetm\xe9\u336ahp;\u6a33parsl;\u69e4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341c\u341d\u6aaa\u0100;s\u3422\u3423\u6aac;\uc000\u2aac\ufe00\u0180flp\u342e\u3433\u3442tcy;\u444c\u0100;b\u3438\u3439\u402f\u0100;a\u343e\u343f\u69c4r;\u633ff;\uc000\ud835\udd64a\u0100dr\u344d\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349f\u0100au\u3465\u346fp\u0100;s\u1188\u346b;\uc000\u2293\ufe00p\u0100;s\u11b4\u3475;\uc000\u2294\ufe00u\u0100bp\u347f\u348f\u0180;es\u1197\u119c\u3486et\u0100;e\u1197\u348d\xf1\u119d\u0180;es\u11a8\u11ad\u3496et\u0100;e\u11a8\u349d\xf1\u11ae\u0180;af\u117b\u34a6\u05b0r\u0165\u34ab\u05b1\xbb\u117car\xf2\u1148\u0200cemt\u34b9\u34be\u34c2\u34c5r;\uc000\ud835\udcc8tm\xee\xf1i\xec\u3415ar\xe6\u11be\u0100ar\u34ce\u34d5r\u0100;f\u34d4\u17bf\u6606\u0100an\u34da\u34edight\u0100ep\u34e3\u34eapsilo\xee\u1ee0h\xe9\u2eafs\xbb\u2852\u0280bcmnp\u34fb\u355e\u1209\u358b\u358e\u0480;Edemnprs\u350e\u350f\u3511\u3515\u351e\u3523\u352c\u3531\u3536\u6282;\u6ac5ot;\u6abd\u0100;d\u11da\u351aot;\u6ac3ult;\u6ac1\u0100Ee\u3528\u352a;\u6acb;\u628alus;\u6abfarr;\u6979\u0180eiu\u353d\u3552\u3555t\u0180;en\u350e\u3545\u354bq\u0100;q\u11da\u350feq\u0100;q\u352b\u3528m;\u6ac7\u0100bp\u355a\u355c;\u6ad5;\u6ad3c\u0300;acens\u11ed\u356c\u3572\u3579\u357b\u3326ppro\xf8\u32faurlye\xf1\u11fe\xf1\u11f3\u0180aes\u3582\u3588\u331bppro\xf8\u331aq\xf1\u3317g;\u666a\u0680123;Edehlmnps\u35a9\u35ac\u35af\u121c\u35b2\u35b4\u35c0\u35c9\u35d5\u35da\u35df\u35e8\u35ed\u803b\xb9\u40b9\u803b\xb2\u40b2\u803b\xb3\u40b3;\u6ac6\u0100os\u35b9\u35bct;\u6abeub;\u6ad8\u0100;d\u1222\u35c5ot;\u6ac4s\u0100ou\u35cf\u35d2l;\u67c9b;\u6ad7arr;\u697bult;\u6ac2\u0100Ee\u35e4\u35e6;\u6acc;\u628blus;\u6ac0\u0180eiu\u35f4\u3609\u360ct\u0180;en\u121c\u35fc\u3602q\u0100;q\u1222\u35b2eq\u0100;q\u35e7\u35e4m;\u6ac8\u0100bp\u3611\u3613;\u6ad4;\u6ad6\u0180Aan\u361c\u3620\u362drr;\u61d9r\u0100hr\u3626\u3628\xeb\u222e\u0100;o\u0a2b\u0a29war;\u692alig\u803b\xdf\u40df\u0be1\u3651\u365d\u3660\u12ce\u3673\u3679\0\u367e\u36c2\0\0\0\0\0\u36db\u3703\0\u3709\u376c\0\0\0\u3787\u0272\u3656\0\0\u365bget;\u6316;\u43c4r\xeb\u0e5f\u0180aey\u3666\u366b\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uc000\ud835\udd31\u0200eiko\u3686\u369d\u36b5\u36bc\u01f2\u368b\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369b\u43b8ym;\u43d1\u0100cn\u36a2\u36b2k\u0100as\u36a8\u36aeppro\xf8\u12c1im\xbb\u12acs\xf0\u129e\u0100as\u36ba\u36ae\xf0\u12c1rn\u803b\xfe\u40fe\u01ec\u031f\u36c6\u22e7es\u8180\xd7;bd\u36cf\u36d0\u36d8\u40d7\u0100;a\u190f\u36d5r;\u6a31;\u6a30\u0180eps\u36e1\u36e3\u3700\xe1\u2a4d\u0200;bcf\u0486\u36ec\u36f0\u36f4ot;\u6336ir;\u6af1\u0100;o\u36f9\u36fc\uc000\ud835\udd65rk;\u6ada\xe1\u3362rime;\u6034\u0180aip\u370f\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374d\u3740\u3751\u3757\u375c\u375fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65b5own\xbb\u1dbbeft\u0100;e\u2800\u373e\xf1\u092e;\u625cight\u0100;e\u32aa\u374b\xf1\u105aot;\u65ecinus;\u6a3alus;\u6a39b;\u69cdime;\u6a3bezium;\u63e2\u0180cht\u3772\u377d\u3781\u0100ry\u3777\u377b;\uc000\ud835\udcc9;\u4446cy;\u445brok;\u4167\u0100io\u378b\u378ex\xf4\u1777head\u0100lr\u3797\u37a0eftarro\xf7\u084fightarrow\xbb\u0f5d\u0900AHabcdfghlmoprstuw\u37d0\u37d3\u37d7\u37e4\u37f0\u37fc\u380e\u381c\u3823\u3834\u3851\u385d\u386b\u38a9\u38cc\u38d2\u38ea\u38f6r\xf2\u03edar;\u6963\u0100cr\u37dc\u37e2ute\u803b\xfa\u40fa\xf2\u1150r\u01e3\u37ea\0\u37edy;\u445eve;\u416d\u0100iy\u37f5\u37farc\u803b\xfb\u40fb;\u4443\u0180abh\u3803\u3806\u380br\xf2\u13adlac;\u4171a\xf2\u13c3\u0100ir\u3813\u3818sht;\u697e;\uc000\ud835\udd32rave\u803b\xf9\u40f9\u0161\u3827\u3831r\u0100lr\u382c\u382e\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384d\u026f\u383f\0\0\u384arn\u0100;e\u3845\u3846\u631cr\xbb\u3846op;\u630fri;\u65f8\u0100al\u3856\u385acr;\u416b\u80bb\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uc000\ud835\udd66\u0300adhlsu\u114b\u3878\u387d\u1372\u3891\u38a0own\xe1\u13b3arpoon\u0100lr\u3888\u388cef\xf4\u382digh\xf4\u382fi\u0180;hl\u3899\u389a\u389c\u43c5\xbb\u13faon\xbb\u389aparrows;\u61c8\u0180cit\u38b0\u38c4\u38c8\u026f\u38b6\0\0\u38c1rn\u0100;e\u38bc\u38bd\u631dr\xbb\u38bdop;\u630eng;\u416fri;\u65f9cr;\uc000\ud835\udcca\u0180dir\u38d9\u38dd\u38e2ot;\u62f0lde;\u4169i\u0100;f\u3730\u38e8\xbb\u1813\u0100am\u38ef\u38f2r\xf2\u38a8l\u803b\xfc\u40fcangle;\u69a7\u0780ABDacdeflnoprsz\u391c\u391f\u3929\u392d\u39b5\u39b8\u39bd\u39df\u39e4\u39e8\u39f3\u39f9\u39fd\u3a01\u3a20r\xf2\u03f7ar\u0100;v\u3926\u3927\u6ae8;\u6ae9as\xe8\u03e1\u0100nr\u3932\u3937grt;\u699c\u0380eknprst\u34e3\u3946\u394b\u3952\u395d\u3964\u3996app\xe1\u2415othin\xe7\u1e96\u0180hir\u34eb\u2ec8\u3959op\xf4\u2fb5\u0100;h\u13b7\u3962\xef\u318d\u0100iu\u3969\u396dgm\xe1\u33b3\u0100bp\u3972\u3984setneq\u0100;q\u397d\u3980\uc000\u228a\ufe00;\uc000\u2acb\ufe00setneq\u0100;q\u398f\u3992\uc000\u228b\ufe00;\uc000\u2acc\ufe00\u0100hr\u399b\u399fet\xe1\u369ciangle\u0100lr\u39aa\u39afeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39c4\u39d2\u39d7\u0180;be\u2dea\u39cb\u39cfar;\u62bbq;\u625alip;\u62ee\u0100bt\u39dc\u1468a\xf2\u1469r;\uc000\ud835\udd33tr\xe9\u39aesu\u0100bp\u39ef\u39f1\xbb\u0d1c\xbb\u0d59pf;\uc000\ud835\udd67ro\xf0\u0efbtr\xe9\u39b4\u0100cu\u3a06\u3a0br;\uc000\ud835\udccb\u0100bp\u3a10\u3a18n\u0100Ee\u3980\u3a16\xbb\u397en\u0100Ee\u3992\u3a1e\xbb\u3990igzag;\u699a\u0380cefoprs\u3a36\u3a3b\u3a56\u3a5b\u3a54\u3a61\u3a6airc;\u4175\u0100di\u3a40\u3a51\u0100bg\u3a45\u3a49ar;\u6a5fe\u0100;q\u15fa\u3a4f;\u6259erp;\u6118r;\uc000\ud835\udd34pf;\uc000\ud835\udd68\u0100;e\u1479\u3a66at\xe8\u1479cr;\uc000\ud835\udccc\u0ae3\u178e\u3a87\0\u3a8b\0\u3a90\u3a9b\0\0\u3a9d\u3aa8\u3aab\u3aaf\0\0\u3ac3\u3ace\0\u3ad8\u17dc\u17dftr\xe9\u17d1r;\uc000\ud835\udd35\u0100Aa\u3a94\u3a97r\xf2\u03c3r\xf2\u09f6;\u43be\u0100Aa\u3aa1\u3aa4r\xf2\u03b8r\xf2\u09eba\xf0\u2713is;\u62fb\u0180dpt\u17a4\u3ab5\u3abe\u0100fl\u3aba\u17a9;\uc000\ud835\udd69im\xe5\u17b2\u0100Aa\u3ac7\u3acar\xf2\u03cer\xf2\u0a01\u0100cq\u3ad2\u17b8r;\uc000\ud835\udccd\u0100pt\u17d6\u3adcr\xe9\u17d4\u0400acefiosu\u3af0\u3afd\u3b08\u3b0c\u3b11\u3b15\u3b1b\u3b21c\u0100uy\u3af6\u3afbte\u803b\xfd\u40fd;\u444f\u0100iy\u3b02\u3b06rc;\u4177;\u444bn\u803b\xa5\u40a5r;\uc000\ud835\udd36cy;\u4457pf;\uc000\ud835\udd6acr;\uc000\ud835\udcce\u0100cm\u3b26\u3b29y;\u444el\u803b\xff\u40ff\u0500acdefhiosw\u3b42\u3b48\u3b54\u3b58\u3b64\u3b69\u3b6d\u3b74\u3b7a\u3b80cute;\u417a\u0100ay\u3b4d\u3b52ron;\u417e;\u4437ot;\u417c\u0100et\u3b5d\u3b61tr\xe6\u155fa;\u43b6r;\uc000\ud835\udd37cy;\u4436grarr;\u61ddpf;\uc000\ud835\udd6bcr;\uc000\ud835\udccf\u0100jn\u3b85\u3b87;\u600dj;\u600c"
    .split("")
    .map((c) => c.charCodeAt(0)));

// Generated using scripts/write-decode-map.ts
var xmlDecodeTree = new Uint16Array(
// prettier-ignore
"\u0200aglq\t\x15\x18\x1b\u026d\x0f\0\0\x12p;\u4026os;\u4027t;\u403et;\u403cuot;\u4022"
    .split("")
    .map((c) => c.charCodeAt(0)));

// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
var _a;
const decodeMap = new Map([
    [0, 65533],
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376],
]);
const fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function (codePoint) {
    let output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }
    output += String.fromCharCode(codePoint);
    return output;
};
function replaceCodePoint(codePoint) {
    var _a;
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return 0xfffd;
    }
    return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}

var CharCodes$1;
(function (CharCodes) {
    CharCodes[CharCodes["NUM"] = 35] = "NUM";
    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
    CharCodes[CharCodes["NINE"] = 57] = "NINE";
    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
    /** Bit that needs to be set to convert an upper case ASCII character to lower case */
    CharCodes[CharCodes["To_LOWER_BIT"] = 32] = "To_LOWER_BIT";
})(CharCodes$1 || (CharCodes$1 = {}));
var BinTrieFlags;
(function (BinTrieFlags) {
    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function determineBranch(decodeTree, current, nodeIdx, char) {
    const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
    const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
    // Case 1: Single branch encoded in jump offset
    if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
    }
    // Case 2: Multiple branches encoded in jump table
    if (jumpOffset) {
        const value = char - jumpOffset;
        return value < 0 || value >= branchCount
            ? -1
            : decodeTree[nodeIdx + value] - 1;
    }
    // Case 3: Multiple branches encoded in dictionary
    // Binary search for the character.
    let lo = nodeIdx;
    let hi = lo + branchCount - 1;
    while (lo <= hi) {
        const mid = (lo + hi) >>> 1;
        const midVal = decodeTree[mid];
        if (midVal < char) {
            lo = mid + 1;
        }
        else if (midVal > char) {
            hi = mid - 1;
        }
        else {
            return decodeTree[mid + branchCount];
        }
    }
    return -1;
}

var CharCodes;
(function (CharCodes) {
    CharCodes[CharCodes["Tab"] = 9] = "Tab";
    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
    CharCodes[CharCodes["Space"] = 32] = "Space";
    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
    CharCodes[CharCodes["Num"] = 35] = "Num";
    CharCodes[CharCodes["Amp"] = 38] = "Amp";
    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
    CharCodes[CharCodes["Dash"] = 45] = "Dash";
    CharCodes[CharCodes["Slash"] = 47] = "Slash";
    CharCodes[CharCodes["Zero"] = 48] = "Zero";
    CharCodes[CharCodes["Nine"] = 57] = "Nine";
    CharCodes[CharCodes["Semi"] = 59] = "Semi";
    CharCodes[CharCodes["Lt"] = 60] = "Lt";
    CharCodes[CharCodes["Eq"] = 61] = "Eq";
    CharCodes[CharCodes["Gt"] = 62] = "Gt";
    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes || (CharCodes = {}));
/** All the states the tokenizer can be in. */
var State;
(function (State) {
    State[State["Text"] = 1] = "Text";
    State[State["BeforeTagName"] = 2] = "BeforeTagName";
    State[State["InTagName"] = 3] = "InTagName";
    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
    State[State["InClosingTagName"] = 6] = "InClosingTagName";
    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
    // Attributes
    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
    State[State["InAttributeName"] = 9] = "InAttributeName";
    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
    // Declarations
    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
    State[State["InDeclaration"] = 16] = "InDeclaration";
    // Processing instructions
    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
    // Comments & CDATA
    State[State["BeforeComment"] = 18] = "BeforeComment";
    State[State["CDATASequence"] = 19] = "CDATASequence";
    State[State["InSpecialComment"] = 20] = "InSpecialComment";
    State[State["InCommentLike"] = 21] = "InCommentLike";
    // Special tags
    State[State["BeforeSpecialS"] = 22] = "BeforeSpecialS";
    State[State["SpecialStartSequence"] = 23] = "SpecialStartSequence";
    State[State["InSpecialTag"] = 24] = "InSpecialTag";
    State[State["BeforeEntity"] = 25] = "BeforeEntity";
    State[State["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
    State[State["InNamedEntity"] = 27] = "InNamedEntity";
    State[State["InNumericEntity"] = 28] = "InNumericEntity";
    State[State["InHexEntity"] = 29] = "InHexEntity";
})(State || (State = {}));
function isWhitespace$1(c) {
    return (c === CharCodes.Space ||
        c === CharCodes.NewLine ||
        c === CharCodes.Tab ||
        c === CharCodes.FormFeed ||
        c === CharCodes.CarriageReturn);
}
function isEndOfTagSection(c) {
    return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace$1(c);
}
function isNumber$1(c) {
    return c >= CharCodes.Zero && c <= CharCodes.Nine;
}
function isASCIIAlpha(c) {
    return ((c >= CharCodes.LowerA && c <= CharCodes.LowerZ) ||
        (c >= CharCodes.UpperA && c <= CharCodes.UpperZ));
}
function isHexDigit(c) {
    return ((c >= CharCodes.UpperA && c <= CharCodes.UpperF) ||
        (c >= CharCodes.LowerA && c <= CharCodes.LowerF));
}
var QuoteType;
(function (QuoteType) {
    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
    QuoteType[QuoteType["Single"] = 2] = "Single";
    QuoteType[QuoteType["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
/**
 * Sequences used to match longer strings.
 *
 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
 * sequences with an increased offset.
 */
const Sequences = {
    Cdata: new Uint8Array([0x43, 0x44, 0x41, 0x54, 0x41, 0x5b]),
    CdataEnd: new Uint8Array([0x5d, 0x5d, 0x3e]),
    CommentEnd: new Uint8Array([0x2d, 0x2d, 0x3e]),
    ScriptEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74]),
    StyleEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65]),
    TitleEnd: new Uint8Array([0x3c, 0x2f, 0x74, 0x69, 0x74, 0x6c, 0x65]), // `</title`
};
class Tokenizer {
    constructor({ xmlMode = false, decodeEntities = true, }, cbs) {
        this.cbs = cbs;
        /** The current state the tokenizer is in. */
        this.state = State.Text;
        /** The read buffer. */
        this.buffer = "";
        /** The beginning of the section that is currently being read. */
        this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */
        this.index = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
        this.baseState = State.Text;
        /** For special parsing behavior inside of script and style tags. */
        this.isSpecial = false;
        /** Indicates whether the tokenizer has been paused. */
        this.running = true;
        /** The offset of the current buffer. */
        this.offset = 0;
        this.sequenceIndex = 0;
        this.trieIndex = 0;
        this.trieCurrent = 0;
        /** For named entities, the index of the value. For numeric entities, the code point. */
        this.entityResult = 0;
        this.entityExcess = 0;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.entityTrie = xmlMode ? xmlDecodeTree : htmlDecodeTree;
    }
    reset() {
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.currentSequence = undefined;
        this.running = true;
        this.offset = 0;
    }
    write(chunk) {
        this.offset += this.buffer.length;
        this.buffer = chunk;
        this.parse();
    }
    end() {
        if (this.running)
            this.finish();
    }
    pause() {
        this.running = false;
    }
    resume() {
        this.running = true;
        if (this.index < this.buffer.length + this.offset) {
            this.parse();
        }
    }
    /**
     * The current index within all of the written data.
     */
    getIndex() {
        return this.index;
    }
    /**
     * The start of the current section.
     */
    getSectionStart() {
        return this.sectionStart;
    }
    stateText(c) {
        if (c === CharCodes.Lt ||
            (!this.decodeEntities && this.fastForwardTo(CharCodes.Lt))) {
            if (this.index > this.sectionStart) {
                this.cbs.ontext(this.sectionStart, this.index);
            }
            this.state = State.BeforeTagName;
            this.sectionStart = this.index;
        }
        else if (this.decodeEntities && c === CharCodes.Amp) {
            this.state = State.BeforeEntity;
        }
    }
    stateSpecialStartSequence(c) {
        const isEnd = this.sequenceIndex === this.currentSequence.length;
        const isMatch = isEnd
            ? // If we are at the end of the sequence, make sure the tag name has ended
                isEndOfTagSection(c)
            : // Otherwise, do a case-insensitive comparison
                (c | 0x20) === this.currentSequence[this.sequenceIndex];
        if (!isMatch) {
            this.isSpecial = false;
        }
        else if (!isEnd) {
            this.sequenceIndex++;
            return;
        }
        this.sequenceIndex = 0;
        this.state = State.InTagName;
        this.stateInTagName(c);
    }
    /** Look for an end tag. For <title> tags, also decode entities. */
    stateInSpecialTag(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (c === CharCodes.Gt || isWhitespace$1(c)) {
                const endOfText = this.index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    // Spoof the index so that reported locations match up.
                    const actualIndex = this.index;
                    this.index = endOfText;
                    this.cbs.ontext(this.sectionStart, endOfText);
                    this.index = actualIndex;
                }
                this.isSpecial = false;
                this.sectionStart = endOfText + 2; // Skip over the `</`
                this.stateInClosingTagName(c);
                return; // We are done; skip the rest of the function.
            }
            this.sequenceIndex = 0;
        }
        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
        }
        else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd) {
                // We have to parse entities in <title> tags.
                if (this.decodeEntities && c === CharCodes.Amp) {
                    this.state = State.BeforeEntity;
                }
            }
            else if (this.fastForwardTo(CharCodes.Lt)) {
                // Outside of <title> tags, we can fast-forward.
                this.sequenceIndex = 1;
            }
        }
        else {
            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
            this.sequenceIndex = Number(c === CharCodes.Lt);
        }
    }
    stateCDATASequence(c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
                this.state = State.InCommentLike;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
            }
        }
        else {
            this.sequenceIndex = 0;
            this.state = State.InDeclaration;
            this.stateInDeclaration(c); // Reconsume the character
        }
    }
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */
    fastForwardTo(c) {
        while (++this.index < this.buffer.length + this.offset) {
            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
                return true;
            }
        }
        /*
         * We increment the index at the end of the `parse` loop,
         * so set it to `buffer.length - 1` here.
         *
         * TODO: Refactor `parse` to increment index before calling states.
         */
        this.index = this.buffer.length + this.offset - 1;
        return false;
    }
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */
    stateInCommentLike(c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                if (this.currentSequence === Sequences.CdataEnd) {
                    this.cbs.oncdata(this.sectionStart, this.index, 2);
                }
                else {
                    this.cbs.oncomment(this.sectionStart, this.index, 2);
                }
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
                this.state = State.Text;
            }
        }
        else if (this.sequenceIndex === 0) {
            // Fast-forward to the first character of the sequence
            if (this.fastForwardTo(this.currentSequence[0])) {
                this.sequenceIndex = 1;
            }
        }
        else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
            // Allow long sequences, eg. --->, ]]]>
            this.sequenceIndex = 0;
        }
    }
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */
    isTagStartChar(c) {
        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    }
    startSpecial(sequence, offset) {
        this.isSpecial = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
        this.state = State.SpecialStartSequence;
    }
    stateBeforeTagName(c) {
        if (c === CharCodes.ExclamationMark) {
            this.state = State.BeforeDeclaration;
            this.sectionStart = this.index + 1;
        }
        else if (c === CharCodes.Questionmark) {
            this.state = State.InProcessingInstruction;
            this.sectionStart = this.index + 1;
        }
        else if (this.isTagStartChar(c)) {
            const lower = c | 0x20;
            this.sectionStart = this.index;
            if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
                this.startSpecial(Sequences.TitleEnd, 3);
            }
            else {
                this.state =
                    !this.xmlMode && lower === Sequences.ScriptEnd[2]
                        ? State.BeforeSpecialS
                        : State.InTagName;
            }
        }
        else if (c === CharCodes.Slash) {
            this.state = State.BeforeClosingTagName;
        }
        else {
            this.state = State.Text;
            this.stateText(c);
        }
    }
    stateInTagName(c) {
        if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateBeforeClosingTagName(c) {
        if (isWhitespace$1(c)) ;
        else if (c === CharCodes.Gt) {
            this.state = State.Text;
        }
        else {
            this.state = this.isTagStartChar(c)
                ? State.InClosingTagName
                : State.InSpecialComment;
            this.sectionStart = this.index;
        }
    }
    stateInClosingTagName(c) {
        if (c === CharCodes.Gt || isWhitespace$1(c)) {
            this.cbs.onclosetag(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterClosingTagName;
            this.stateAfterClosingTagName(c);
        }
    }
    stateAfterClosingTagName(c) {
        // Skip everything until ">"
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeAttributeName(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onopentagend(this.index);
            if (this.isSpecial) {
                this.state = State.InSpecialTag;
                this.sequenceIndex = 0;
            }
            else {
                this.state = State.Text;
            }
            this.baseState = this.state;
            this.sectionStart = this.index + 1;
        }
        else if (c === CharCodes.Slash) {
            this.state = State.InSelfClosingTag;
        }
        else if (!isWhitespace$1(c)) {
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateInSelfClosingTag(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onselfclosingtag(this.index);
            this.state = State.Text;
            this.baseState = State.Text;
            this.sectionStart = this.index + 1;
            this.isSpecial = false; // Reset special state, in case of self-closing special tags
        }
        else if (!isWhitespace$1(c)) {
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateInAttributeName(c) {
        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterAttributeName;
            this.stateAfterAttributeName(c);
        }
    }
    stateAfterAttributeName(c) {
        if (c === CharCodes.Eq) {
            this.state = State.BeforeAttributeValue;
        }
        else if (c === CharCodes.Slash || c === CharCodes.Gt) {
            this.cbs.onattribend(QuoteType.NoValue, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
        else if (!isWhitespace$1(c)) {
            this.cbs.onattribend(QuoteType.NoValue, this.index);
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateBeforeAttributeValue(c) {
        if (c === CharCodes.DoubleQuote) {
            this.state = State.InAttributeValueDq;
            this.sectionStart = this.index + 1;
        }
        else if (c === CharCodes.SingleQuote) {
            this.state = State.InAttributeValueSq;
            this.sectionStart = this.index + 1;
        }
        else if (!isWhitespace$1(c)) {
            this.sectionStart = this.index;
            this.state = State.InAttributeValueNq;
            this.stateInAttributeValueNoQuotes(c); // Reconsume token
        }
    }
    handleInAttributeValue(c, quote) {
        if (c === quote ||
            (!this.decodeEntities && this.fastForwardTo(quote))) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(quote === CharCodes.DoubleQuote
                ? QuoteType.Double
                : QuoteType.Single, this.index);
            this.state = State.BeforeAttributeName;
        }
        else if (this.decodeEntities && c === CharCodes.Amp) {
            this.baseState = this.state;
            this.state = State.BeforeEntity;
        }
    }
    stateInAttributeValueDoubleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
    }
    stateInAttributeValueSingleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.SingleQuote);
    }
    stateInAttributeValueNoQuotes(c) {
        if (isWhitespace$1(c) || c === CharCodes.Gt) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(QuoteType.Unquoted, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
        else if (this.decodeEntities && c === CharCodes.Amp) {
            this.baseState = this.state;
            this.state = State.BeforeEntity;
        }
    }
    stateBeforeDeclaration(c) {
        if (c === CharCodes.OpeningSquareBracket) {
            this.state = State.CDATASequence;
            this.sequenceIndex = 0;
        }
        else {
            this.state =
                c === CharCodes.Dash
                    ? State.BeforeComment
                    : State.InDeclaration;
        }
    }
    stateInDeclaration(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.ondeclaration(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateInProcessingInstruction(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeComment(c) {
        if (c === CharCodes.Dash) {
            this.state = State.InCommentLike;
            this.currentSequence = Sequences.CommentEnd;
            // Allow short comments (eg. <!-->)
            this.sequenceIndex = 2;
            this.sectionStart = this.index + 1;
        }
        else {
            this.state = State.InDeclaration;
        }
    }
    stateInSpecialComment(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeSpecialS(c) {
        const lower = c | 0x20;
        if (lower === Sequences.ScriptEnd[3]) {
            this.startSpecial(Sequences.ScriptEnd, 4);
        }
        else if (lower === Sequences.StyleEnd[3]) {
            this.startSpecial(Sequences.StyleEnd, 4);
        }
        else {
            this.state = State.InTagName;
            this.stateInTagName(c); // Consume the token again
        }
    }
    stateBeforeEntity(c) {
        // Start excess with 1 to include the '&'
        this.entityExcess = 1;
        this.entityResult = 0;
        if (c === CharCodes.Num) {
            this.state = State.BeforeNumericEntity;
        }
        else if (c === CharCodes.Amp) ;
        else {
            this.trieIndex = 0;
            this.trieCurrent = this.entityTrie[0];
            this.state = State.InNamedEntity;
            this.stateInNamedEntity(c);
        }
    }
    stateInNamedEntity(c) {
        this.entityExcess += 1;
        this.trieIndex = determineBranch(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
        if (this.trieIndex < 0) {
            this.emitNamedEntity();
            this.index--;
            return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        const masked = this.trieCurrent & BinTrieFlags.VALUE_LENGTH;
        // If the branch is a value, store it and continue
        if (masked) {
            // The mask is the number of bytes of the value, including the current byte.
            const valueLength = (masked >> 14) - 1;
            // If we have a legacy entity while parsing strictly, just skip the number of bytes
            if (!this.allowLegacyEntity() && c !== CharCodes.Semi) {
                this.trieIndex += valueLength;
            }
            else {
                // Add 1 as we have already incremented the excess
                const entityStart = this.index - this.entityExcess + 1;
                if (entityStart > this.sectionStart) {
                    this.emitPartial(this.sectionStart, entityStart);
                }
                // If this is a surrogate pair, consume the next two bytes
                this.entityResult = this.trieIndex;
                this.trieIndex += valueLength;
                this.entityExcess = 0;
                this.sectionStart = this.index + 1;
                if (valueLength === 0) {
                    this.emitNamedEntity();
                }
            }
        }
    }
    emitNamedEntity() {
        this.state = this.baseState;
        if (this.entityResult === 0) {
            return;
        }
        const valueLength = (this.entityTrie[this.entityResult] & BinTrieFlags.VALUE_LENGTH) >>
            14;
        switch (valueLength) {
            case 1:
                this.emitCodePoint(this.entityTrie[this.entityResult] &
                    ~BinTrieFlags.VALUE_LENGTH);
                break;
            case 2:
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                break;
            case 3: {
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
            }
        }
    }
    stateBeforeNumericEntity(c) {
        if ((c | 0x20) === CharCodes.LowerX) {
            this.entityExcess++;
            this.state = State.InHexEntity;
        }
        else {
            this.state = State.InNumericEntity;
            this.stateInNumericEntity(c);
        }
    }
    emitNumericEntity(strict) {
        const entityStart = this.index - this.entityExcess - 1;
        const numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
        if (numberStart !== this.index) {
            // Emit leading data if any
            if (entityStart > this.sectionStart) {
                this.emitPartial(this.sectionStart, entityStart);
            }
            this.sectionStart = this.index + Number(strict);
            this.emitCodePoint(replaceCodePoint(this.entityResult));
        }
        this.state = this.baseState;
    }
    stateInNumericEntity(c) {
        if (c === CharCodes.Semi) {
            this.emitNumericEntity(true);
        }
        else if (isNumber$1(c)) {
            this.entityResult = this.entityResult * 10 + (c - CharCodes.Zero);
            this.entityExcess++;
        }
        else {
            if (this.allowLegacyEntity()) {
                this.emitNumericEntity(false);
            }
            else {
                this.state = this.baseState;
            }
            this.index--;
        }
    }
    stateInHexEntity(c) {
        if (c === CharCodes.Semi) {
            this.emitNumericEntity(true);
        }
        else if (isNumber$1(c)) {
            this.entityResult = this.entityResult * 16 + (c - CharCodes.Zero);
            this.entityExcess++;
        }
        else if (isHexDigit(c)) {
            this.entityResult =
                this.entityResult * 16 + ((c | 0x20) - CharCodes.LowerA + 10);
            this.entityExcess++;
        }
        else {
            if (this.allowLegacyEntity()) {
                this.emitNumericEntity(false);
            }
            else {
                this.state = this.baseState;
            }
            this.index--;
        }
    }
    allowLegacyEntity() {
        return (!this.xmlMode &&
            (this.baseState === State.Text ||
                this.baseState === State.InSpecialTag));
    }
    /**
     * Remove data that has already been consumed from the buffer.
     */
    cleanup() {
        // If we are inside of text or attributes, emit what we already have.
        if (this.running && this.sectionStart !== this.index) {
            if (this.state === State.Text ||
                (this.state === State.InSpecialTag && this.sequenceIndex === 0)) {
                this.cbs.ontext(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
            else if (this.state === State.InAttributeValueDq ||
                this.state === State.InAttributeValueSq ||
                this.state === State.InAttributeValueNq) {
                this.cbs.onattribdata(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
        }
    }
    shouldContinue() {
        return this.index < this.buffer.length + this.offset && this.running;
    }
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */
    parse() {
        while (this.shouldContinue()) {
            const c = this.buffer.charCodeAt(this.index - this.offset);
            if (this.state === State.Text) {
                this.stateText(c);
            }
            else if (this.state === State.SpecialStartSequence) {
                this.stateSpecialStartSequence(c);
            }
            else if (this.state === State.InSpecialTag) {
                this.stateInSpecialTag(c);
            }
            else if (this.state === State.CDATASequence) {
                this.stateCDATASequence(c);
            }
            else if (this.state === State.InAttributeValueDq) {
                this.stateInAttributeValueDoubleQuotes(c);
            }
            else if (this.state === State.InAttributeName) {
                this.stateInAttributeName(c);
            }
            else if (this.state === State.InCommentLike) {
                this.stateInCommentLike(c);
            }
            else if (this.state === State.InSpecialComment) {
                this.stateInSpecialComment(c);
            }
            else if (this.state === State.BeforeAttributeName) {
                this.stateBeforeAttributeName(c);
            }
            else if (this.state === State.InTagName) {
                this.stateInTagName(c);
            }
            else if (this.state === State.InClosingTagName) {
                this.stateInClosingTagName(c);
            }
            else if (this.state === State.BeforeTagName) {
                this.stateBeforeTagName(c);
            }
            else if (this.state === State.AfterAttributeName) {
                this.stateAfterAttributeName(c);
            }
            else if (this.state === State.InAttributeValueSq) {
                this.stateInAttributeValueSingleQuotes(c);
            }
            else if (this.state === State.BeforeAttributeValue) {
                this.stateBeforeAttributeValue(c);
            }
            else if (this.state === State.BeforeClosingTagName) {
                this.stateBeforeClosingTagName(c);
            }
            else if (this.state === State.AfterClosingTagName) {
                this.stateAfterClosingTagName(c);
            }
            else if (this.state === State.BeforeSpecialS) {
                this.stateBeforeSpecialS(c);
            }
            else if (this.state === State.InAttributeValueNq) {
                this.stateInAttributeValueNoQuotes(c);
            }
            else if (this.state === State.InSelfClosingTag) {
                this.stateInSelfClosingTag(c);
            }
            else if (this.state === State.InDeclaration) {
                this.stateInDeclaration(c);
            }
            else if (this.state === State.BeforeDeclaration) {
                this.stateBeforeDeclaration(c);
            }
            else if (this.state === State.BeforeComment) {
                this.stateBeforeComment(c);
            }
            else if (this.state === State.InProcessingInstruction) {
                this.stateInProcessingInstruction(c);
            }
            else if (this.state === State.InNamedEntity) {
                this.stateInNamedEntity(c);
            }
            else if (this.state === State.BeforeEntity) {
                this.stateBeforeEntity(c);
            }
            else if (this.state === State.InHexEntity) {
                this.stateInHexEntity(c);
            }
            else if (this.state === State.InNumericEntity) {
                this.stateInNumericEntity(c);
            }
            else {
                // `this._state === State.BeforeNumericEntity`
                this.stateBeforeNumericEntity(c);
            }
            this.index++;
        }
        this.cleanup();
    }
    finish() {
        if (this.state === State.InNamedEntity) {
            this.emitNamedEntity();
        }
        // If there is remaining data, emit it in a reasonable way
        if (this.sectionStart < this.index) {
            this.handleTrailingData();
        }
        this.cbs.onend();
    }
    /** Handle any trailing data. */
    handleTrailingData() {
        const endIndex = this.buffer.length + this.offset;
        if (this.state === State.InCommentLike) {
            if (this.currentSequence === Sequences.CdataEnd) {
                this.cbs.oncdata(this.sectionStart, endIndex, 0);
            }
            else {
                this.cbs.oncomment(this.sectionStart, endIndex, 0);
            }
        }
        else if (this.state === State.InNumericEntity &&
            this.allowLegacyEntity()) {
            this.emitNumericEntity(false);
            // All trailing data will have been consumed
        }
        else if (this.state === State.InHexEntity &&
            this.allowLegacyEntity()) {
            this.emitNumericEntity(false);
            // All trailing data will have been consumed
        }
        else if (this.state === State.InTagName ||
            this.state === State.BeforeAttributeName ||
            this.state === State.BeforeAttributeValue ||
            this.state === State.AfterAttributeName ||
            this.state === State.InAttributeName ||
            this.state === State.InAttributeValueSq ||
            this.state === State.InAttributeValueDq ||
            this.state === State.InAttributeValueNq ||
            this.state === State.InClosingTagName) ;
        else {
            this.cbs.ontext(this.sectionStart, endIndex);
        }
    }
    emitPartial(start, endIndex) {
        if (this.baseState !== State.Text &&
            this.baseState !== State.InSpecialTag) {
            this.cbs.onattribdata(start, endIndex);
        }
        else {
            this.cbs.ontext(start, endIndex);
        }
    }
    emitCodePoint(cp) {
        if (this.baseState !== State.Text &&
            this.baseState !== State.InSpecialTag) {
            this.cbs.onattribentity(cp);
        }
        else {
            this.cbs.ontextentity(cp);
        }
    }
}

const formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea",
]);
const pTag = new Set(["p"]);
const tableSectionTags = new Set(["thead", "tbody"]);
const ddtTags = new Set(["dd", "dt"]);
const rtpTags = new Set(["rt", "rp"]);
const openImpliesClose = new Map([
    ["tr", new Set(["tr", "th", "td"])],
    ["th", new Set(["th"])],
    ["td", new Set(["thead", "th", "td"])],
    ["body", new Set(["head", "link", "script"])],
    ["li", new Set(["li"])],
    ["p", pTag],
    ["h1", pTag],
    ["h2", pTag],
    ["h3", pTag],
    ["h4", pTag],
    ["h5", pTag],
    ["h6", pTag],
    ["select", formTags],
    ["input", formTags],
    ["output", formTags],
    ["button", formTags],
    ["datalist", formTags],
    ["textarea", formTags],
    ["option", new Set(["option"])],
    ["optgroup", new Set(["optgroup", "option"])],
    ["dd", ddtTags],
    ["dt", ddtTags],
    ["address", pTag],
    ["article", pTag],
    ["aside", pTag],
    ["blockquote", pTag],
    ["details", pTag],
    ["div", pTag],
    ["dl", pTag],
    ["fieldset", pTag],
    ["figcaption", pTag],
    ["figure", pTag],
    ["footer", pTag],
    ["form", pTag],
    ["header", pTag],
    ["hr", pTag],
    ["main", pTag],
    ["nav", pTag],
    ["ol", pTag],
    ["pre", pTag],
    ["section", pTag],
    ["table", pTag],
    ["ul", pTag],
    ["rt", rtpTags],
    ["rp", rtpTags],
    ["tbody", tableSectionTags],
    ["tfoot", tableSectionTags],
]);
const voidElements$1 = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
const foreignContextElements = new Set(["math", "svg"]);
const htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title",
]);
const reNameEnd = /\s|\//;
class Parser {
    constructor(cbs, options = {}) {
        var _a, _b, _c, _d, _e;
        this.options = options;
        /** The start index of the last event. */
        this.startIndex = 0;
        /** The end index of the last event. */
        this.endIndex = 0;
        /**
         * Store the start index of the current open tag,
         * so we can update the start index for attributes.
         */
        this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.buffers = [];
        this.bufferOffset = 0;
        /** The index of the last written buffer. Used when resuming after a `pause()`. */
        this.writeIndex = 0;
        /** Indicates whether the parser has finished running / `.end` has been called. */
        this.ended = false;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
        this.lowerCaseAttributeNames =
            (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer)(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
    }
    // Tokenizer event handlers
    /** @internal */
    ontext(start, endIndex) {
        var _a, _b;
        const data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        this.startIndex = endIndex;
    }
    /** @internal */
    ontextentity(cp) {
        var _a, _b;
        /*
         * Entities can be emitted on the character, or directly after.
         * We use the section start here to get accurate indices.
         */
        const idx = this.tokenizer.getSectionStart();
        this.endIndex = idx - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, fromCodePoint(cp));
        this.startIndex = idx;
    }
    isVoidElement(name) {
        return !this.options.xmlMode && voidElements$1.has(name);
    }
    /** @internal */
    onopentagname(start, endIndex) {
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.emitOpenTag(name);
    }
    emitOpenTag(name) {
        var _a, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        const impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
        if (impliesClose) {
            while (this.stack.length > 0 &&
                impliesClose.has(this.stack[this.stack.length - 1])) {
                const el = this.stack.pop();
                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, el, true);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) {
                this.foreignContext.push(true);
            }
            else if (htmlIntegrationElements.has(name)) {
                this.foreignContext.push(false);
            }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
        if (this.cbs.onopentag)
            this.attribs = {};
    }
    endOpenTag(isImplied) {
        var _a, _b;
        this.startIndex = this.openTagStart;
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
    }
    /** @internal */
    onopentagend(endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onclosetag(start, endIndex) {
        var _a, _b, _c, _d, _e, _f;
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (foreignContextElements.has(name) ||
            htmlIntegrationElements.has(name)) {
            this.foreignContext.pop();
        }
        if (!this.isVoidElement(name)) {
            const pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this.cbs.onclosetag) {
                    let count = this.stack.length - pos;
                    while (count--) {
                        // We know the stack has sufficient elements.
                        this.cbs.onclosetag(this.stack.pop(), count !== 0);
                    }
                }
                else
                    this.stack.length = pos;
            }
            else if (!this.options.xmlMode && name === "p") {
                // Implicit open before close
                this.emitOpenTag("p");
                this.closeCurrentTag(true);
            }
        }
        else if (!this.options.xmlMode && name === "br") {
            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
            (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, "br");
            (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
            (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", false);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onselfclosingtag(endIndex) {
        this.endIndex = endIndex;
        if (this.options.xmlMode ||
            this.options.recognizeSelfClosing ||
            this.foreignContext[this.foreignContext.length - 1]) {
            this.closeCurrentTag(false);
            // Set `startIndex` for next node
            this.startIndex = endIndex + 1;
        }
        else {
            // Ignore the fact that the tag is self-closing.
            this.onopentagend(endIndex);
        }
    }
    closeCurrentTag(isOpenImplied) {
        var _a, _b;
        const name = this.tagname;
        this.endOpenTag(isOpenImplied);
        // Self-closing tags will be on the top of the stack
        if (this.stack[this.stack.length - 1] === name) {
            // If the opening tag isn't implied, the closing tag has to be implied.
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
            this.stack.pop();
        }
    }
    /** @internal */
    onattribname(start, endIndex) {
        this.startIndex = start;
        const name = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames
            ? name.toLowerCase()
            : name;
    }
    /** @internal */
    onattribdata(start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
    }
    /** @internal */
    onattribentity(cp) {
        this.attribvalue += fromCodePoint(cp);
    }
    /** @internal */
    onattribend(quote, endIndex) {
        var _a, _b;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === QuoteType.Double
            ? '"'
            : quote === QuoteType.Single
                ? "'"
                : quote === QuoteType.NoValue
                    ? undefined
                    : null);
        if (this.attribs &&
            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
    }
    getInstructionName(value) {
        const idx = value.search(reNameEnd);
        let name = idx < 0 ? value : value.substr(0, idx);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    }
    /** @internal */
    ondeclaration(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onprocessinginstruction(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    oncomment(start, endIndex, offset) {
        var _a, _b, _c, _d;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    oncdata(start, endIndex, offset) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex - offset);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        }
        else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onend() {
        var _a, _b;
        if (this.cbs.onclosetag) {
            // Set the end index for all remaining tags
            this.endIndex = this.startIndex;
            for (let i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i], true))
                ;
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */
    reset() {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        this.buffers.length = 0;
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
    }
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */
    parseComplete(data) {
        this.reset();
        this.end(data);
    }
    getSlice(start, end) {
        while (start - this.bufferOffset >= this.buffers[0].length) {
            this.shiftBuffer();
        }
        let str = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while (end - this.bufferOffset > this.buffers[0].length) {
            this.shiftBuffer();
            str += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return str;
    }
    shiftBuffer() {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
    }
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */
    write(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
            return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
            this.tokenizer.write(chunk);
            this.writeIndex++;
        }
    }
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */
    end(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, Error(".end() after done!"));
            return;
        }
        if (chunk)
            this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
    }
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */
    pause() {
        this.tokenizer.pause();
    }
    /**
     * Resumes parsing after `pause` was called.
     */
    resume() {
        this.tokenizer.resume();
        while (this.tokenizer.running &&
            this.writeIndex < this.buffers.length) {
            this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended)
            this.tokenizer.end();
    }
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */
    parseChunk(chunk) {
        this.write(chunk);
    }
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */
    done(chunk) {
        this.end(chunk);
    }
}

var domain;

// This constructor is used to store event handlers. Instantiating this is
// faster than explicitly calling `Object.create(null)` to get a "clean" empty
// object (tested with v8 v4.9).
function EventHandlers() {}
EventHandlers.prototype = Object.create(null);

function EventEmitter() {
  EventEmitter.init.call(this);
}

// nodejs oddity
// require('events') === require('events').EventEmitter
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.usingDomains = false;

EventEmitter.prototype.domain = undefined;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

EventEmitter.init = function() {
  this.domain = null;
  if (EventEmitter.usingDomains) {
    // if there is an active domain, then attach to it.
    if (domain.active ) ;
  }

  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events, domain;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  domain = this.domain;

  // If there is no 'error' event listener then throw.
  if (doError) {
    er = arguments[1];
    if (domain) {
      if (!er)
        er = new Error('Uncaught, unspecified "error" event');
      er.domainEmitter = this;
      er.domain = domain;
      er.domainThrown = false;
      domain.emit('error', er);
    } else if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] :
                                          [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + type + ' listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }

  return target;
}
function emitWarning(e) {
  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || (list.listener && list.listener === listener)) {
        if (--this._eventsCount === 0)
          this._events = new EventHandlers();
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length; i-- > 0;) {
          if (list[i] === listener ||
              (list[i].listener && list[i].listener === listener)) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (list.length === 1) {
          list[0] = undefined;
          if (--this._eventsCount === 0) {
            this._events = new EventHandlers();
            return this;
          } else {
            delete events[type];
          }
        } else {
          spliceOne(list, position);
        }

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };
    
// Alias for removeListener added in NodeJS 10.0
// https://nodejs.org/api/events.html#events_emitter_off_eventname_listener
EventEmitter.prototype.off = function(type, listener){
    return this.removeListener(type, listener);
};

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = new EventHandlers();
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        for (var i = 0, key; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = new EventHandlers();
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        do {
          this.removeListener(type, listeners[listeners.length - 1]);
        } while (listeners[0]);
      }

      return this;
    };

EventEmitter.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events = this._events;

  if (!events)
    ret = [];
  else {
    evlistener = events[type];
    if (!evlistener)
      ret = [];
    else if (typeof evlistener === 'function')
      ret = [evlistener.listener || evlistener];
    else
      ret = unwrapListeners(evlistener);
  }

  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount$1.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount$1;
function listenerCount$1(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, i) {
  var copy = new Array(i);
  while (i--)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

var global$1 = (typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
  typeof window !== "undefined" ? window : {});

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup[tmp >> 10];
    output += lookup[(tmp >> 4) & 0x3F];
    output += lookup[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString$1 = {}.toString;

var isArray$2 = Array.isArray || function (arr) {
  return toString$1.call(arr) == '[object Array]';
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
  ? global$1.TYPED_ARRAY_SUPPORT
  : true;

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr
};

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray$2(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}
Buffer.isBuffer = isBuffer$1;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer.concat = function concat (list, length) {
  if (!isArray$2(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
};

Buffer.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>'
};

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4)
};

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4)
};

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8)
};

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer$1(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance$1 = global$1.performance || {};
var performanceNow =
  performance$1.now        ||
  performance$1.mozNow     ||
  performance$1.msNow      ||
  performance$1.oNow       ||
  performance$1.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance$1)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var browser$1 = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var inherits;
if (typeof Object.create === 'function'){
  inherits = function inherits(ctor, superCtor) {
    // implementation from standard node.js 'util' module
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  inherits = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}
var inherits$1 = inherits;

var formatRegExp = /%[sdj%]/g;
function format(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
}

// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
function deprecate(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global$1.process)) {
    return function() {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (browser$1.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (browser$1.throwDeprecation) {
        throw new Error(msg);
      } else if (browser$1.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

var debugs = {};
var debugEnviron;
function debuglog(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = browser$1.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = 0;
      debugs[set] = function() {
        var msg = format.apply(null, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
}

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    _extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray$1(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var length = output.reduce(function(prev, cur) {
    if (cur.indexOf('\n') >= 0) ;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray$1(ar) {
  return Array.isArray(ar);
}

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

function isNull(arg) {
  return arg === null;
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isString(arg) {
  return typeof arg === 'string';
}

function isUndefined(arg) {
  return arg === void 0;
}

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}

function isFunction(arg) {
  return typeof arg === 'function';
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function _extend(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList.prototype.push = function (v) {
  var entry = { data: v, next: null };
  if (this.length > 0) this.tail.next = entry;else this.head = entry;
  this.tail = entry;
  ++this.length;
};

BufferList.prototype.unshift = function (v) {
  var entry = { data: v, next: this.head };
  if (this.length === 0) this.tail = entry;
  this.head = entry;
  ++this.length;
};

BufferList.prototype.shift = function () {
  if (this.length === 0) return;
  var ret = this.head.data;
  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
  --this.length;
  return ret;
};

BufferList.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList.prototype.join = function (s) {
  if (this.length === 0) return '';
  var p = this.head;
  var ret = '' + p.data;
  while (p = p.next) {
    ret += s + p.data;
  }return ret;
};

BufferList.prototype.concat = function (n) {
  if (this.length === 0) return Buffer.alloc(0);
  if (this.length === 1) return this.head.data;
  var ret = Buffer.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;
  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }
  return ret;
};

// Copyright Joyent, Inc. and other Node contributors.
var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     };


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
function StringDecoder(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
}

// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

Readable.ReadableState = ReadableState;

var debug = debuglog('stream');
inherits$1(Readable, EventEmitter);

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
}
function listenerCount (emitter, type) {
  return emitter.listeners(type).length;
}
function ReadableState(options, stream) {

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}
function Readable(options) {

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  EventEmitter.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = Buffer.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false);

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (listenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && src.listeners('data').length) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var _i = 0; _i < len; _i++) {
      dests[_i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1) return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = EventEmitter.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

// A bit simpler than readable streams.
Writable.WritableState = WritableState;
inherits$1(Writable, EventEmitter);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

function WritableState(options, stream) {
  Object.defineProperty(this, 'buffer', {
    get: deprecate(function () {
      return this.getBuffer();
    }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
  });
  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function writableStateGetBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};
function Writable(options) {

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  EventEmitter.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  nextTick(cb, er);
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;
  // Always throw error if a null is written
  // if we are not in object mode then throw
  // if it is not a buffer, string, or undefined.
  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) nextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
        nextTick(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
        afterWrite(stream, state, finished, cb);
      }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}

inherits$1(Duplex, Readable);

var keys$1 = Object.keys(Writable.prototype);
for (var v = 0; v < keys$1.length; v++) {
  var method = keys$1[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}
function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

// a transform stream is a readable/writable stream where you do
inherits$1(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}
function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er) {
      done(stream, er);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('Not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

inherits$1(PassThrough, Transform);
function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

inherits$1(Stream, EventEmitter);
Stream.Readable = Readable;
Stream.Writable = Writable;
Stream.Duplex = Duplex;
Stream.Transform = Transform;
Stream.PassThrough = PassThrough;

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;

// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EventEmitter.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EventEmitter.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

// Following the example in https://nodejs.org/api/stream.html#stream_decoding_buffers_in_a_writable_stream
function isBuffer(_chunk, encoding) {
    return encoding === "buffer";
}
/**
 * WritableStream makes the `Parser` interface available as a NodeJS stream.
 *
 * @see Parser
 */
class WritableStream extends Writable {
    constructor(cbs, options) {
        super({ decodeStrings: false });
        this._decoder = new StringDecoder();
        this._parser = new Parser(cbs, options);
    }
    _write(chunk, encoding, cb) {
        this._parser.write(isBuffer(chunk, encoding) ? this._decoder.write(chunk) : chunk);
        cb();
    }
    _final(cb) {
        this._parser.end(this._decoder.end());
        cb();
    }
}

// Internal
const NODE_END = -1;

// Node
const ELEMENT_NODE = 1;
const ATTRIBUTE_NODE = 2;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;
const DOCUMENT_NODE = 9;
const DOCUMENT_TYPE_NODE = 10;
const DOCUMENT_FRAGMENT_NODE = 11;

// Elements
const BLOCK_ELEMENTS = new Set(['ARTICLE', 'ASIDE', 'BLOCKQUOTE', 'BODY', 'BR', 'BUTTON', 'CANVAS', 'CAPTION', 'COL', 'COLGROUP', 'DD', 'DIV', 'DL', 'DT', 'EMBED', 'FIELDSET', 'FIGCAPTION', 'FIGURE', 'FOOTER', 'FORM', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'UL', 'OL', 'P']);

// TreeWalker
const SHOW_ALL = -1;
const SHOW_ELEMENT = 1;
const SHOW_TEXT = 4;
const SHOW_COMMENT = 128;

// Document position
const DOCUMENT_POSITION_DISCONNECTED = 0x01;
const DOCUMENT_POSITION_PRECEDING = 0x02;
const DOCUMENT_POSITION_FOLLOWING = 0x04;
const DOCUMENT_POSITION_CONTAINS = 0x08;
const DOCUMENT_POSITION_CONTAINED_BY = 0x10;
const DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;

// SVG
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

const {
  assign,
  create: create$1,
  defineProperties,
  entries,
  getOwnPropertyDescriptors,
  keys,
  setPrototypeOf
} = Object;

const $String = String;

const getEnd = node => node.nodeType === ELEMENT_NODE ? node[END] : node;

const ignoreCase = ({ownerDocument}) => ownerDocument[MIME].ignoreCase;

const knownAdjacent = (prev, next) => {
  prev[NEXT] = next;
  next[PREV] = prev;
};

const knownBoundaries = (prev, current, next) => {
  knownAdjacent(prev, current);
  knownAdjacent(getEnd(current), next);
};

const knownSegment = (prev, start, end, next) => {
  knownAdjacent(prev, start);
  knownAdjacent(getEnd(end), next);
};

const knownSiblings = (prev, current, next) => {
  knownAdjacent(prev, current);
  knownAdjacent(current, next);
};

const localCase = ({localName, ownerDocument}) => {
  return ownerDocument[MIME].ignoreCase ? localName.toUpperCase() : localName;
};

const setAdjacent = (prev, next) => {
  if (prev)
    prev[NEXT] = next;
  if (next)
    next[PREV] = prev;
};

const shadowRoots = new WeakMap;

let reactive = false;

const Classes = new WeakMap;

const customElements = new WeakMap;

const attributeChangedCallback$1 = (element, attributeName, oldValue, newValue) => {
  if (
    reactive &&
    customElements.has(element) &&
    element.attributeChangedCallback &&
    element.constructor.observedAttributes.includes(attributeName)
  ) {
    element.attributeChangedCallback(attributeName, oldValue, newValue);
  }
};

const createTrigger = (method, isConnected) => element => {
  if (customElements.has(element)) {
    const info = customElements.get(element);
    if (info.connected !== isConnected && element.isConnected === isConnected) {
      info.connected = isConnected;
      if (method in element)
        element[method]();
    }
  }
};

const triggerConnected = createTrigger('connectedCallback', true);
const connectedCallback = element => {
  if (reactive) {
    triggerConnected(element);
    if (shadowRoots.has(element))
      element = shadowRoots.get(element).shadowRoot;
    let {[NEXT]: next, [END]: end} = element;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE)
        triggerConnected(next);
      next = next[NEXT];
    }
  }
};

const triggerDisconnected = createTrigger('disconnectedCallback', false);
const disconnectedCallback = element => {
  if (reactive) {
    triggerDisconnected(element);
    if (shadowRoots.has(element))
      element = shadowRoots.get(element).shadowRoot;
    let {[NEXT]: next, [END]: end} = element;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE)
        triggerDisconnected(next);
      next = next[NEXT];
    }
  }
};

/**
 * @implements globalThis.CustomElementRegistry
 */
class CustomElementRegistry {

  /**
   * @param {Document} ownerDocument
   */
  constructor(ownerDocument) {
    /**
     * @private
     */
    this.ownerDocument = ownerDocument;

    /**
     * @private
     */
    this.registry = new Map;

    /**
     * @private
     */
    this.waiting = new Map;

    /**
     * @private
     */
    this.active = false;
  }

  /**
   * @param {string} localName the custom element definition name
   * @param {Function} Class the custom element **Class** definition
   * @param {object?} options the optional object with an `extends` property
   */
  define(localName, Class, options = {}) {
    const {ownerDocument, registry, waiting} = this;

    if (registry.has(localName))
      throw new Error('unable to redefine ' + localName);

    if (Classes.has(Class))
      throw new Error('unable to redefine the same class: ' + Class);

    this.active = (reactive = true);

    const {extends: extend} = options;

    Classes.set(Class, {
      ownerDocument,
      options: {is: extend ? localName : ''},
      localName: extend || localName
    });

    const check = extend ?
      element => {
        return element.localName === extend &&
               element.getAttribute('is') === localName;
      } :
      element => element.localName === localName;
    registry.set(localName, {Class, check});
    if (waiting.has(localName)) {
      for (const resolve of waiting.get(localName))
        resolve(Class);
      waiting.delete(localName);
    }
    ownerDocument.querySelectorAll(
      extend ? `${extend}[is="${localName}"]` : localName
    ).forEach(this.upgrade, this);
  }

  /**
   * @param {Element} element
   */
  upgrade(element) {
    if (customElements.has(element))
      return;
    const {ownerDocument, registry} = this;
    const ce = element.getAttribute('is') || element.localName;
    if (registry.has(ce)) {
      const {Class, check} = registry.get(ce);
      if (check(element)) {
        const {attributes, isConnected} = element;
        for (const attr of attributes)
          element.removeAttributeNode(attr);

        const values = entries(element);
        for (const [key] of values)
          delete element[key];

        setPrototypeOf(element, Class.prototype);
        ownerDocument[UPGRADE] = {element, values};
        new Class(ownerDocument, ce);

        customElements.set(element, {connected: isConnected});

        for (const attr of attributes)
          element.setAttributeNode(attr);

        if (isConnected && element.connectedCallback)
          element.connectedCallback();
      }
    }
  }

  /**
   * @param {string} localName the custom element definition name
   */
  whenDefined(localName) {
    const {registry, waiting} = this;
    return new Promise(resolve => {
      if (registry.has(localName))
        resolve(registry.get(localName).Class);
      else {
        if (!waiting.has(localName))
          waiting.set(localName, []);
        waiting.get(localName).push(resolve);
      }
    });
  }

  /**
   * @param {string} localName the custom element definition name
   * @returns {Function?} the custom element **Class**, if any
   */
  get(localName) {
    const info = this.registry.get(localName);
    return info && info.Class;
  }
}

/**
 * @typedef {import('../interface/node').Node} Node
 * @typedef {import('../svg/element').SVGElement} SVGElement
 * @typedef {import('../html/document.js').HTMLDocument} HTMLDocument
 * @typedef {import('../svg/document').SVGDocument} SVGDocument
 * @typedef {import('../xml/document').XMLDocument} XMLDocument
 * @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc
 */

const append$2 = (self, node, active) => {
  const end = self[END];
  node.parentNode = self;
  knownBoundaries(end[PREV], node, end);
  if (active && node.nodeType === ELEMENT_NODE)
    connectedCallback(node);
  return node;
};

const attribute = (element, end, attribute, value, active) => {
  attribute[VALUE] = value;
  attribute.ownerElement = element;
  knownSiblings(end[PREV], attribute, end);
  if (attribute.name === 'class')
    element.className = value;
  if (active)
    attributeChangedCallback$1(element, attribute.name, null, value);
};

/**
 * @param {string} name
 * @param {string} data
 */
const onprocessinginstruction = (name, data) => {
  if (name.toLowerCase() === '!doctype')
    return data.slice(name.length).trim();
};

/**
 * @template {{
 *   document: MimeToDoc[keyof MimeToDoc]
 *   node: MimeToDoc[keyof MimeToDoc]|Node
 *   ownerSVGElement: SVGElement|undefined
 *   rootNode: Node|undefined
 * }} StackItem
 * @param {string} name
 * @param {Record<string, string>} attributes
 * @param {StackItem} item
 * @param {boolean} isHTML
 */
const onopentag = (name, attributes, item, isHTML) => {
  const { document } = item;
  const { active, registry } = document[CUSTOM_ELEMENTS];
  let create = true;
  if (isHTML) {
    if (item.ownerSVGElement) {
      item.node = append$2(item.node, document.createElementNS(SVG_NAMESPACE, name), active);
      item.node.ownerSVGElement = item.ownerSVGElement;
      create = false;
    } else if (name === 'svg' || name === 'SVG') {
      item.ownerSVGElement = document.createElementNS(SVG_NAMESPACE, name);
      item.node = append$2(item.node, item.ownerSVGElement, active);
      create = false;
    } else if (active) {
      const ce = name.includes('-') ? name : (attributes.is || '');
      if (ce && registry.has(ce)) {
        const {Class} = registry.get(ce);
        item.node = append$2(item.node, new Class, active);
        delete attributes.is;
        create = false;
      }
    }
  }
  if (create) item.node = append$2(item.node, document.createElement(name), false);
  let end = item.node[END];
  for (const name of keys(attributes)) {
    attribute(item.node, end, document.createAttribute(name), attributes[name], active);
  }
  if (!item.rootNode) item.rootNode = item.node;
};

/**
 * @template {{
 *   document: MimeToDoc[keyof MimeToDoc]
 *   node: MimeToDoc[keyof MimeToDoc]|Node
 *   ownerSVGElement: SVGElement|undefined
 *   rootNode: Node|undefined
 * }} StackItem
 * @param {string} data 
 * @param {StackItem} item
 */
const oncomment = (data, item) => {
  const { document, node } = item;
  const { active } = document[CUSTOM_ELEMENTS];
  append$2(node, document.createComment(data), active);
};

/**
 * @template {{
 *   document: MimeToDoc[keyof MimeToDoc]
 *   node: MimeToDoc[keyof MimeToDoc]|Node
 *   ownerSVGElement: SVGElement|undefined
 *   rootNode: Node|undefined
 * }} StackItem
 * @param {string} data 
 * @param {StackItem} item
 */
const ontext = (text, item) => {
  const { document, node } = item;
  const { active } = document[CUSTOM_ELEMENTS];
  append$2(node, document.createTextNode(text), active);
};

/**
 * @template {{
 *   document: MimeToDoc[keyof MimeToDoc]
 *   node: MimeToDoc[keyof MimeToDoc]|Node
 *   ownerSVGElement: SVGElement|undefined
 *   rootNode: Node|undefined
 * }} StackItem
 * @param {StackItem} item
 * @param {boolean} isHTML
 * @param {((document: MimeToDoc[keyof MimeToDoc]) => void)|undefined} cb
 */
const onclosetag = (item, isHTML, cb) => {
  const { document } = item;
  if (isHTML && item.node === item.ownerSVGElement) {
    item.ownerSVGElement = undefined;
  }
  if (item.node === item.rootNode) {
    cb && cb(document);
  }
  item.node = item.node.parentNode;
};

/**
 * @template {HTMLDocument|SVGDocument|XMLDocument} DOC
 * @template {string|NodeJS.ReadableStream} INPUT
 * @param {DOC} document 
 * @param {Boolean} isHTML 
 * @param {INPUT} markupLanguage 
 * @returns {INPUT extends string ? DOC : Promise<INPUT>}
 */
const parseFromString = (document, isHTML, markupLanguage) => {
  /**
   * @type {{
   *   document: DOC
   *   node: DOC|Node
   *   ownerSVGElement: SVGElement|undefined
   *   rootNode: Node|undefined
   * }}
   */
  const item = { document, node: document };

  const content = new WritableStream({
    // <!DOCTYPE ...>
    onprocessinginstruction(name, data) {
      document.doctype = onprocessinginstruction(name, data);
    },
    // <tagName>
    onopentag(name, attributes) {
      onopentag(name, attributes, item, isHTML);
    },
    // #text, #comment
    oncomment(data) {
      oncomment(data, item);
    },
    ontext(text) { 
      ontext(text, item);
    },
    // </tagName>
    onclosetag() {
     onclosetag(item, isHTML);
    }
  }, {
    lowerCaseAttributeNames: false,
    decodeEntities: true,
    xmlMode: !isHTML
  });

  if (typeof markupLanguage === 'string') {
    content.write(markupLanguage);
    content.end();
    return item.document;
  } else {
    return new Promise((resolve, reject) => {
      markupLanguage.pipe(content);
      markupLanguage.once('end', () => {
        resolve(item.document);
      });
      const errorCb = err => {
        content.end();
        reject(err);
      };
      markupLanguage.once('error', errorCb);
      content.once('error', errorCb);
    });
  }
};

const htmlClasses = new Map;

const registerHTMLClass = (names, Class) => {
  for (const name of [].concat(names)) {
    htmlClasses.set(name, Class);
    htmlClasses.set(name.toUpperCase(), Class);
  }
};

const performance = globalThis.performance;

const loopSegment = ({[NEXT]: next, [END]: end}, json) => {
  while (next !== end) {
    switch (next.nodeType) {
      case ATTRIBUTE_NODE:
        attrAsJSON(next, json);
        break;
      case TEXT_NODE:
      case COMMENT_NODE:
        characterDataAsJSON(next, json);
        break;
      case ELEMENT_NODE:
        elementAsJSON(next, json);
        next = getEnd(next);
        break;
      case DOCUMENT_TYPE_NODE:
        documentTypeAsJSON(next, json);
        break;
    }
    next = next[NEXT];
  }
  const last = json.length - 1;
  const value = json[last];
  if (typeof value === 'number' && value < 0)
    json[last] += NODE_END;
  else
    json.push(NODE_END);
};

const attrAsJSON = (attr, json) => {
  json.push(ATTRIBUTE_NODE, attr.name);
  const value = attr[VALUE].trim();
  if (value)
    json.push(value);
};

const characterDataAsJSON = (node, json) => {
  const value = node[VALUE];
  if (value.trim())
    json.push(node.nodeType, value);
};

const nonElementAsJSON = (node, json) => {
  json.push(node.nodeType);
  loopSegment(node, json);
};

const documentTypeAsJSON = ({name, publicId, systemId}, json) => {
  json.push(DOCUMENT_TYPE_NODE, name);
  if (publicId)
    json.push(publicId);
  if (systemId)
    json.push(systemId);
};

const elementAsJSON = (element, json) => {
  json.push(ELEMENT_NODE, element.localName);
  loopSegment(element, json);
};

const createRecord =
  (type, target, addedNodes, removedNodes, attributeName, oldValue) =>
 ({type, target, addedNodes, removedNodes, attributeName, oldValue});

const queueAttribute = (
  observer, target, attributeName, attributeFilter, attributeOldValue, oldValue
) => {
  if ((!attributeFilter || attributeFilter.includes(attributeName))) {
    const {callback, records, scheduled} = observer;
    records.push(createRecord(
      'attributes', target,
      [], [],
      attributeName, attributeOldValue ? oldValue : void 0
    ));
    if (!scheduled) {
      observer.scheduled = true;
      Promise.resolve().then(() => {
        observer.scheduled = false;
        callback(records.splice(0), observer);
      });
    }
  }
};

const attributeChangedCallback = (element, attributeName, oldValue) => {
  const {ownerDocument} = element;
  const {active, observers} = ownerDocument[MUTATION_OBSERVER];
  if (active) {
    for (const observer of observers) {
      for (const [
        target,
        {
          childList,
          subtree,
          attributes,
          attributeFilter,
          attributeOldValue
        }
      ] of observer.nodes) {
        if (childList) {
          if (
            (subtree && (target === ownerDocument || target.contains(element))) ||
            (!subtree && target.children.includes(element))
          ) {
            queueAttribute(
              observer, element,
              attributeName, attributeFilter, attributeOldValue, oldValue
            );
            break;
          }
        }
        else if (
          attributes &&
          target === element
        ) {
          queueAttribute(
            observer, element,
            attributeName, attributeFilter, attributeOldValue, oldValue
          );
          break;
        }
      }
    }
  }
};

const moCallback = (element, parentNode) => {
  const {ownerDocument} = element;
  const {active, observers} = ownerDocument[MUTATION_OBSERVER];
  if (active) {
    for (const observer of observers) {
      for (const [target, {subtree, childList, characterData}] of observer.nodes) {
        if (childList) {
          if (
            (parentNode && (target === parentNode || (subtree && target.contains(parentNode)))) ||
            (!parentNode && ((subtree && (target === ownerDocument || target.contains(element))) ||
                            (!subtree && target[characterData ? 'childNodes' : 'children'].includes(element))))
          ) {
            const {callback, records, scheduled} = observer;
            records.push(createRecord(
              'childList', target,
              parentNode ? [] : [element], parentNode ? [element] : []
            ));
            if (!scheduled) {
              observer.scheduled = true;
              Promise.resolve().then(() => {
                observer.scheduled = false;
                callback(records.splice(0), observer);
              });
            }
            break;
          }
        }
      }
    }
  }
};

class MutationObserverClass {
  constructor(ownerDocument) {
    const observers = new Set;
    this.observers = observers;
    this.active = false;

    /**
     * @implements globalThis.MutationObserver
     */
    this.class = class MutationObserver {

      constructor(callback) {
        /**
         * @private
         */
        this.callback = callback;

        /**
         * @private
         */
        this.nodes = new Map;

        /**
         * @private
         */
        this.records = [];

        /**
         * @private
         */
        this.scheduled = false;
      }

      disconnect() {
        this.records.splice(0);
        this.nodes.clear();
        observers.delete(this);
        ownerDocument[MUTATION_OBSERVER].active = !!observers.size;
      }

      /**
       * @param {Element} target
       * @param {MutationObserverInit} options
       */
      observe(target, options = {
        subtree: false,
        childList: false,
        attributes: false,
        attributeFilter: null,
        attributeOldValue: false,
        characterData: false,
        // TODO: not implemented yet
        // characterDataOldValue: false
      }) {
        if (('attributeOldValue' in options) || ('attributeFilter' in options))
          options.attributes = true;
        // if ('characterDataOldValue' in options)
        //   options.characterData = true;
        options.childList = !!options.childList;
        options.subtree = !!options.subtree;
        this.nodes.set(target, options);
        observers.add(this);
        ownerDocument[MUTATION_OBSERVER].active = true;
      }

      /**
       * @returns {MutationRecord[]}
       */
      takeRecords() { return this.records.splice(0); }
    };
  }
}

const emptyAttributes = new Set([
  'allowfullscreen',
  'allowpaymentrequest',
  'async',
  'autofocus',
  'autoplay',
  'checked',
  'class',
  'contenteditable',
  'controls',
  'default',
  'defer',
  'disabled',
  'draggable',
  'formnovalidate',
  'hidden',
  'id',
  'ismap',
  'itemscope',
  'loop',
  'multiple',
  'muted',
  'nomodule',
  'novalidate',
  'open',
  'playsinline',
  'readonly',
  'required',
  'reversed',
  'selected',
  'style',
  'truespeed'
]);

const setAttribute = (element, attribute) => {
  const {[VALUE]: value, name} = attribute;
  attribute.ownerElement = element;
  knownSiblings(element, attribute, element[NEXT]);
  if (name === 'class')
    element.className = value;
  attributeChangedCallback(element, name, null);
  attributeChangedCallback$1(element, name, null, value);
};

const removeAttribute = (element, attribute) => {
  const {[VALUE]: value, name} = attribute;
  knownAdjacent(attribute[PREV], attribute[NEXT]);
  attribute.ownerElement = attribute[PREV] = attribute[NEXT] = null;
  if (name === 'class')
    element[CLASS_LIST] = null;
  attributeChangedCallback(element, name, value);
  attributeChangedCallback$1(element, name, value, null);
};

const booleanAttribute = {
  get(element, name) {
    return element.hasAttribute(name);
  },
  set(element, name, value) {
    if (value)
      element.setAttribute(name, '');
    else
      element.removeAttribute(name);
  }
};

const numericAttribute = {
  get(element, name) {
    return parseFloat(element.getAttribute(name) || 0);
  },
  set(element, name, value) {
    element.setAttribute(name, value);
  }
};

const stringAttribute = {
  get(element, name) {
    return element.getAttribute(name) || '';
  },
  set(element, name, value) {
    element.setAttribute(name, value);
  }
};

/* oddly enough, this apparently is not a thing
export const nullableAttribute = {
  get(element, name) {
    return element.getAttribute(name);
  },
  set(element, name, value) {
    if (value === null)
      element.removeAttribute(name);
    else
      element.setAttribute(name, value);
  }
};
*/

// https://dom.spec.whatwg.org/#interface-eventtarget

const wm = new WeakMap();

function dispatch(event, listener) {
  if (typeof listener === 'function')
    listener.call(event.target, event);
  else
    listener.handleEvent(event);
  return event._stopImmediatePropagationFlag;
}

function invokeListeners({currentTarget, target}) {
  const map = wm.get(currentTarget);
  if (map && map.has(this.type)) {
    const listeners = map.get(this.type);
    if (currentTarget === target) {
      this.eventPhase = this.AT_TARGET;
    } else {
      this.eventPhase = this.BUBBLING_PHASE;
    }

    this.currentTarget = currentTarget;
    this.target = target;
    for (const [listener, options] of listeners) {
      if (options && options.once)
        listeners.delete(listener);
      if (dispatch(this, listener))
        break;
    }
    delete this.currentTarget;
    delete this.target;
    return this.cancelBubble;
  }
}


/**
 * @implements globalThis.EventTarget
 */
class DOMEventTarget {

  constructor() {
    wm.set(this, new Map);
  }

  /**
   * @protected
   */
  _getParent() {
    return null;
  }

  addEventListener(type, listener, options) {
    const map = wm.get(this);
    if (!map.has(type)) 
      map.set(type, new Map);
    map.get(type).set(listener, options);
  }

  removeEventListener(type, listener) {
    const map = wm.get(this);
    if (map.has(type)) {
      const listeners = map.get(type);
      if (listeners.delete(listener) && !listeners.size)
        map.delete(type);
    }
  }

  dispatchEvent(event) {
    let node = this;
    event.eventPhase = event.CAPTURING_PHASE;

    // intentionally simplified, specs imply way more code: https://dom.spec.whatwg.org/#event-path
    while (node) {
      if (node.dispatchEvent)
        event._path.push({currentTarget: node, target: this});
      node = event.bubbles && node._getParent && node._getParent();
    }
    event._path.some(invokeListeners, event);
    event._path = [];
    event.eventPhase = event.NONE;
    return !event.defaultPrevented;
  }

}

// https://dom.spec.whatwg.org/#interface-nodelist

/**
 * @implements globalThis.NodeList
 */
class NodeList extends Array {
  item(i) { return i < this.length ? this[i] : null; }
}

// https://dom.spec.whatwg.org/#node

const getParentNodeCount = ({parentNode}) => {
  let count = 0;
  while (parentNode) {
    count++;
    parentNode = parentNode.parentNode;
  }
  return count;
};

/**
 * @implements globalThis.Node
 */
class Node$1 extends DOMEventTarget {

  static get ELEMENT_NODE() { return ELEMENT_NODE; }
  static get ATTRIBUTE_NODE() { return ATTRIBUTE_NODE; }
  static get TEXT_NODE() { return TEXT_NODE; }
  static get COMMENT_NODE() { return COMMENT_NODE; }
  static get DOCUMENT_NODE() { return DOCUMENT_NODE; }
  static get DOCUMENT_FRAGMENT_NODE() { return DOCUMENT_FRAGMENT_NODE; }
  static get DOCUMENT_TYPE_NODE() { return DOCUMENT_TYPE_NODE; }

  constructor(ownerDocument, localName, nodeType) {
    super();
    this.ownerDocument = ownerDocument;
    this.localName = localName;
    this.nodeType = nodeType;
    this.parentNode = null;
    this[NEXT] = null;
    this[PREV] = null;
  }

  get ELEMENT_NODE() { return ELEMENT_NODE; }
  get ATTRIBUTE_NODE() { return ATTRIBUTE_NODE; }
  get TEXT_NODE() { return TEXT_NODE; }
  get COMMENT_NODE() { return COMMENT_NODE; }
  get DOCUMENT_NODE() { return DOCUMENT_NODE; }
  get DOCUMENT_FRAGMENT_NODE() { return DOCUMENT_FRAGMENT_NODE; }
  get DOCUMENT_TYPE_NODE() { return DOCUMENT_TYPE_NODE; }

  get baseURI() {
    const ownerDocument = this.nodeType === DOCUMENT_NODE ?
                            this : this.ownerDocument;
    if (ownerDocument) {
      const base = ownerDocument.querySelector('base');
      if (base)
        return base.getAttribute('href');

      const {location} = ownerDocument.defaultView;
      if (location)
        return location.href;
    }

    return null;
  }

  /* c8 ignore start */
  // mixin: node
  get isConnected() { return false; }
  get nodeName() { return this.localName; }
  get parentElement() { return null; }
  get previousSibling() { return null; }
  get previousElementSibling() { return null; }
  get nextSibling() { return null; }
  get nextElementSibling() { return null; }
  get childNodes() { return new NodeList; }
  get firstChild() { return null; }
  get lastChild() { return null; }

  // default values
  get nodeValue() { return null; }
  set nodeValue(value) {}
  get textContent() { return null; }
  set textContent(value) {}
  normalize() {}
  cloneNode() { return null; }
  contains() { return false; }
  /**
   * Inserts a node before a reference node as a child of this parent node.
   * @param {Node} newNode The node to be inserted.
   * @param {Node} referenceNode The node before which newNode is inserted. If this is null, then newNode is inserted at the end of node's child nodes.
   * @returns The added child
   */
  // eslint-disable-next-line no-unused-vars
  insertBefore(newNode, referenceNode) { return newNode }
  /**
   * Adds a node to the end of the list of children of this node.
   * @param {Node} child The node to append to the given parent node.
   * @returns The appended child.
   */
  appendChild(child) { return child }
  /**
   * Replaces a child node within this node
   * @param {Node} newChild The new node to replace oldChild.
   * @param {Node} oldChild The child to be replaced.
   * @returns The replaced Node. This is the same node as oldChild.
   */
  replaceChild(newChild, oldChild) { return oldChild }
  /**
   * Removes a child node from the DOM.
   * @param {Node} child A Node that is the child node to be removed from the DOM.
   * @returns The removed node.
   */
  removeChild(child) { return child }
  toString() { return ''; }
  /* c8 ignore stop */

  hasChildNodes() { return !!this.lastChild; }
  isSameNode(node) { return this === node; }

  // TODO: attributes?
  compareDocumentPosition(target) {
    let result = 0;
    if (this !== target) {
      let self = getParentNodeCount(this);
      let other = getParentNodeCount(target);
      if (self < other) {
        result += DOCUMENT_POSITION_FOLLOWING;
        if (this.contains(target))
          result += DOCUMENT_POSITION_CONTAINED_BY;
      }
      else if (other < self) {
        result += DOCUMENT_POSITION_PRECEDING;
        if (target.contains(this))
          result += DOCUMENT_POSITION_CONTAINS;
      }
      else if (self && other) {
        const {childNodes} = this.parentNode;
        if (childNodes.indexOf(this) < childNodes.indexOf(target))
          result += DOCUMENT_POSITION_FOLLOWING;
        else
          result += DOCUMENT_POSITION_PRECEDING;
      }
      if (!self || !other) {
        result += DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
        result += DOCUMENT_POSITION_DISCONNECTED;
      }
    }
    return result;
  }

  isEqualNode(node) {
    if (this === node)
      return true;
    if (this.nodeType === node.nodeType) {
      switch (this.nodeType) {
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE: {
          const aNodes = this.childNodes;
          const bNodes = node.childNodes;
          return aNodes.length === bNodes.length && aNodes.every((node, i) => node.isEqualNode(bNodes[i]));
        }
      }
      return this.toString() === node.toString();
    }
    return false;
  }

  /**
   * @protected
   */
  _getParent() {
    return this.parentNode;
  }

  getRootNode() {
    let root = this;
    while (root.parentNode)
      root = root.parentNode;
    return root.nodeType === DOCUMENT_NODE ? root.documentElement : root;
  }
}

const QUOTE = /"/g;

/**
 * @implements globalThis.Attr
 */
class Attr$1 extends Node$1 {
  constructor(ownerDocument, name, value = '') {
    super(ownerDocument, '#attribute', ATTRIBUTE_NODE);
    this.ownerElement = null;
    this.name = $String(name);
    this[VALUE] = $String(value);
    this[CHANGED] = false;
  }

  get value() { return this[VALUE]; }
  set value(newValue) {
    const {[VALUE]: oldValue, name, ownerElement} = this;
    this[VALUE] = $String(newValue);
    this[CHANGED] = true;
    if (ownerElement) {
      attributeChangedCallback(ownerElement, name, oldValue);
      attributeChangedCallback$1(ownerElement, name, oldValue, this[VALUE]);
    }
  }

  cloneNode() {
    const {ownerDocument, name, [VALUE]: value} = this;
    return new Attr$1(ownerDocument, name, value);
  }

  toString() {
    const {name, [VALUE]: value} = this;
    return emptyAttributes.has(name) && !value ?
            name : `${name}="${value.replace(QUOTE, '&quot;')}"`;
  }

  toJSON() {
    const json = [];
    attrAsJSON(this, json);
    return json;
  }
}

const isConnected = ({ownerDocument, parentNode}) => {
  while (parentNode) {
    if (parentNode === ownerDocument)
      return true;
    parentNode = parentNode.parentNode || parentNode.host;
  }
  return false;
};

const parentElement = ({parentNode}) => {
  if (parentNode) {
    switch (parentNode.nodeType) {
      case DOCUMENT_NODE:
      case DOCUMENT_FRAGMENT_NODE:
        return null;
    }
  }
  return parentNode;
};

const previousSibling = ({[PREV]: prev}) => {
  switch (prev ? prev.nodeType : 0) {
    case NODE_END:
      return prev[START];
    case TEXT_NODE:
    case COMMENT_NODE:
      return prev;
  }
  return null;
};

const nextSibling = node => {
  const next = getEnd(node)[NEXT];
  return next && (next.nodeType === NODE_END ? null : next);
};

// https://dom.spec.whatwg.org/#nondocumenttypechildnode

const nextElementSibling$1 = node => {
  let next = nextSibling(node);
  while (next && next.nodeType !== ELEMENT_NODE)
    next = nextSibling(next);
  return next;
};

const previousElementSibling = node => {
  let prev = previousSibling(node);
  while (prev && prev.nodeType !== ELEMENT_NODE)
    prev = previousSibling(prev);
  return prev;
};

// https://dom.spec.whatwg.org/#childnode

const asFragment = (ownerDocument, nodes) => {
  const fragment = ownerDocument.createDocumentFragment();
  fragment.append(...nodes);
  return fragment;
};

const before = (node, nodes) => {
  const {ownerDocument, parentNode} = node;
  if (parentNode)
    parentNode.insertBefore(
      asFragment(ownerDocument, nodes),
      node
    );
};

const after = (node, nodes) => {
  const {ownerDocument, parentNode} = node;
  if (parentNode)
    parentNode.insertBefore(
      asFragment(ownerDocument, nodes),
      getEnd(node)[NEXT]
    );
};

const replaceWith = (node, nodes) => {
  const {ownerDocument, parentNode} = node;
  if (parentNode) {
    parentNode.insertBefore(
      asFragment(ownerDocument, nodes),
      node
    );
    node.remove();
  }
};

const remove = (prev, current, next) => {
  const {parentNode, nodeType} = current;
  if (prev || next) {
    setAdjacent(prev, next);
    current[PREV] = null;
    getEnd(current)[NEXT] = null;
  }
  if (parentNode) {
    current.parentNode = null;
    moCallback(current, parentNode);
    if (nodeType === ELEMENT_NODE)
      disconnectedCallback(current);
  }
};

// https://dom.spec.whatwg.org/#interface-characterdata

/**
 * @implements globalThis.CharacterData
 */
class CharacterData$1 extends Node$1 {

  constructor(ownerDocument, localName, nodeType, data) {
    super(ownerDocument, localName, nodeType);
    this[VALUE] = $String(data);
  }

  // <Mixins>
  get isConnected() { return isConnected(this); }
  get parentElement() { return parentElement(this); }
  get previousSibling() { return previousSibling(this); }
  get nextSibling() { return nextSibling(this); }

  get previousElementSibling() { return previousElementSibling(this); }
  get nextElementSibling() { return nextElementSibling$1(this); }

  before(...nodes) { before(this, nodes); }
  after(...nodes) { after(this, nodes); }
  replaceWith(...nodes) { replaceWith(this, nodes); }
  remove() { remove(this[PREV], this, this[NEXT]); }
  // </Mixins>

  // CharacterData only
  /* c8 ignore start */
  get data() { return this[VALUE]; }
  set data(value) {
    this[VALUE] = $String(value);
    moCallback(this, this.parentNode);
  }

  get nodeValue() { return this.data; }
  set nodeValue(value) { this.data = value; }

  get textContent() { return this.data; }
  set textContent(value) { this.data = value; }

  get length() { return this.data.length; }

  substringData(offset, count) {
    return this.data.substr(offset, count);
  }

  appendData(data) {
    this.data += data;
  }

  insertData(offset, data) {
    const {data: t} = this;
    this.data = t.slice(0, offset) + data + t.slice(offset);
  }

  deleteData(offset, count) {
    const {data: t} = this;
    this.data = t.slice(0, offset) + t.slice(offset + count);
  }

  replaceData(offset, count, data) {
    const {data: t} = this;
    this.data = t.slice(0, offset) + data + t.slice(offset + count);
  }
  /* c8 ignore stop */

  toJSON() {
    const json = [];
    characterDataAsJSON(this, json);
    return json;
  }
}

/**
 * @implements globalThis.Comment
 */
class Comment$2 extends CharacterData$1 {
  constructor(ownerDocument, data = '') {
    super(ownerDocument, '#comment', COMMENT_NODE, data);
  }

  cloneNode() {
    const {ownerDocument, [VALUE]: data} = this;
    return new Comment$2(ownerDocument, data);
  }

  toString() { return `<!--${this[VALUE]}-->`; }
}

/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag$2(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
// Exports for backwards compatibility
/** Type for the root element of a document */
const Root = ElementType.Root;
/** Type for Text */
const Text$2 = ElementType.Text;
/** Type for <? ... ?> */
const Directive = ElementType.Directive;
/** Type for <!-- ... --> */
const Comment$1 = ElementType.Comment;
/** Type for <script> tags */
const Script = ElementType.Script;
/** Type for <style> tags */
const Style = ElementType.Style;
/** Type for Any tag */
const Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
const CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
const Doctype = ElementType.Doctype;

/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag$1(node) {
    return isTag$2(node);
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === ElementType.CDATA;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === ElementType.Text;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === ElementType.Comment;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === ElementType.Root;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}

const xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
const xmlCodeMap = new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"],
]);
// For compatibility with node < 4, we wrap `codePointAt`
const getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? (str, index) => str.codePointAt(index)
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        (c, index) => (c.charCodeAt(index) & 0xfc00) === 0xd800
            ? (c.charCodeAt(index) - 0xd800) * 0x400 +
                c.charCodeAt(index + 1) -
                0xdc00 +
                0x10000
            : c.charCodeAt(index);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
function encodeXML(str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while ((match = xmlReplacer.exec(str)) !== null) {
        const i = match.index;
        const char = str.charCodeAt(i);
        const next = xmlCodeMap.get(char);
        if (next !== undefined) {
            ret += str.substring(lastIdx, i) + next;
            lastIdx = i + 1;
        }
        else {
            ret += `${str.substring(lastIdx, i)}&#x${getCodePoint(str, i).toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIdx = xmlReplacer.lastIndex += Number((char & 0xfc00) === 0xd800);
        }
    }
    return ret + str.substr(lastIdx);
}
function getEscaper(regex, map) {
    return function escape(data) {
        let match;
        let lastIdx = 0;
        let result = "";
        while ((match = regex.exec(data))) {
            if (lastIdx !== match.index) {
                result += data.substring(lastIdx, match.index);
            }
            // We know that this chararcter will be in the map.
            result += map.get(match[0].charCodeAt(0));
            // Every match will be of length 1
            lastIdx = match.index + 1;
        }
        return result + data.substring(lastIdx);
    };
}
/**
 * Encodes all characters that have to be escaped in HTML attributes,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
const escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"],
]));
/**
 * Encodes all characters that have to be escaped in HTML text,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
const escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"],
]));

/** The level of entities to support. */
var EntityLevel;
(function (EntityLevel) {
    /** Support only XML entities. */
    EntityLevel[EntityLevel["XML"] = 0] = "XML";
    /** Support HTML entities, which are a superset of XML entities. */
    EntityLevel[EntityLevel["HTML"] = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
/** Determines whether some entities are allowed to be written without a trailing `;`. */
var DecodingMode;
(function (DecodingMode) {
    /** Support legacy HTML entities. */
    DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
    /** Do not support legacy HTML entities. */
    DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
})(DecodingMode || (DecodingMode = {}));
var EncodingMode;
(function (EncodingMode) {
    /**
     * The output is UTF-8 encoded. Only characters that need escaping within
     * XML will be escaped.
     */
    EncodingMode[EncodingMode["UTF8"] = 0] = "UTF8";
    /**
     * The output consists only of ASCII characters. Characters that need
     * escaping within HTML, and characters that aren't ASCII characters will
     * be escaped.
     */
    EncodingMode[EncodingMode["ASCII"] = 1] = "ASCII";
    /**
     * Encode all characters that have an equivalent entity, as well as all
     * characters that are not ASCII characters.
     */
    EncodingMode[EncodingMode["Extensive"] = 2] = "Extensive";
    /**
     * Encode all characters that have to be escaped in HTML attributes,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */
    EncodingMode[EncodingMode["Attribute"] = 3] = "Attribute";
    /**
     * Encode all characters that have to be escaped in HTML text,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */
    EncodingMode[EncodingMode["Text"] = 4] = "Text";
})(EncodingMode || (EncodingMode = {}));

const elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath",
].map((val) => [val.toLowerCase(), val]));
const attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan",
].map((val) => [val.toLowerCase(), val]));

/*
 * Module dependencies
 */
const unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript",
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */
function formatAttributes(attributes, opts) {
    var _a;
    if (!attributes)
        return;
    const encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false
        ? replaceQuotes
        : opts.xmlMode || opts.encodeEntities !== "utf8"
            ? encodeXML
            : escapeAttribute;
    return Object.keys(attributes)
        .map((key) => {
        var _a, _b;
        const value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */
            key = (_b = attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return `${key}="${encode(value)}"`;
    })
        .join(" ");
}
/**
 * Self-enclosing tags
 */
const singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */
function render(node, options = {}) {
    const nodes = "length" in node ? node : [node];
    let output = "";
    for (let i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
    }
    return output;
}
function renderNode(node, options) {
    switch (node.type) {
        case Root:
            return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case Doctype:
        case Directive:
            return renderDirective(node);
        case Comment$1:
            return renderComment(node);
        case CDATA:
            return renderCdata(node);
        case Script:
        case Style:
        case Tag:
            return renderTag(node, options);
        case Text$2:
            return renderText(node, options);
    }
}
const foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title",
]);
const foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */
        elem.name = (_a = elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */
        if (elem.parent &&
            foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = { ...opts, xmlMode: false };
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = { ...opts, xmlMode: "foreign" };
    }
    let tag = `<${elem.name}`;
    const attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += ` ${attribs}`;
    }
    if (elem.children.length === 0 &&
        (opts.xmlMode
            ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
                opts.selfClosingTags !== false
            : // User explicitly asked for self-closing tags, even in HTML mode
                opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
            tag += " ";
        tag += "/>";
    }
    else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += `</${elem.name}>`;
        }
    }
    return tag;
}
function renderDirective(elem) {
    return `<${elem.data}>`;
}
function renderText(elem, opts) {
    var _a;
    let data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false &&
        !(!opts.xmlMode &&
            elem.parent &&
            unencodedElements.has(elem.parent.name))) {
        data =
            opts.xmlMode || opts.encodeEntities !== "utf8"
                ? encodeXML(data)
                : escapeText(data);
    }
    return data;
}
function renderCdata(elem) {
    return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
    return `<!--${elem.data}-->`;
}

/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @returns `node`'s outer HTML.
 */
function getOuterHTML(node, options) {
    return render(node, options);
}
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @returns `node`'s inner HTML.
 */
function getInnerHTML(node, options) {
    return hasChildren(node)
        ? node.children.map((node) => getOuterHTML(node, options)).join("")
        : "";
}
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags.
 *
 * @category Stringify
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */
function getText$1(node) {
    if (Array.isArray(node))
        return node.map(getText$1).join("");
    if (isTag$1(node))
        return node.name === "br" ? "\n" : getText$1(node.children);
    if (isCDATA(node))
        return getText$1(node.children);
    if (isText(node))
        return node.data;
    return "";
}
/**
 * Get a node's text content.
 *
 * @category Stringify
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */
function textContent(node) {
    if (Array.isArray(node))
        return node.map(textContent).join("");
    if (hasChildren(node) && !isComment(node)) {
        return textContent(node.children);
    }
    if (isText(node))
        return node.data;
    return "";
}
/**
 * Get a node's inner text.
 *
 * @category Stringify
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */
function innerText(node) {
    if (Array.isArray(node))
        return node.map(innerText).join("");
    if (hasChildren(node) && (node.type === ElementType.Tag || isCDATA(node))) {
        return innerText(node.children);
    }
    if (isText(node))
        return node.data;
    return "";
}

/**
 * Get a node's children.
 *
 * @category Traversal
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */
function getChildren$1(elem) {
    return hasChildren(elem) ? elem.children : [];
}
/**
 * Get a node's parent.
 *
 * @category Traversal
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node.
 */
function getParent$1(elem) {
    return elem.parent || null;
}
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first. If we don't
 * have a parent (the element is a root node), we walk the element's `prev` &
 * `next` to get all remaining nodes.
 *
 * @category Traversal
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings.
 */
function getSiblings$1(elem) {
    const parent = getParent$1(elem);
    if (parent != null)
        return getChildren$1(parent);
    const siblings = [elem];
    let { prev, next } = elem;
    while (prev != null) {
        siblings.unshift(prev);
        ({ prev } = prev);
    }
    while (next != null) {
        siblings.push(next);
        ({ next } = next);
    }
    return siblings;
}
/**
 * Gets an attribute from an element.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */
function getAttributeValue$1(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
/**
 * Checks whether an element has an attribute.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */
function hasAttrib$1(elem, name) {
    return (elem.attribs != null &&
        Object.prototype.hasOwnProperty.call(elem.attribs, name) &&
        elem.attribs[name] != null);
}
/**
 * Get the tag name of an element.
 *
 * @category Traversal
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */
function getName$1(elem) {
    return elem.name;
}
/**
 * Returns the next element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag.
 */
function nextElementSibling(elem) {
    let { next } = elem;
    while (next !== null && !isTag$1(next))
        ({ next } = next);
    return next;
}
/**
 * Returns the previous element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag.
 */
function prevElementSibling(elem) {
    let { prev } = elem;
    while (prev !== null && !isTag$1(prev))
        ({ prev } = prev);
    return prev;
}

/**
 * Remove an element from the dom
 *
 * @category Manipulation
 * @param elem The element to be removed
 */
function removeElement(elem) {
    if (elem.prev)
        elem.prev.next = elem.next;
    if (elem.next)
        elem.next.prev = elem.prev;
    if (elem.parent) {
        const childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
    }
}
/**
 * Replace an element in the dom
 *
 * @category Manipulation
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */
function replaceElement(elem, replacement) {
    const prev = (replacement.prev = elem.prev);
    if (prev) {
        prev.next = replacement;
    }
    const next = (replacement.next = elem.next);
    if (next) {
        next.prev = replacement;
    }
    const parent = (replacement.parent = elem.parent);
    if (parent) {
        const childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
    }
}
/**
 * Append a child to an element.
 *
 * @category Manipulation
 * @param elem The element to append to.
 * @param child The element to be added as a child.
 */
function appendChild(elem, child) {
    removeElement(child);
    child.next = null;
    child.parent = elem;
    if (elem.children.push(child) > 1) {
        const sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    }
    else {
        child.prev = null;
    }
}
/**
 * Append an element after another.
 *
 * @category Manipulation
 * @param elem The element to append after.
 * @param next The element be added.
 */
function append$1(elem, next) {
    removeElement(next);
    const { parent } = elem;
    const currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            const childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    }
    else if (parent) {
        parent.children.push(next);
    }
}
/**
 * Prepend a child to an element.
 *
 * @category Manipulation
 * @param elem The element to prepend before.
 * @param child The element to be added as a child.
 */
function prependChild(elem, child) {
    removeElement(child);
    child.parent = elem;
    child.prev = null;
    if (elem.children.unshift(child) !== 1) {
        const sibling = elem.children[1];
        sibling.prev = child;
        child.next = sibling;
    }
    else {
        child.next = null;
    }
}
/**
 * Prepend an element before another.
 *
 * @category Manipulation
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */
function prepend(elem, prev) {
    removeElement(prev);
    const { parent } = elem;
    if (parent) {
        const childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}

/**
 * Search a node and its children for nodes passing a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function filter(test, node, recurse = true, limit = Infinity) {
    if (!Array.isArray(node))
        node = [node];
    return find(test, node, recurse, limit);
}
/**
 * Search an array of node and its children for nodes passing a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function find(test, nodes, recurse, limit) {
    const result = [];
    for (const elem of nodes) {
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
                break;
        }
        if (recurse && hasChildren(elem) && elem.children.length > 0) {
            const children = find(test, elem.children, recurse, limit);
            result.push(...children);
            limit -= children.length;
            if (limit <= 0)
                break;
        }
    }
    return result;
}
/**
 * Finds the first element inside of an array that matches a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 * @deprecated Use `Array.prototype.find` directly.
 */
function findOneChild(test, nodes) {
    return nodes.find(test);
}
/**
 * Finds one element in a tree that passes a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first child node that passes `test`.
 */
function findOne$1(test, nodes, recurse = true) {
    let elem = null;
    for (let i = 0; i < nodes.length && !elem; i++) {
        const checked = nodes[i];
        if (!isTag$1(checked)) {
            continue;
        }
        else if (test(checked)) {
            elem = checked;
        }
        else if (recurse && checked.children.length > 0) {
            elem = findOne$1(test, checked.children, true);
        }
    }
    return elem;
}
/**
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing the test.
 */
function existsOne$1(test, nodes) {
    return nodes.some((checked) => isTag$1(checked) &&
        (test(checked) ||
            (checked.children.length > 0 &&
                existsOne$1(test, checked.children))));
}
/**
 * Search and array of nodes and its children for elements passing a test function.
 *
 * Same as `find`, but limited to elements and with less options, leading to reduced complexity.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */
function findAll$1(test, nodes) {
    var _a;
    const result = [];
    const stack = nodes.filter(isTag$1);
    let elem;
    while ((elem = stack.shift())) {
        const children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(isTag$1);
        if (children && children.length > 0) {
            stack.unshift(...children);
        }
        if (test(elem))
            result.push(elem);
    }
    return result;
}

const Checks = {
    tag_name(name) {
        if (typeof name === "function") {
            return (elem) => isTag$1(elem) && name(elem.name);
        }
        else if (name === "*") {
            return isTag$1;
        }
        return (elem) => isTag$1(elem) && elem.name === name;
    },
    tag_type(type) {
        if (typeof type === "function") {
            return (elem) => type(elem.type);
        }
        return (elem) => elem.type === type;
    },
    tag_contains(data) {
        if (typeof data === "function") {
            return (elem) => isText(elem) && data(elem.data);
        }
        return (elem) => isText(elem) && elem.data === data;
    },
};
/**
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a
 *   particular value.
 */
function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return (elem) => isTag$1(elem) && value(elem.attribs[attrib]);
    }
    return (elem) => isTag$1(elem) && elem.attribs[attrib] === value;
}
/**
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either of the input
 *   functions returns `true` for the node.
 */
function combineFuncs(a, b) {
    return (elem) => a(elem) || b(elem);
}
/**
 * @param options An object describing nodes to look for.
 * @returns A function executing all checks in `options` and returning `true` if
 *   any of them match a node.
 */
function compileTest(options) {
    const funcs = Object.keys(options).map((key) => {
        const value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key)
            ? Checks[key](value)
            : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */
function testElement(options, node) {
    const test = compileTest(options);
    return test ? test(node) : true;
}
/**
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */
function getElements(options, nodes, recurse, limit = Infinity) {
    const test = compileTest(options);
    return test ? filter(test, nodes, recurse, limit) : [];
}
/**
 * @category Legacy Query Functions
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */
function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes))
        nodes = [nodes];
    return findOne$1(getAttribCheck("id", id), nodes, recurse);
}
/**
 * @category Legacy Query Functions
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */
function getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
    return filter(Checks["tag_name"](tagName), nodes, recurse, limit);
}
/**
 * @category Legacy Query Functions
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
    return filter(Checks["tag_type"](type), nodes, recurse, limit);
}

/**
 * Given an array of nodes, remove any member that is contained by another.
 *
 * @category Helpers
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't subtrees of each other.
 */
function removeSubsets$1(nodes) {
    let idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */
    while (--idx >= 0) {
        const node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for (let ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.includes(ancestor)) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
/**
 * @category Helpers
 * @see {@link http://dom.spec.whatwg.org/#dom-node-comparedocumentposition}
 */
var DocumentPosition;
(function (DocumentPosition) {
    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
/**
 * Compare the position of one node against another node in any other document.
 * The return value is a bitmask with the values from {@link DocumentPosition}.
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent.
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @category Helpers
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */
function compareDocumentPosition(nodeA, nodeB) {
    const aParents = [];
    const bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    let current = hasChildren(nodeA) ? nodeA : nodeA.parent;
    while (current) {
        aParents.unshift(current);
        current = current.parent;
    }
    current = hasChildren(nodeB) ? nodeB : nodeB.parent;
    while (current) {
        bParents.unshift(current);
        current = current.parent;
    }
    const maxIdx = Math.min(aParents.length, bParents.length);
    let idx = 0;
    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
    }
    if (idx === 0) {
        return DocumentPosition.DISCONNECTED;
    }
    const sharedParent = aParents[idx - 1];
    const siblings = sharedParent.children;
    const aSibling = aParents[idx];
    const bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
    }
    if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
    }
    return DocumentPosition.PRECEDING;
}
/**
 * Sort an array of nodes based on their relative position in the document and
 * remove any duplicate nodes. If the array contains nodes that do not belong to
 * the same document, sort order is unspecified.
 *
 * @category Helpers
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */
function uniqueSort(nodes) {
    nodes = nodes.filter((node, i, arr) => !arr.includes(node, i + 1));
    nodes.sort((a, b) => {
        const relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) {
            return -1;
        }
        else if (relative & DocumentPosition.FOLLOWING) {
            return 1;
        }
        return 0;
    });
    return nodes;
}

/**
 * Get the feed object from the root of a DOM tree.
 *
 * @category Feeds
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */
function getFeed(doc) {
    const feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot
        ? null
        : feedRoot.name === "feed"
            ? getAtomFeed(feedRoot)
            : getRssFeed(feedRoot);
}
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getAtomFeed(feedRoot) {
    var _a;
    const childs = feedRoot.children;
    const feed = {
        type: "atom",
        items: getElementsByTagName("entry", childs).map((item) => {
            var _a;
            const { children } = item;
            const entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            const href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
            if (href) {
                entry.link = href;
            }
            const description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            const pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        }),
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    const href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    const updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getRssFeed(feedRoot) {
    var _a, _b;
    const childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    const feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: getElementsByTagName("item", feedRoot.children).map((item) => {
            const { children } = item;
            const entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            const pubDate = fetch("pubDate", children);
            if (pubDate)
                entry.pubDate = new Date(pubDate);
            return entry;
        }),
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    const updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
const MEDIA_KEYS_STRING = ["url", "type", "lang"];
const MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width",
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */
function getMediaElements(where) {
    return getElementsByTagName("media:content", where).map((elem) => {
        const { attribs } = elem;
        const media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"],
        };
        for (const attrib of MEDIA_KEYS_STRING) {
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (const attrib of MEDIA_KEYS_INT) {
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs["expression"]) {
            media.expression = attribs["expression"];
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */
function getOneElement(tagName, node) {
    return getElementsByTagName(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */
function fetch(tagName, where, recurse = false) {
    return textContent(getElementsByTagName(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */
function addConditionally(obj, prop, tagName, where, recurse = false) {
    const val = fetch(tagName, where, recurse);
    if (val)
        obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}

var DomUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isTag: isTag$1,
    isCDATA: isCDATA,
    isText: isText,
    isComment: isComment,
    isDocument: isDocument,
    hasChildren: hasChildren,
    getOuterHTML: getOuterHTML,
    getInnerHTML: getInnerHTML,
    getText: getText$1,
    textContent: textContent,
    innerText: innerText,
    getChildren: getChildren$1,
    getParent: getParent$1,
    getSiblings: getSiblings$1,
    getAttributeValue: getAttributeValue$1,
    hasAttrib: hasAttrib$1,
    getName: getName$1,
    nextElementSibling: nextElementSibling,
    prevElementSibling: prevElementSibling,
    removeElement: removeElement,
    replaceElement: replaceElement,
    appendChild: appendChild,
    append: append$1,
    prependChild: prependChild,
    prepend: prepend,
    filter: filter,
    find: find,
    findOneChild: findOneChild,
    findOne: findOne$1,
    existsOne: existsOne$1,
    findAll: findAll$1,
    testElement: testElement,
    getElements: getElements,
    getElementById: getElementById,
    getElementsByTagName: getElementsByTagName,
    getElementsByTagType: getElementsByTagType,
    removeSubsets: removeSubsets$1,
    get DocumentPosition () { return DocumentPosition; },
    compareDocumentPosition: compareDocumentPosition,
    uniqueSort: uniqueSort,
    getFeed: getFeed
});

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var boolbase = {
	trueFunc: function trueFunc(){
		return true;
	},
	falseFunc: function falseFunc(){
		return false;
	}
};

var SelectorType;
(function (SelectorType) {
    SelectorType["Attribute"] = "attribute";
    SelectorType["Pseudo"] = "pseudo";
    SelectorType["PseudoElement"] = "pseudo-element";
    SelectorType["Tag"] = "tag";
    SelectorType["Universal"] = "universal";
    // Traversals
    SelectorType["Adjacent"] = "adjacent";
    SelectorType["Child"] = "child";
    SelectorType["Descendant"] = "descendant";
    SelectorType["Parent"] = "parent";
    SelectorType["Sibling"] = "sibling";
    SelectorType["ColumnCombinator"] = "column-combinator";
})(SelectorType || (SelectorType = {}));
var AttributeAction;
(function (AttributeAction) {
    AttributeAction["Any"] = "any";
    AttributeAction["Element"] = "element";
    AttributeAction["End"] = "end";
    AttributeAction["Equals"] = "equals";
    AttributeAction["Exists"] = "exists";
    AttributeAction["Hyphen"] = "hyphen";
    AttributeAction["Not"] = "not";
    AttributeAction["Start"] = "start";
})(AttributeAction || (AttributeAction = {}));

const reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
const actionTypes = new Map([
    [126 /* Tilde */, AttributeAction.Element],
    [94 /* Circumflex */, AttributeAction.Start],
    [36 /* Dollar */, AttributeAction.End],
    [42 /* Asterisk */, AttributeAction.Any],
    [33 /* ExclamationMark */, AttributeAction.Not],
    [124 /* Pipe */, AttributeAction.Hyphen],
]);
// Pseudos, whose data property is parsed as well.
const unpackPseudos = new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context",
]);
/**
 * Checks whether a specific selector is a traversal.
 * This is useful eg. in swapping the order of elements that
 * are not traversals.
 *
 * @param selector Selector to check.
 */
function isTraversal$1(selector) {
    switch (selector.type) {
        case SelectorType.Adjacent:
        case SelectorType.Child:
        case SelectorType.Descendant:
        case SelectorType.Parent:
        case SelectorType.Sibling:
        case SelectorType.ColumnCombinator:
            return true;
        default:
            return false;
    }
}
const stripQuotesFromPseudos = new Set(["contains", "icontains"]);
// Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    const high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace
        ? escaped
        : high < 0
            ? // BMP codepoint
                String.fromCharCode(high + 0x10000)
            : // Supplemental Plane codepoint (surrogate pair)
                String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isQuote(c) {
    return c === 39 /* SingleQuote */ || c === 34 /* DoubleQuote */;
}
function isWhitespace(c) {
    return (c === 32 /* Space */ ||
        c === 9 /* Tab */ ||
        c === 10 /* NewLine */ ||
        c === 12 /* FormFeed */ ||
        c === 13 /* CarriageReturn */);
}
/**
 * Parses `selector`, optionally with the passed `options`.
 *
 * @param selector Selector to parse.
 * @param options Options for parsing.
 * @returns Returns a two-dimensional array.
 * The first dimension represents selectors separated by commas (eg. `sub1, sub2`),
 * the second contains the relevant tokens for that selector.
 */
function parse$5(selector) {
    const subselects = [];
    const endIndex = parseSelector(subselects, `${selector}`, 0);
    if (endIndex < selector.length) {
        throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
    }
    return subselects;
}
function parseSelector(subselects, selector, selectorIndex) {
    let tokens = [];
    function getName(offset) {
        const match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
            throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
        }
        const [name] = match;
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
    }
    function stripWhitespace(offset) {
        selectorIndex += offset;
        while (selectorIndex < selector.length &&
            isWhitespace(selector.charCodeAt(selectorIndex))) {
            selectorIndex++;
        }
    }
    function readValueWithParenthesis() {
        selectorIndex += 1;
        const start = selectorIndex;
        let counter = 1;
        for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
            if (selector.charCodeAt(selectorIndex) ===
                40 /* LeftParenthesis */ &&
                !isEscaped(selectorIndex)) {
                counter++;
            }
            else if (selector.charCodeAt(selectorIndex) ===
                41 /* RightParenthesis */ &&
                !isEscaped(selectorIndex)) {
                counter--;
            }
        }
        if (counter) {
            throw new Error("Parenthesis not matched");
        }
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
    }
    function isEscaped(pos) {
        let slashCount = 0;
        while (selector.charCodeAt(--pos) === 92 /* BackSlash */)
            slashCount++;
        return (slashCount & 1) === 1;
    }
    function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal$1(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
        }
    }
    function addTraversal(type) {
        if (tokens.length > 0 &&
            tokens[tokens.length - 1].type === SelectorType.Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
        }
        ensureNotTraversal();
        tokens.push({ type });
    }
    function addSpecialAttribute(name, action) {
        tokens.push({
            type: SelectorType.Attribute,
            name,
            action,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks",
        });
    }
    /**
     * We have finished parsing the current part of the selector.
     *
     * Remove descendant tokens at the end if they exist,
     * and return the last index, so that parsing can be
     * picked up from here.
     */
    function finalizeSubselector() {
        if (tokens.length &&
            tokens[tokens.length - 1].type === SelectorType.Descendant) {
            tokens.pop();
        }
        if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
        }
        subselects.push(tokens);
    }
    stripWhitespace(0);
    if (selector.length === selectorIndex) {
        return selectorIndex;
    }
    loop: while (selectorIndex < selector.length) {
        const firstChar = selector.charCodeAt(selectorIndex);
        switch (firstChar) {
            // Whitespace
            case 32 /* Space */:
            case 9 /* Tab */:
            case 10 /* NewLine */:
            case 12 /* FormFeed */:
            case 13 /* CarriageReturn */: {
                if (tokens.length === 0 ||
                    tokens[0].type !== SelectorType.Descendant) {
                    ensureNotTraversal();
                    tokens.push({ type: SelectorType.Descendant });
                }
                stripWhitespace(1);
                break;
            }
            // Traversals
            case 62 /* GreaterThan */: {
                addTraversal(SelectorType.Child);
                stripWhitespace(1);
                break;
            }
            case 60 /* LessThan */: {
                addTraversal(SelectorType.Parent);
                stripWhitespace(1);
                break;
            }
            case 126 /* Tilde */: {
                addTraversal(SelectorType.Sibling);
                stripWhitespace(1);
                break;
            }
            case 43 /* Plus */: {
                addTraversal(SelectorType.Adjacent);
                stripWhitespace(1);
                break;
            }
            // Special attribute selectors: .class, #id
            case 46 /* Period */: {
                addSpecialAttribute("class", AttributeAction.Element);
                break;
            }
            case 35 /* Hash */: {
                addSpecialAttribute("id", AttributeAction.Equals);
                break;
            }
            case 91 /* LeftSquareBracket */: {
                stripWhitespace(1);
                // Determine attribute name and namespace
                let name;
                let namespace = null;
                if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */) {
                    // Equivalent to no namespace
                    name = getName(1);
                }
                else if (selector.startsWith("*|", selectorIndex)) {
                    namespace = "*";
                    name = getName(2);
                }
                else {
                    name = getName(0);
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ &&
                        selector.charCodeAt(selectorIndex + 1) !==
                            61 /* Equal */) {
                        namespace = name;
                        name = getName(1);
                    }
                }
                stripWhitespace(0);
                // Determine comparison operation
                let action = AttributeAction.Exists;
                const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                if (possibleAction) {
                    action = possibleAction;
                    if (selector.charCodeAt(selectorIndex + 1) !==
                        61 /* Equal */) {
                        throw new Error("Expected `=`");
                    }
                    stripWhitespace(2);
                }
                else if (selector.charCodeAt(selectorIndex) === 61 /* Equal */) {
                    action = AttributeAction.Equals;
                    stripWhitespace(1);
                }
                // Determine value
                let value = "";
                let ignoreCase = null;
                if (action !== "exists") {
                    if (isQuote(selector.charCodeAt(selectorIndex))) {
                        const quote = selector.charCodeAt(selectorIndex);
                        let sectionEnd = selectorIndex + 1;
                        while (sectionEnd < selector.length &&
                            (selector.charCodeAt(sectionEnd) !== quote ||
                                isEscaped(sectionEnd))) {
                            sectionEnd += 1;
                        }
                        if (selector.charCodeAt(sectionEnd) !== quote) {
                            throw new Error("Attribute value didn't end");
                        }
                        value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                        selectorIndex = sectionEnd + 1;
                    }
                    else {
                        const valueStart = selectorIndex;
                        while (selectorIndex < selector.length &&
                            ((!isWhitespace(selector.charCodeAt(selectorIndex)) &&
                                selector.charCodeAt(selectorIndex) !==
                                    93 /* RightSquareBracket */) ||
                                isEscaped(selectorIndex))) {
                            selectorIndex += 1;
                        }
                        value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                    }
                    stripWhitespace(0);
                    // See if we have a force ignore flag
                    const forceIgnore = selector.charCodeAt(selectorIndex) | 0x20;
                    // If the forceIgnore flag is set (either `i` or `s`), use that value
                    if (forceIgnore === 115 /* LowerS */) {
                        ignoreCase = false;
                        stripWhitespace(1);
                    }
                    else if (forceIgnore === 105 /* LowerI */) {
                        ignoreCase = true;
                        stripWhitespace(1);
                    }
                }
                if (selector.charCodeAt(selectorIndex) !==
                    93 /* RightSquareBracket */) {
                    throw new Error("Attribute selector didn't terminate");
                }
                selectorIndex += 1;
                const attributeSelector = {
                    type: SelectorType.Attribute,
                    name,
                    action,
                    value,
                    namespace,
                    ignoreCase,
                };
                tokens.push(attributeSelector);
                break;
            }
            case 58 /* Colon */: {
                if (selector.charCodeAt(selectorIndex + 1) === 58 /* Colon */) {
                    tokens.push({
                        type: SelectorType.PseudoElement,
                        name: getName(2).toLowerCase(),
                        data: selector.charCodeAt(selectorIndex) ===
                            40 /* LeftParenthesis */
                            ? readValueWithParenthesis()
                            : null,
                    });
                    continue;
                }
                const name = getName(1).toLowerCase();
                let data = null;
                if (selector.charCodeAt(selectorIndex) ===
                    40 /* LeftParenthesis */) {
                    if (unpackPseudos.has(name)) {
                        if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                            throw new Error(`Pseudo-selector ${name} cannot be quoted`);
                        }
                        data = [];
                        selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                        if (selector.charCodeAt(selectorIndex) !==
                            41 /* RightParenthesis */) {
                            throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
                        }
                        selectorIndex += 1;
                    }
                    else {
                        data = readValueWithParenthesis();
                        if (stripQuotesFromPseudos.has(name)) {
                            const quot = data.charCodeAt(0);
                            if (quot === data.charCodeAt(data.length - 1) &&
                                isQuote(quot)) {
                                data = data.slice(1, -1);
                            }
                        }
                        data = unescapeCSS(data);
                    }
                }
                tokens.push({ type: SelectorType.Pseudo, name, data });
                break;
            }
            case 44 /* Comma */: {
                finalizeSubselector();
                tokens = [];
                stripWhitespace(1);
                break;
            }
            default: {
                if (selector.startsWith("/*", selectorIndex)) {
                    const endIndex = selector.indexOf("*/", selectorIndex + 2);
                    if (endIndex < 0) {
                        throw new Error("Comment was not terminated");
                    }
                    selectorIndex = endIndex + 2;
                    // Remove leading whitespace
                    if (tokens.length === 0) {
                        stripWhitespace(0);
                    }
                    break;
                }
                let namespace = null;
                let name;
                if (firstChar === 42 /* Asterisk */) {
                    selectorIndex += 1;
                    name = "*";
                }
                else if (firstChar === 124 /* Pipe */) {
                    name = "";
                    if (selector.charCodeAt(selectorIndex + 1) === 124 /* Pipe */) {
                        addTraversal(SelectorType.ColumnCombinator);
                        stripWhitespace(2);
                        break;
                    }
                }
                else if (reName.test(selector.slice(selectorIndex))) {
                    name = getName(0);
                }
                else {
                    break loop;
                }
                if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ &&
                    selector.charCodeAt(selectorIndex + 1) !== 124 /* Pipe */) {
                    namespace = name;
                    if (selector.charCodeAt(selectorIndex + 1) ===
                        42 /* Asterisk */) {
                        name = "*";
                        selectorIndex += 2;
                    }
                    else {
                        name = getName(1);
                    }
                }
                tokens.push(name === "*"
                    ? { type: SelectorType.Universal, namespace }
                    : { type: SelectorType.Tag, name, namespace });
            }
        }
    }
    finalizeSubselector();
    return selectorIndex;
}

const attribValChars = ["\\", '"'];
const pseudoValChars = [...attribValChars, "(", ")"];
new Set(attribValChars.map((c) => c.charCodeAt(0)));
new Set(pseudoValChars.map((c) => c.charCodeAt(0)));
new Set([
    ...pseudoValChars,
    "~",
    "^",
    "$",
    "*",
    "+",
    "!",
    "|",
    ":",
    "[",
    "]",
    " ",
    ".",
].map((c) => c.charCodeAt(0)));

const procedure = new Map([
    [SelectorType.Universal, 50],
    [SelectorType.Tag, 30],
    [SelectorType.Attribute, 1],
    [SelectorType.Pseudo, 0],
]);
function isTraversal(token) {
    return !procedure.has(token.type);
}
const attributes = new Map([
    [AttributeAction.Exists, 10],
    [AttributeAction.Equals, 8],
    [AttributeAction.Not, 7],
    [AttributeAction.Start, 6],
    [AttributeAction.End, 6],
    [AttributeAction.Any, 5],
]);
/**
 * Sort the parts of the passed selector,
 * as there is potential for optimization
 * (some types of selectors are faster than others)
 *
 * @param arr Selector to sort
 */
function sortByProcedure(arr) {
    const procs = arr.map(getProcedure);
    for (let i = 1; i < arr.length; i++) {
        const procNew = procs[i];
        if (procNew < 0)
            continue;
        for (let j = i - 1; j >= 0 && procNew < procs[j]; j--) {
            const token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
        }
    }
}
function getProcedure(token) {
    var _a, _b;
    let proc = (_a = procedure.get(token.type)) !== null && _a !== void 0 ? _a : -1;
    if (token.type === SelectorType.Attribute) {
        proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
        if (token.action === AttributeAction.Equals && token.name === "id") {
            // Prefer ID selectors (eg. #ID)
            proc = 9;
        }
        if (token.ignoreCase) {
            /*
             * IgnoreCase adds some overhead, prefer "normal" token
             * this is a binary operation, to ensure it's still an int
             */
            proc >>= 1;
        }
    }
    else if (token.type === SelectorType.Pseudo) {
        if (!token.data) {
            proc = 3;
        }
        else if (token.name === "has" || token.name === "contains") {
            proc = 0; // Expensive in any case
        }
        else if (Array.isArray(token.data)) {
            // Eg. :matches, :not
            proc = Math.min(...token.data.map((d) => Math.min(...d.map(getProcedure))));
            // If we have traversals, try to avoid executing this selector
            if (proc < 0) {
                proc = 0;
            }
        }
        else {
            proc = 2;
        }
    }
    return proc;
}

/**
 * All reserved characters in a regex, used for escaping.
 *
 * Taken from XRegExp, (c) 2007-2020 Steven Levithan under the MIT license
 * https://github.com/slevithan/xregexp/blob/95eeebeb8fac8754d54eafe2b4743661ac1cf028/src/xregexp.js#L794
 */
const reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(value) {
    return value.replace(reChars, "\\$&");
}
/**
 * Attributes that are case-insensitive in HTML.
 *
 * @private
 * @see https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors
 */
const caseInsensitiveAttributes = new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink",
]);
function shouldIgnoreCase(selector, options) {
    return typeof selector.ignoreCase === "boolean"
        ? selector.ignoreCase
        : selector.ignoreCase === "quirks"
            ? !!options.quirksMode
            : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
}
/**
 * Attribute selectors
 */
const attributeRules = {
    equals(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem) => {
                const attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    attr.length === value.length &&
                    attr.toLowerCase() === value &&
                    next(elem));
            };
        }
        return (elem) => adapter.getAttributeValue(elem, name) === value && next(elem);
    },
    hyphen(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = value.length;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function hyphenIC(elem) {
                const attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    (attr.length === len || attr.charAt(len) === "-") &&
                    attr.substr(0, len).toLowerCase() === value &&
                    next(elem));
            };
        }
        return function hyphen(elem) {
            const attr = adapter.getAttributeValue(elem, name);
            return (attr != null &&
                (attr.length === len || attr.charAt(len) === "-") &&
                attr.substr(0, len) === value &&
                next(elem));
        };
    },
    element(next, data, options) {
        const { adapter } = options;
        const { name, value } = data;
        if (/\s/.test(value)) {
            return boolbase.falseFunc;
        }
        const regex = new RegExp(`(?:^|\\s)${escapeRegex(value)}(?:$|\\s)`, shouldIgnoreCase(data, options) ? "i" : "");
        return function element(elem) {
            const attr = adapter.getAttributeValue(elem, name);
            return (attr != null &&
                attr.length >= value.length &&
                regex.test(attr) &&
                next(elem));
        };
    },
    exists(next, { name }, { adapter }) {
        return (elem) => adapter.hasAttrib(elem, name) && next(elem);
    },
    start(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = value.length;
        if (len === 0) {
            return boolbase.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem) => {
                const attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    attr.length >= len &&
                    attr.substr(0, len).toLowerCase() === value &&
                    next(elem));
            };
        }
        return (elem) => {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) &&
                next(elem);
        };
    },
    end(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = -value.length;
        if (len === 0) {
            return boolbase.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem) => {
                var _a;
                return ((_a = adapter
                    .getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
            };
        }
        return (elem) => {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) &&
                next(elem);
        };
    },
    any(next, data, options) {
        const { adapter } = options;
        const { name, value } = data;
        if (value === "") {
            return boolbase.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            const regex = new RegExp(escapeRegex(value), "i");
            return function anyIC(elem) {
                const attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    attr.length >= value.length &&
                    regex.test(attr) &&
                    next(elem));
            };
        }
        return (elem) => {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) &&
                next(elem);
        };
    },
    not(next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        if (value === "") {
            return (elem) => !!adapter.getAttributeValue(elem, name) && next(elem);
        }
        else if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem) => {
                const attr = adapter.getAttributeValue(elem, name);
                return ((attr == null ||
                    attr.length !== value.length ||
                    attr.toLowerCase() !== value) &&
                    next(elem));
            };
        }
        return (elem) => adapter.getAttributeValue(elem, name) !== value && next(elem);
    },
};

var lib = {};

var parse$4 = {};

// Following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo
Object.defineProperty(parse$4, "__esModule", { value: true });
parse$4.parse = void 0;
// Whitespace as per https://www.w3.org/TR/selectors-3/#lex is " \t\r\n\f"
var whitespace = new Set([9, 10, 12, 13, 32]);
var ZERO = "0".charCodeAt(0);
var NINE = "9".charCodeAt(0);
/**
 * Parses an expression.
 *
 * @throws An `Error` if parsing fails.
 * @returns An array containing the integer step size and the integer offset of the nth rule.
 * @example nthCheck.parse("2n+3"); // returns [2, 3]
 */
function parse$3(formula) {
    formula = formula.trim().toLowerCase();
    if (formula === "even") {
        return [2, 0];
    }
    else if (formula === "odd") {
        return [2, 1];
    }
    // Parse [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
    var idx = 0;
    var a = 0;
    var sign = readSign();
    var number = readNumber();
    if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
        }
        else {
            sign = number = 0;
        }
    }
    // Throw if there is anything else
    if (number === null || idx < formula.length) {
        throw new Error("n-th rule couldn't be parsed ('" + formula + "')");
    }
    return [a, sign * number];
    function readSign() {
        if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
        }
        if (formula.charAt(idx) === "+") {
            idx++;
        }
        return 1;
    }
    function readNumber() {
        var start = idx;
        var value = 0;
        while (idx < formula.length &&
            formula.charCodeAt(idx) >= ZERO &&
            formula.charCodeAt(idx) <= NINE) {
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
        }
        // Return `null` if we didn't read anything.
        return idx === start ? null : value;
    }
    function skipWhitespace() {
        while (idx < formula.length &&
            whitespace.has(formula.charCodeAt(idx))) {
            idx++;
        }
    }
}
parse$4.parse = parse$3;

var compile$3 = {};

Object.defineProperty(compile$3, "__esModule", { value: true });
compile$3.compile = void 0;
var boolbase_1 = boolbase;
/**
 * Returns a function that checks if an elements index matches the given rule
 * highly optimized to return the fastest solution.
 *
 * @param parsed A tuple [a, b], as returned by `parse`.
 * @returns A highly optimized function that returns whether an index matches the nth-check.
 * @example
 * const check = nthCheck.compile([2, 3]);
 *
 * check(0); // `false`
 * check(1); // `false`
 * check(2); // `true`
 * check(3); // `false`
 * check(4); // `true`
 * check(5); // `false`
 * check(6); // `true`
 */
function compile$2(parsed) {
    var a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    var b = parsed[1] - 1;
    /*
     * When `b <= 0`, `a * n` won't be lead to any matches for `a < 0`.
     * Besides, the specification states that no elements are
     * matched when `a` and `b` are 0.
     *
     * `b < 0` here as we subtracted 1 from `b` above.
     */
    if (b < 0 && a <= 0)
        return boolbase_1.falseFunc;
    // When `a` is in the range -1..1, it matches any element (so only `b` is checked).
    if (a === -1)
        return function (index) { return index <= b; };
    if (a === 0)
        return function (index) { return index === b; };
    // When `b <= 0` and `a === 1`, they match any element.
    if (a === 1)
        return b < 0 ? boolbase_1.trueFunc : function (index) { return index >= b; };
    /*
     * Otherwise, modulo can be used to check if there is a match.
     *
     * Modulo doesn't care about the sign, so let's use `a`s absolute value.
     */
    var absA = Math.abs(a);
    // Get `b mod a`, + a if this is negative.
    var bMod = ((b % absA) + absA) % absA;
    return a > 1
        ? function (index) { return index >= b && index % absA === bMod; }
        : function (index) { return index <= b && index % absA === bMod; };
}
compile$3.compile = compile$2;

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.compile = exports.parse = void 0;
	var parse_1 = parse$4;
	Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parse_1.parse; } });
	var compile_1 = compile$3;
	Object.defineProperty(exports, "compile", { enumerable: true, get: function () { return compile_1.compile; } });
	/**
	 * Parses and compiles a formula to a highly optimized function.
	 * Combination of `parse` and `compile`.
	 *
	 * If the formula doesn't match any elements,
	 * it returns [`boolbase`](https://github.com/fb55/boolbase)'s `falseFunc`.
	 * Otherwise, a function accepting an _index_ is returned, which returns
	 * whether or not the passed _index_ matches the formula.
	 *
	 * Note: The nth-rule starts counting at `1`, the returned function at `0`.
	 *
	 * @param formula The formula to compile.
	 * @example
	 * const check = nthCheck("2n+3");
	 *
	 * check(0); // `false`
	 * check(1); // `false`
	 * check(2); // `true`
	 * check(3); // `false`
	 * check(4); // `true`
	 * check(5); // `false`
	 * check(6); // `true`
	 */
	function nthCheck(formula) {
	    return (0, compile_1.compile)((0, parse_1.parse)(formula));
	}
	exports.default = nthCheck;
} (lib));

var getNCheck = /*@__PURE__*/getDefaultExportFromCjs(lib);

function getChildFunc(next, adapter) {
    return (elem) => {
        const parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(elem);
    };
}
const filters = {
    contains(next, text, { adapter }) {
        return function contains(elem) {
            return next(elem) && adapter.getText(elem).includes(text);
        };
    },
    icontains(next, text, { adapter }) {
        const itext = text.toLowerCase();
        return function icontains(elem) {
            return (next(elem) &&
                adapter.getText(elem).toLowerCase().includes(itext));
        };
    },
    // Location specific methods
    "nth-child"(next, rule, { adapter, equals }) {
        const func = getNCheck(rule);
        if (func === boolbase.falseFunc)
            return boolbase.falseFunc;
        if (func === boolbase.trueFunc)
            return getChildFunc(next, adapter);
        return function nthChild(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for (let i = 0; i < siblings.length; i++) {
                if (equals(elem, siblings[i]))
                    break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-child"(next, rule, { adapter, equals }) {
        const func = getNCheck(rule);
        if (func === boolbase.falseFunc)
            return boolbase.falseFunc;
        if (func === boolbase.trueFunc)
            return getChildFunc(next, adapter);
        return function nthLastChild(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for (let i = siblings.length - 1; i >= 0; i--) {
                if (equals(elem, siblings[i]))
                    break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-of-type"(next, rule, { adapter, equals }) {
        const func = getNCheck(rule);
        if (func === boolbase.falseFunc)
            return boolbase.falseFunc;
        if (func === boolbase.trueFunc)
            return getChildFunc(next, adapter);
        return function nthOfType(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for (let i = 0; i < siblings.length; i++) {
                const currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                    break;
                if (adapter.isTag(currentSibling) &&
                    adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-of-type"(next, rule, { adapter, equals }) {
        const func = getNCheck(rule);
        if (func === boolbase.falseFunc)
            return boolbase.falseFunc;
        if (func === boolbase.trueFunc)
            return getChildFunc(next, adapter);
        return function nthLastOfType(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for (let i = siblings.length - 1; i >= 0; i--) {
                const currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                    break;
                if (adapter.isTag(currentSibling) &&
                    adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    // TODO determine the actual root element
    root(next, _rule, { adapter }) {
        return (elem) => {
            const parent = adapter.getParent(elem);
            return (parent == null || !adapter.isTag(parent)) && next(elem);
        };
    },
    scope(next, rule, options, context) {
        const { equals } = options;
        if (!context || context.length === 0) {
            // Equivalent to :root
            return filters["root"](next, rule, options);
        }
        if (context.length === 1) {
            // NOTE: can't be unpacked, as :has uses this for side-effects
            return (elem) => equals(context[0], elem) && next(elem);
        }
        return (elem) => context.includes(elem) && next(elem);
    },
    hover: dynamicStatePseudo("isHovered"),
    visited: dynamicStatePseudo("isVisited"),
    active: dynamicStatePseudo("isActive"),
};
/**
 * Dynamic state pseudos. These depend on optional Adapter methods.
 *
 * @param name The name of the adapter method to call.
 * @returns Pseudo for the `filters` object.
 */
function dynamicStatePseudo(name) {
    return function dynamicPseudo(next, _rule, { adapter }) {
        const func = adapter[name];
        if (typeof func !== "function") {
            return boolbase.falseFunc;
        }
        return function active(elem) {
            return func(elem) && next(elem);
        };
    };
}

// While filters are precompiled, pseudos get called when they are needed
const pseudos = {
    empty(elem, { adapter }) {
        return !adapter.getChildren(elem).some((elem) => 
        // FIXME: `getText` call is potentially expensive.
        adapter.isTag(elem) || adapter.getText(elem) !== "");
    },
    "first-child"(elem, { adapter, equals }) {
        if (adapter.prevElementSibling) {
            return adapter.prevElementSibling(elem) == null;
        }
        const firstChild = adapter
            .getSiblings(elem)
            .find((elem) => adapter.isTag(elem));
        return firstChild != null && equals(elem, firstChild);
    },
    "last-child"(elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        for (let i = siblings.length - 1; i >= 0; i--) {
            if (equals(elem, siblings[i]))
                return true;
            if (adapter.isTag(siblings[i]))
                break;
        }
        return false;
    },
    "first-of-type"(elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        const elemName = adapter.getName(elem);
        for (let i = 0; i < siblings.length; i++) {
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling))
                return true;
            if (adapter.isTag(currentSibling) &&
                adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "last-of-type"(elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        const elemName = adapter.getName(elem);
        for (let i = siblings.length - 1; i >= 0; i--) {
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling))
                return true;
            if (adapter.isTag(currentSibling) &&
                adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "only-of-type"(elem, { adapter, equals }) {
        const elemName = adapter.getName(elem);
        return adapter
            .getSiblings(elem)
            .every((sibling) => equals(elem, sibling) ||
            !adapter.isTag(sibling) ||
            adapter.getName(sibling) !== elemName);
    },
    "only-child"(elem, { adapter, equals }) {
        return adapter
            .getSiblings(elem)
            .every((sibling) => equals(elem, sibling) || !adapter.isTag(sibling));
    },
};
function verifyPseudoArgs(func, name, subselect, argIndex) {
    if (subselect === null) {
        if (func.length > argIndex) {
            throw new Error(`Pseudo-class :${name} requires an argument`);
        }
    }
    else if (func.length === argIndex) {
        throw new Error(`Pseudo-class :${name} doesn't have any arguments`);
    }
}

/**
 * Aliases are pseudos that are expressed as selectors.
 */
const aliases = {
    // Links
    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",
    // Forms
    // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
    enabled: ":not(:disabled)",
    checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",
    // JQuery extensions
    // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
    selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",
    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",
    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])",
};

/** Used as a placeholder for :has. Will be replaced with the actual element. */
const PLACEHOLDER_ELEMENT = {};
function ensureIsTag(next, adapter) {
    if (next === boolbase.falseFunc)
        return boolbase.falseFunc;
    return (elem) => adapter.isTag(elem) && next(elem);
}
function getNextSiblings(elem, adapter) {
    const siblings = adapter.getSiblings(elem);
    if (siblings.length <= 1)
        return [];
    const elemIndex = siblings.indexOf(elem);
    if (elemIndex < 0 || elemIndex === siblings.length - 1)
        return [];
    return siblings.slice(elemIndex + 1).filter(adapter.isTag);
}
function copyOptions(options) {
    // Not copied: context, rootFunc
    return {
        xmlMode: !!options.xmlMode,
        lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
        lowerCaseTags: !!options.lowerCaseTags,
        quirksMode: !!options.quirksMode,
        cacheResults: !!options.cacheResults,
        pseudos: options.pseudos,
        adapter: options.adapter,
        equals: options.equals,
    };
}
const is$1 = (next, token, options, context, compileToken) => {
    const func = compileToken(token, copyOptions(options), context);
    return func === boolbase.trueFunc
        ? next
        : func === boolbase.falseFunc
            ? boolbase.falseFunc
            : (elem) => func(elem) && next(elem);
};
/*
 * :not, :has, :is, :matches and :where have to compile selectors
 * doing this in src/pseudos.ts would lead to circular dependencies,
 * so we add them here
 */
const subselects = {
    is: is$1,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */
    matches: is$1,
    where: is$1,
    not(next, token, options, context, compileToken) {
        const func = compileToken(token, copyOptions(options), context);
        return func === boolbase.falseFunc
            ? next
            : func === boolbase.trueFunc
                ? boolbase.falseFunc
                : (elem) => !func(elem) && next(elem);
    },
    has(next, subselect, options, _context, compileToken) {
        const { adapter } = options;
        const opts = copyOptions(options);
        opts.relativeSelector = true;
        const context = subselect.some((s) => s.some(isTraversal))
            ? // Used as a placeholder. Will be replaced with the actual element.
                [PLACEHOLDER_ELEMENT]
            : undefined;
        const compiled = compileToken(subselect, opts, context);
        if (compiled === boolbase.falseFunc)
            return boolbase.falseFunc;
        const hasElement = ensureIsTag(compiled, adapter);
        // If `compiled` is `trueFunc`, we can skip this.
        if (context && compiled !== boolbase.trueFunc) {
            /*
             * `shouldTestNextSiblings` will only be true if the query starts with
             * a traversal (sibling or adjacent). That means we will always have a context.
             */
            const { shouldTestNextSiblings = false } = compiled;
            return (elem) => {
                if (!next(elem))
                    return false;
                context[0] = elem;
                const childs = adapter.getChildren(elem);
                const nextElements = shouldTestNextSiblings
                    ? [...childs, ...getNextSiblings(elem, adapter)]
                    : childs;
                return adapter.existsOne(hasElement, nextElements);
            };
        }
        return (elem) => next(elem) &&
            adapter.existsOne(hasElement, adapter.getChildren(elem));
    },
};

function compilePseudoSelector(next, selector, options, context, compileToken) {
    var _a;
    const { name, data } = selector;
    if (Array.isArray(data)) {
        if (!(name in subselects)) {
            throw new Error(`Unknown pseudo-class :${name}(${data})`);
        }
        return subselects[name](next, data, options, context, compileToken);
    }
    const userPseudo = (_a = options.pseudos) === null || _a === void 0 ? void 0 : _a[name];
    const stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases[name];
    if (typeof stringPseudo === "string") {
        if (data != null) {
            throw new Error(`Pseudo ${name} doesn't have any arguments`);
        }
        // The alias has to be parsed here, to make sure options are respected.
        const alias = parse$5(stringPseudo);
        return subselects["is"](next, alias, options, context, compileToken);
    }
    if (typeof userPseudo === "function") {
        verifyPseudoArgs(userPseudo, name, data, 1);
        return (elem) => userPseudo(elem, data) && next(elem);
    }
    if (name in filters) {
        return filters[name](next, data, options, context);
    }
    if (name in pseudos) {
        const pseudo = pseudos[name];
        verifyPseudoArgs(pseudo, name, data, 2);
        return (elem) => pseudo(elem, options, data) && next(elem);
    }
    throw new Error(`Unknown pseudo-class :${name}`);
}

function getElementParent(node, adapter) {
    const parent = adapter.getParent(node);
    if (parent && adapter.isTag(parent)) {
        return parent;
    }
    return null;
}
/*
 * All available rules
 */
function compileGeneralSelector(next, selector, options, context, compileToken) {
    const { adapter, equals } = options;
    switch (selector.type) {
        case SelectorType.PseudoElement: {
            throw new Error("Pseudo-elements are not supported by css-select");
        }
        case SelectorType.ColumnCombinator: {
            throw new Error("Column combinators are not yet supported by css-select");
        }
        case SelectorType.Attribute: {
            if (selector.namespace != null) {
                throw new Error("Namespaced attributes are not yet supported by css-select");
            }
            if (!options.xmlMode || options.lowerCaseAttributeNames) {
                selector.name = selector.name.toLowerCase();
            }
            return attributeRules[selector.action](next, selector, options);
        }
        case SelectorType.Pseudo: {
            return compilePseudoSelector(next, selector, options, context, compileToken);
        }
        // Tags
        case SelectorType.Tag: {
            if (selector.namespace != null) {
                throw new Error("Namespaced tag names are not yet supported by css-select");
            }
            let { name } = selector;
            if (!options.xmlMode || options.lowerCaseTags) {
                name = name.toLowerCase();
            }
            return function tag(elem) {
                return adapter.getName(elem) === name && next(elem);
            };
        }
        // Traversal
        case SelectorType.Descendant: {
            if (options.cacheResults === false ||
                typeof WeakSet === "undefined") {
                return function descendant(elem) {
                    let current = elem;
                    while ((current = getElementParent(current, adapter))) {
                        if (next(current)) {
                            return true;
                        }
                    }
                    return false;
                };
            }
            // @ts-expect-error `ElementNode` is not extending object
            const isFalseCache = new WeakSet();
            return function cachedDescendant(elem) {
                let current = elem;
                while ((current = getElementParent(current, adapter))) {
                    if (!isFalseCache.has(current)) {
                        if (adapter.isTag(current) && next(current)) {
                            return true;
                        }
                        isFalseCache.add(current);
                    }
                }
                return false;
            };
        }
        case "_flexibleDescendant": {
            // Include element itself, only used while querying an array
            return function flexibleDescendant(elem) {
                let current = elem;
                do {
                    if (next(current))
                        return true;
                } while ((current = getElementParent(current, adapter)));
                return false;
            };
        }
        case SelectorType.Parent: {
            return function parent(elem) {
                return adapter
                    .getChildren(elem)
                    .some((elem) => adapter.isTag(elem) && next(elem));
            };
        }
        case SelectorType.Child: {
            return function child(elem) {
                const parent = adapter.getParent(elem);
                return parent != null && adapter.isTag(parent) && next(parent);
            };
        }
        case SelectorType.Sibling: {
            return function sibling(elem) {
                const siblings = adapter.getSiblings(elem);
                for (let i = 0; i < siblings.length; i++) {
                    const currentSibling = siblings[i];
                    if (equals(elem, currentSibling))
                        break;
                    if (adapter.isTag(currentSibling) && next(currentSibling)) {
                        return true;
                    }
                }
                return false;
            };
        }
        case SelectorType.Adjacent: {
            if (adapter.prevElementSibling) {
                return function adjacent(elem) {
                    const previous = adapter.prevElementSibling(elem);
                    return previous != null && next(previous);
                };
            }
            return function adjacent(elem) {
                const siblings = adapter.getSiblings(elem);
                let lastElement;
                for (let i = 0; i < siblings.length; i++) {
                    const currentSibling = siblings[i];
                    if (equals(elem, currentSibling))
                        break;
                    if (adapter.isTag(currentSibling)) {
                        lastElement = currentSibling;
                    }
                }
                return !!lastElement && next(lastElement);
            };
        }
        case SelectorType.Universal: {
            if (selector.namespace != null && selector.namespace !== "*") {
                throw new Error("Namespaced universal selectors are not yet supported by css-select");
            }
            return next;
        }
    }
}

/**
 * Compiles a selector to an executable function.
 *
 * @param selector Selector to compile.
 * @param options Compilation options.
 * @param context Optional context for the selector.
 */
function compile$1(selector, options, context) {
    const next = compileUnsafe(selector, options, context);
    return ensureIsTag(next, options.adapter);
}
function compileUnsafe(selector, options, context) {
    const token = typeof selector === "string" ? parse$5(selector) : selector;
    return compileToken(token, options, context);
}
function includesScopePseudo(t) {
    return (t.type === SelectorType.Pseudo &&
        (t.name === "scope" ||
            (Array.isArray(t.data) &&
                t.data.some((data) => data.some(includesScopePseudo)))));
}
const DESCENDANT_TOKEN = { type: SelectorType.Descendant };
const FLEXIBLE_DESCENDANT_TOKEN = {
    type: "_flexibleDescendant",
};
const SCOPE_TOKEN = {
    type: SelectorType.Pseudo,
    name: "scope",
    data: null,
};
/*
 * CSS 4 Spec (Draft): 3.4.1. Absolutizing a Relative Selector
 * http://www.w3.org/TR/selectors4/#absolutizing
 */
function absolutize(token, { adapter }, context) {
    // TODO Use better check if the context is a document
    const hasContext = !!(context === null || context === void 0 ? void 0 : context.every((e) => {
        const parent = adapter.isTag(e) && adapter.getParent(e);
        return e === PLACEHOLDER_ELEMENT || (parent && adapter.isTag(parent));
    }));
    for (const t of token) {
        if (t.length > 0 &&
            isTraversal(t[0]) &&
            t[0].type !== SelectorType.Descendant) ;
        else if (hasContext && !t.some(includesScopePseudo)) {
            t.unshift(DESCENDANT_TOKEN);
        }
        else {
            continue;
        }
        t.unshift(SCOPE_TOKEN);
    }
}
function compileToken(token, options, context) {
    var _a;
    token.forEach(sortByProcedure);
    context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
    const isArrayContext = Array.isArray(context);
    const finalContext = context && (Array.isArray(context) ? context : [context]);
    // Check if the selector is relative
    if (options.relativeSelector !== false) {
        absolutize(token, options, finalContext);
    }
    else if (token.some((t) => t.length > 0 && isTraversal(t[0]))) {
        throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    }
    let shouldTestNextSiblings = false;
    const query = token
        .map((rules) => {
        if (rules.length >= 2) {
            const [first, second] = rules;
            if (first.type !== SelectorType.Pseudo ||
                first.name !== "scope") ;
            else if (isArrayContext &&
                second.type === SelectorType.Descendant) {
                rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            }
            else if (second.type === SelectorType.Adjacent ||
                second.type === SelectorType.Sibling) {
                shouldTestNextSiblings = true;
            }
        }
        return compileRules(rules, options, finalContext);
    })
        .reduce(reduceRules, boolbase.falseFunc);
    query.shouldTestNextSiblings = shouldTestNextSiblings;
    return query;
}
function compileRules(rules, options, context) {
    var _a;
    return rules.reduce((previous, rule) => previous === boolbase.falseFunc
        ? boolbase.falseFunc
        : compileGeneralSelector(previous, rule, options, context, compileToken), (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase.trueFunc);
}
function reduceRules(a, b) {
    if (b === boolbase.falseFunc || a === boolbase.trueFunc) {
        return a;
    }
    if (a === boolbase.falseFunc || b === boolbase.trueFunc) {
        return b;
    }
    return function combine(elem) {
        return a(elem) || b(elem);
    };
}

const defaultEquals = (a, b) => a === b;
const defaultOptions = {
    adapter: DomUtils,
    equals: defaultEquals,
};
function convertOptionFormats(options) {
    var _a, _b, _c, _d;
    /*
     * We force one format of options to the other one.
     */
    // @ts-expect-error Default options may have incompatible `Node` / `ElementNode`.
    const opts = options !== null && options !== void 0 ? options : defaultOptions;
    // @ts-expect-error Same as above.
    (_a = opts.adapter) !== null && _a !== void 0 ? _a : (opts.adapter = DomUtils);
    // @ts-expect-error `equals` does not exist on `Options`
    (_b = opts.equals) !== null && _b !== void 0 ? _b : (opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals);
    return opts;
}
function wrapCompile(func) {
    return function addAdapter(selector, options, context) {
        const opts = convertOptionFormats(options);
        return func(selector, opts, context);
    };
}
/**
 * Compiles the query, returns a function.
 */
const compile = wrapCompile(compile$1);
/**
 * Tests whether or not an element is matched by query.
 *
 * @template Node The generic Node type for the DOM adapter being used.
 * @template ElementNode The Node type for elements for the DOM adapter being used.
 * @param elem The element to test if it matches the query.
 * @param query can be either a CSS selector string or a compiled query function.
 * @param [options] options for querying the document.
 * @see compile for supported selector queries.
 * @returns
 */
function is(elem, query, options) {
    const opts = convertOptionFormats(options);
    return (typeof query === "function" ? query : compile$1(query, opts))(elem);
}

const {isArray} = Array;

/* c8 ignore start */
const isTag = ({nodeType}) => nodeType === ELEMENT_NODE;

const existsOne = (test, elements) => elements.some(
  element => isTag(element) && (
    test(element) ||
    existsOne(test, getChildren(element))
  )
);

const getAttributeValue = (element, name) => name === 'class' ?
                            element.classList.value : element.getAttribute(name);

const getChildren = ({childNodes}) => childNodes;

const getName = (element) => {
  const {localName} = element;
  return ignoreCase(element) ? localName.toLowerCase() : localName;
};

const getParent = ({parentNode}) => parentNode;

const getSiblings = element => {
  const {parentNode} = element;
  return parentNode ? getChildren(parentNode) : element;
};

const getText = node => {
  if (isArray(node))
    return node.map(getText).join('');
  if (isTag(node))
    return getText(getChildren(node));
  if (node.nodeType === TEXT_NODE)
    return node.data;
  return '';
};

const hasAttrib = (element, name) => element.hasAttribute(name);

const removeSubsets = nodes => {
  let {length} = nodes;
  while (length--) {
    const node = nodes[length];
    if (length && -1 < nodes.lastIndexOf(node, length - 1)) {
      nodes.splice(length, 1);
      continue;
    }
    for (let {parentNode} = node; parentNode; parentNode = parentNode.parentNode) {
      if (nodes.includes(parentNode)) {
        nodes.splice(length, 1);
        break;
      }
    }
  }
  return nodes;
};

const findAll = (test, nodes) => {
  const matches = [];
  for (const node of nodes) {
    if (isTag(node)) {
      if (test(node))
        matches.push(node);
      matches.push(...findAll(test, getChildren(node)));
    }
  }
  return matches;
};

const findOne = (test, nodes) => {
  for (let node of nodes)
    if (test(node) || (node = findOne(test, getChildren(node))))
      return node;
  return null;
};
/* c8 ignore stop */

const adapter = {
  isTag,
  existsOne,
  getAttributeValue,
  getChildren,
  getName,
  getParent,
  getSiblings,
  getText,
  hasAttrib,
  removeSubsets,
  findAll,
  findOne
};

const prepareMatch = (element, selectors) => compile(
  selectors,
  {
    context: selectors.includes(':scope') ? element : void 0,
    xmlMode: !ignoreCase(element),
    adapter
  }
);

const matches = (element, selectors) => is(
  element,
  selectors,
  {
    strict: true,
    context: selectors.includes(':scope') ? element : void 0,
    xmlMode: !ignoreCase(element),
    adapter
  }
);

const {replace} = '';

// escape
const ca = /[<>&\xA0]/g;

const esca = {
  '\xA0': '&nbsp;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};

const pe = m => esca[m];

/**
 * Safely escape HTML entities such as `&`, `<`, `>` only.
 * @param {string} es the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */
const escape = es => replace.call(es, ca, pe);

/**
 * @implements globalThis.Text
 */
class Text$1 extends CharacterData$1 {
  constructor(ownerDocument, data = '') {
    super(ownerDocument, '#text', TEXT_NODE, data);
  }

  get wholeText() {
    const text = [];
    let {previousSibling, nextSibling} = this;
    while (previousSibling) {
      if (previousSibling.nodeType === TEXT_NODE)
        text.unshift(previousSibling[VALUE]);
      else
        break;
      previousSibling = previousSibling.previousSibling;
    }
    text.push(this[VALUE]);
    while (nextSibling) {
      if (nextSibling.nodeType === TEXT_NODE)
        text.push(nextSibling[VALUE]);
      else
        break;
      nextSibling = nextSibling.nextSibling;
    }
    return text.join('');
  }

  cloneNode() {
    const {ownerDocument, [VALUE]: data} = this;
    return new Text$1(ownerDocument, data);
  }

  toString() { return escape(this[VALUE]); }
}

// https://dom.spec.whatwg.org/#interface-parentnode

const isNode = node => node instanceof Node$1;

const insert = (parentNode, child, nodes) => {
  const {ownerDocument} = parentNode;
  for (const node of nodes)
    parentNode.insertBefore(
      isNode(node) ? node : new Text$1(ownerDocument, node),
      child
    );
};

/** @typedef { import('../interface/element.js').Element & {
    [typeof NEXT]: NodeStruct,
    [typeof PREV]: NodeStruct,
    [typeof START]: NodeStruct,
    nodeType: typeof ATTRIBUTE_NODE | typeof DOCUMENT_FRAGMENT_NODE | typeof ELEMENT_NODE | typeof TEXT_NODE | typeof NODE_END | typeof COMMENT_NODE,
    ownerDocument: Document,
    parentNode: ParentNode,
}} NodeStruct */

class ParentNode extends Node$1 {
  constructor(ownerDocument, localName, nodeType) {
    super(ownerDocument, localName, nodeType);
    this[PRIVATE] = null;
    /** @type {NodeStruct} */
    this[NEXT] = this[END] = {
      [NEXT]: null,
      [PREV]: this,
      [START]: this,
      nodeType: NODE_END,
      ownerDocument: this.ownerDocument,
      parentNode: null
    };
  }

  get childNodes() {
    const childNodes = new NodeList;
    let {firstChild} = this;
    while (firstChild) {
      childNodes.push(firstChild);
      firstChild = nextSibling(firstChild);
    }
    return childNodes;
  }

  get children() {
    const children = new NodeList;
    let {firstElementChild} = this;
    while (firstElementChild) {
      children.push(firstElementChild);
      firstElementChild = nextElementSibling$1(firstElementChild);
    }
    return children;
  }

  /**
   * @returns {NodeStruct | null}
   */
  get firstChild() {
    let {[NEXT]: next, [END]: end} = this;
    while (next.nodeType === ATTRIBUTE_NODE)
      next = next[NEXT];
    return next === end ? null : next;
  }

  /**
   * @returns {NodeStruct | null}
   */
  get firstElementChild() {
    let {firstChild} = this;
    while (firstChild) {
      if (firstChild.nodeType === ELEMENT_NODE)
        return firstChild;
      firstChild = nextSibling(firstChild);
    }
    return null;
  }

  get lastChild() {
    const prev = this[END][PREV];
    switch (prev.nodeType) {
      case NODE_END:
        return prev[START];
      case ATTRIBUTE_NODE:
        return null;
    }
    return prev === this ? null : prev;
  }

  get lastElementChild() {
    let {lastChild} = this;
    while (lastChild) {
      if (lastChild.nodeType === ELEMENT_NODE)
        return lastChild;
      lastChild = previousSibling(lastChild);
    }
    return null;
  }

  get childElementCount() {
    return this.children.length;
  }

  prepend(...nodes) {
    insert(this, this.firstChild, nodes);
  }

  append(...nodes) {
    insert(this, this[END], nodes);
  }

  replaceChildren(...nodes) {
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end && next.nodeType === ATTRIBUTE_NODE)
      next = next[NEXT];
    while (next !== end) {
      const after = getEnd(next)[NEXT];
      next.remove();
      next = after;
    }
    if (nodes.length)
      insert(this, end, nodes);
  }

  getElementsByClassName(className) {
    const elements = new NodeList;
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (
        next.nodeType === ELEMENT_NODE &&
        next.hasAttribute('class') &&
        next.classList.has(className)
      )
        elements.push(next);
      next = next[NEXT];
    }
    return elements;
  }

  getElementsByTagName(tagName) {
    const elements = new NodeList;
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && (
        next.localName === tagName ||
        localCase(next) === tagName
      ))
        elements.push(next);
      next = next[NEXT];
    }
    return elements;
  }

  querySelector(selectors) {
    const matches = prepareMatch(this, selectors);
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && matches(next))
        return next;
      next = next[NEXT];
    }
    return null;
  }

  querySelectorAll(selectors) {
    const matches = prepareMatch(this, selectors);
    const elements = new NodeList;
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && matches(next))
        elements.push(next);
      next = next[NEXT];
    }
    return elements;
  }

  appendChild(node) {
    return this.insertBefore(node, this[END]);
  }

  contains(node) {
    let parentNode = node;
    while (parentNode && parentNode !== this)
      parentNode = parentNode.parentNode;
    return parentNode === this;
  }

  insertBefore(node, before = null) {
    if (node === before)
      return node;
    if (node === this)
      throw new Error('unable to append a node to itself');
    const next = before || this[END];
    switch (node.nodeType) {
      case ELEMENT_NODE:
        node.remove();
        node.parentNode = this;
        knownBoundaries(next[PREV], node, next);
        moCallback(node, null);
        connectedCallback(node);
        break;
      case DOCUMENT_FRAGMENT_NODE: {
        let {[PRIVATE]: parentNode, firstChild, lastChild} = node;
        if (firstChild) {
          knownSegment(next[PREV], firstChild, lastChild, next);
          knownAdjacent(node, node[END]);
          if (parentNode)
            parentNode.replaceChildren();
          do {
            firstChild.parentNode = this;
            moCallback(firstChild, null);
            if (firstChild.nodeType === ELEMENT_NODE)
              connectedCallback(firstChild);
          } while (
            firstChild !== lastChild &&
            (firstChild = nextSibling(firstChild))
          );
        }
        break;
      }
      case TEXT_NODE:
      case COMMENT_NODE:
        node.remove();
      /* eslint no-fallthrough:0 */
      // this covers DOCUMENT_TYPE_NODE too
      default:
        node.parentNode = this;
        knownSiblings(next[PREV], node, next);
        moCallback(node, null);
        break;
    }
    return node;
  }

  normalize() {
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      const {[NEXT]: $next, [PREV]: $prev, nodeType} = next;
      if (nodeType === TEXT_NODE) {
        if (!next[VALUE])
          next.remove();
        else if ($prev && $prev.nodeType === TEXT_NODE) {
          $prev.textContent += next.textContent;
          next.remove();
        }
      }
      next = $next;
    }
  }

  removeChild(node) {
    if (node.parentNode !== this)
      throw new Error('node is not a child');
    node.remove();
    return node;
  }

  replaceChild(node, replaced) {
    const next = getEnd(replaced)[NEXT];
    replaced.remove();
    this.insertBefore(node, next);
    return replaced;
  }
}

// https://dom.spec.whatwg.org/#interface-nonelementparentnode

class NonElementParentNode extends ParentNode {
  getElementById(id) {
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && next.id === id)
        return next;
      next = next[NEXT];
    }
    return null;
  }

  cloneNode(deep) {
    const {ownerDocument, constructor} = this;
    const nonEPN = new constructor(ownerDocument);
    if (deep) {
      const {[END]: end} = nonEPN;
      for (const node of this.childNodes)
        nonEPN.insertBefore(node.cloneNode(deep), end);
    }
    return nonEPN; 
  }

  toString() {
    const {childNodes, localName} = this;
    return `<${localName}>${childNodes.join('')}</${localName}>`;
  }

  toJSON() {
    const json = [];
    nonElementAsJSON(this, json);
    return json;
  }
}

/**
 * @implements globalThis.DocumentFragment
 */
class DocumentFragment$1 extends NonElementParentNode {
  constructor(ownerDocument) {
    super(ownerDocument, '#document-fragment', DOCUMENT_FRAGMENT_NODE);
  }
}

/**
 * @implements globalThis.DocumentType
 */
class DocumentType$1 extends Node$1 {
  constructor(ownerDocument, name, publicId = '', systemId = '') {
    super(ownerDocument, '#document-type', DOCUMENT_TYPE_NODE);
    this.name = name;
    this.publicId = publicId;
    this.systemId = systemId;
  }

  cloneNode() {
    const {ownerDocument, name, publicId, systemId} = this;
    return new DocumentType$1(ownerDocument, name, publicId, systemId);
  }

  toString() {
    const {name, publicId, systemId} = this;
    const hasPublic = 0 < publicId.length;
    const str = [name];
    if (hasPublic)
      str.push('PUBLIC', `"${publicId}"`);
    if (systemId.length) {
      if (!hasPublic)
        str.push('SYSTEM');
      str.push(`"${systemId}"`);
    }
    return `<!DOCTYPE ${str.join(' ')}>`;
  }

  toJSON() {
    const json = [];
    documentTypeAsJSON(this, json);
    return json;
  }
}

/**
 * @param {Node} node
 * @returns {String}
 */
const getInnerHtml = node => node.childNodes.join('');

/**
 * @param {Node} node
 * @param {String} html
 */
const setInnerHtml = (node, html) => {
  const {ownerDocument} = node;
  const {constructor} = ownerDocument;
  const document = new constructor;
  document[CUSTOM_ELEMENTS] = ownerDocument[CUSTOM_ELEMENTS];
  const {childNodes} = parseFromString(document, ignoreCase(node), html);

  node.replaceChildren(...childNodes);
};

var uhyphen = camel => camel.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z])([A-Z]))/g, '$2$5-$3$6')
                             .toLowerCase();

const refs$1 = new WeakMap;

const key = name => `data-${uhyphen(name)}`;
const prop = name => name.slice(5).replace(/-([a-z])/g, (_, $1) => $1.toUpperCase());

const handler$2 = {
  get(dataset, name) {
    if (name in dataset)
      return refs$1.get(dataset).getAttribute(key(name));
  },

  set(dataset, name, value) {
    dataset[name] = value;
    refs$1.get(dataset).setAttribute(key(name), value);
    return true;
  },

  deleteProperty(dataset, name) {
    if (name in dataset)
      refs$1.get(dataset).removeAttribute(key(name));
    return delete dataset[name];
  }
};

/**
 * @implements globalThis.DOMStringMap
 */
class DOMStringMap {
  /**
   * @param {Element} ref
   */
  constructor(ref) {
    for (const {name, value} of ref.attributes) {
      if (/^data-/.test(name))
        this[prop(name)] = value;
    }
    refs$1.set(this, ref);
    return new Proxy(this, handler$2);
  }
}

setPrototypeOf(DOMStringMap.prototype, null);

const {add} = Set.prototype;
const addTokens = (self, tokens) => {
  for (const token of tokens) {
    if (token)
      add.call(self, token);
  }
};

const update = ({[OWNER_ELEMENT]: ownerElement, value}) => {
  const attribute = ownerElement.getAttributeNode('class');
  if (attribute)
    attribute.value = value;
  else
    setAttribute(
      ownerElement,
      new Attr$1(ownerElement.ownerDocument, 'class', value)
    );
};

/**
 * @implements globalThis.DOMTokenList
 */
class DOMTokenList extends Set {

  constructor(ownerElement) {
    super();
    this[OWNER_ELEMENT] = ownerElement;
    const attribute = ownerElement.getAttributeNode('class');
    if (attribute)
      addTokens(this, attribute.value.split(/\s+/));
  }

  get length() { return this.size; }

  get value() { return [...this].join(' '); }

  /**
   * @param  {...string} tokens
   */
  add(...tokens) {
    addTokens(this, tokens);
    update(this);
  }

  /**
   * @param {string} token
   */
  contains(token) { return this.has(token); }

  /**
   * @param  {...string} tokens
   */
  remove(...tokens) {
    for (const token of tokens)
      this.delete(token);
    update(this);
  }

  /**
   * @param {string} token
   * @param {boolean?} force
   */
  toggle(token, force) {
    if (this.has(token)) {
      if (force)
        return true;
      this.delete(token);
      update(this);
    }
    else if (force || arguments.length === 1) {
      super.add(token);
      update(this);
      return true;
    }
    return false;
  }

  /**
   * @param {string} token
   * @param {string} newToken
   */
  replace(token, newToken) {
    if (this.has(token)) {
      this.delete(token);
      super.add(newToken);
      update(this);
      return true;
    }
    return false;
  }

  /**
   * @param {string} token
   */
  supports() { return true; }
}

const refs = new WeakMap;

const getKeys = style => [...style.keys()].filter(key => key !== PRIVATE);

const updateKeys = style => {
  const attr = refs.get(style).getAttributeNode('style');
  if (!attr || attr[CHANGED] || style.get(PRIVATE) !== attr) {
    style.clear();
    if (attr) {
      style.set(PRIVATE, attr);
      for (const rule of attr[VALUE].split(/\s*;\s*/)) {
        let [key, ...rest] = rule.split(':');
        if (rest.length > 0) {
          key = key.trim();
          const value = rest.join(':').trim();
          if (key && value)
            style.set(key, value);
        }
      }
    }
  }
  return attr;
};

const handler$1 = {
  get(style, name) {
    if (name in prototype)
      return style[name];
    updateKeys(style);
    if (name === 'length')
      return getKeys(style).length;
    if (/^\d+$/.test(name))
      return getKeys(style)[name];
    return style.get(uhyphen(name));
  },

  set(style, name, value) {
    if (name === 'cssText')
      style[name] = value;
    else {
      let attr = updateKeys(style);
      if (value == null)
        style.delete(uhyphen(name));
      else
        style.set(uhyphen(name), value);
      if (!attr) {
        const element = refs.get(style);
        attr = element.ownerDocument.createAttribute('style');
        element.setAttributeNode(attr);
        style.set(PRIVATE, attr);
      }
      attr[CHANGED] = false;
      attr[VALUE] = style.toString();
    }
    return true;
  }
};

/**
 * @implements globalThis.CSSStyleDeclaration
 */
class CSSStyleDeclaration$1 extends Map {
  constructor(element) {
    super();
    refs.set(this, element);
    /* c8 ignore start */
    return new Proxy(this, handler$1);
    /* c8 ignore stop */
  }

  get cssText() {
    return this.toString();
  }

  set cssText(value) {
    refs.get(this).setAttribute('style', value);
  }

  getPropertyValue(name) {
    const self = this[PRIVATE];
    return handler$1.get(self, name);
  }

  setProperty(name, value) {
    const self = this[PRIVATE];
    handler$1.set(self, name, value);
  }

  removeProperty(name) {
    const self = this[PRIVATE];
    handler$1.set(self, name, null);
  }

  [Symbol.iterator]() {
    const keys = getKeys(this[PRIVATE]);
    const {length} = keys;
    let i = 0;
    return {
      next() {
        const done = i === length;
        return {done, value: done ? null : keys[i++]};
      }
    };
  }

  get[PRIVATE]() { return this; }

  toString() {
    const self = this[PRIVATE];
    updateKeys(self);
    const cssText = [];
    self.forEach(push, cssText);
    return cssText.join(';');
  }
}

const {prototype} = CSSStyleDeclaration$1;

function push(value, key) {
  if (key !== PRIVATE)
    this.push(`${key}:${value}`);
}

// https://dom.spec.whatwg.org/#interface-event

/* c8 ignore start */

// Node 15 has Event but 14 and 12 don't
const BUBBLING_PHASE = 3;
const AT_TARGET = 2;
const CAPTURING_PHASE = 1;
const NONE = 0;

/**
 * @implements globalThis.Event
 */
class GlobalEvent {
    static get BUBBLING_PHASE() { return BUBBLING_PHASE; }
    static get AT_TARGET() { return AT_TARGET; }
    static get CAPTURING_PHASE() { return CAPTURING_PHASE; }
    static get NONE() { return NONE; }

    constructor(type, eventInitDict = {}) {
      this.type = type;
      this.bubbles = !!eventInitDict.bubbles;
      this.cancelBubble = false;
      this._stopImmediatePropagationFlag = false;
      this.cancelable = !!eventInitDict.cancelable;
      this.eventPhase = this.NONE;
      this.timeStamp = Date.now();
      this.defaultPrevented = false;
      this.originalTarget = null;
      this.returnValue = null;
      this.srcElement = null;
      this.target = null;
      this._path = [];
    }

    get BUBBLING_PHASE() { return BUBBLING_PHASE; }
    get AT_TARGET() { return AT_TARGET; }
    get CAPTURING_PHASE() { return CAPTURING_PHASE; }
    get NONE() { return NONE; }

    preventDefault() { this.defaultPrevented = true; }

    // simplified implementation, should be https://dom.spec.whatwg.org/#dom-event-composedpath
    composedPath() {
      return this._path;
    }

    stopPropagation() {
      this.cancelBubble = true;
    }
    
    stopImmediatePropagation() {
      this.stopPropagation();
      this._stopImmediatePropagationFlag = true;
    }
  }

/* c8 ignore stop */

/**
 * @implements globalThis.NamedNodeMap
 */
class NamedNodeMap extends Array {
  constructor(ownerElement) {
    super();
    this.ownerElement = ownerElement;
  }

  getNamedItem(name) {
    return this.ownerElement.getAttributeNode(name);
  }

  setNamedItem(attr) {
    this.ownerElement.setAttributeNode(attr);
    this.unshift(attr);
  }

  removeNamedItem(name) {
    const item = this.getNamedItem(name);
    this.ownerElement.removeAttribute(name);
    this.splice(this.indexOf(item), 1);
  }

  item(index) {
    return index < this.length ? this[index] : null;
  }

  /* c8 ignore start */
  getNamedItemNS(_, name) {
    return this.getNamedItem(name);
  }

  setNamedItemNS(_, attr) {
    return this.setNamedItem(attr);
  }

  removeNamedItemNS(_, name) {
    return this.removeNamedItem(name);
  }
  /* c8 ignore stop */
}

/**
 * @implements globalThis.ShadowRoot
 */
class ShadowRoot$1 extends NonElementParentNode {
  constructor(host) {
    super(host.ownerDocument, '#shadow-root', DOCUMENT_FRAGMENT_NODE);
    this.host = host;
  }

  get innerHTML() {
    return getInnerHtml(this);
  }
  set innerHTML(html) {
    setInnerHtml(this, html);
  }
}

// https://dom.spec.whatwg.org/#interface-element

// <utils>
const attributesHandler = {
  get(target, key) {
    return key in target ? target[key] : target.find(({name}) => name === key);
  }
};

const create = (ownerDocument, element, localName)  => {
  if ('ownerSVGElement' in element) {
    const svg = ownerDocument.createElementNS(SVG_NAMESPACE, localName);
    svg.ownerSVGElement = element.ownerSVGElement;
    return svg;
  }
  return ownerDocument.createElement(localName);
};

const isVoid = ({localName, ownerDocument}) => {
  return ownerDocument[MIME].voidElements.test(localName);
};

// </utils>

/**
 * @implements globalThis.Element
 */
class Element$1 extends ParentNode {
  constructor(ownerDocument, localName) {
    super(ownerDocument, localName, ELEMENT_NODE);
    this[CLASS_LIST] = null;
    this[DATASET] = null;
    this[STYLE] = null;
  }

  // <Mixins>
  get isConnected() { return isConnected(this); }
  get parentElement() { return parentElement(this); }
  get previousSibling() { return previousSibling(this); }
  get nextSibling() { return nextSibling(this); }

  get previousElementSibling() { return previousElementSibling(this); }
  get nextElementSibling() { return nextElementSibling$1(this); }

  before(...nodes) { before(this, nodes); }
  after(...nodes) { after(this, nodes); }
  replaceWith(...nodes) { replaceWith(this, nodes); }
  remove() { remove(this[PREV], this, this[END][NEXT]); }
  // </Mixins>

  // <specialGetters>
  get id() { return stringAttribute.get(this, 'id'); }
  set id(value) { stringAttribute.set(this, 'id', value); }

  get className() { return this.classList.value; }
  set className(value) {
    const {classList} = this;
    classList.clear();
    classList.add(...value.split(/\s+/));
  }

  get nodeName() { return localCase(this); }
  get tagName() { return localCase(this); }

  get classList() {
    return this[CLASS_LIST] || (
      this[CLASS_LIST] = new DOMTokenList(this)
    );
  }

  get dataset() {
    return this[DATASET] || (
      this[DATASET] = new DOMStringMap(this)
    );
  }

  get nonce() { return stringAttribute.get(this, 'nonce'); }
  set nonce(value) { stringAttribute.set(this, 'nonce', value); }

  get style() {
    return this[STYLE] || (
      this[STYLE] = new CSSStyleDeclaration$1(this)
    );
  }

  get tabIndex() { return numericAttribute.get(this, 'tabindex') || -1; }
  set tabIndex(value) { numericAttribute.set(this, 'tabindex', value); }
  // </specialGetters>


  // <contentRelated>
  get innerText() {
    const text = [];
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === TEXT_NODE) {
        text.push(next.textContent.replace(/\s+/g, ' '));
      } else if(
        text.length && next[NEXT] != end &&
        BLOCK_ELEMENTS.has(next.tagName)
      ) {
        text.push('\n');
      }
      next = next[NEXT];
    }
    return text.join('');
  }

  /**
   * @returns {String}
   */
  get textContent() {
    const text = [];
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === TEXT_NODE)
        text.push(next.textContent);
      next = next[NEXT];
    }
    return text.join('');
  }

  set textContent(text) {
    this.replaceChildren();
    if (text)
      this.appendChild(new Text$1(this.ownerDocument, text));
  }

  get innerHTML() {
    return getInnerHtml(this);
  }
  set innerHTML(html) {
    setInnerHtml(this, html);
  }

  get outerHTML() { return this.toString(); }
  set outerHTML(html) {
    const template = this.ownerDocument.createElement('');
    template.innerHTML = html;
    this.replaceWith(...template.childNodes);
  }
  // </contentRelated>

  // <attributes>
  get attributes() {
    const attributes = new NamedNodeMap(this);
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      attributes.push(next);
      next = next[NEXT];
    }
    return new Proxy(attributes, attributesHandler);
  }

  focus() { this.dispatchEvent(new GlobalEvent('focus')); }

  getAttribute(name) {
    if (name === 'class')
      return this.className;
    const attribute = this.getAttributeNode(name);
    return attribute && attribute.value;
  }

  getAttributeNode(name) {
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next.name === name)
        return next;
      next = next[NEXT];
    }
    return null;
  }

  getAttributeNames() {
    const attributes = new NodeList;
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      attributes.push(next.name);
      next = next[NEXT];
    }
    return attributes;
  }

  hasAttribute(name) { return !!this.getAttributeNode(name); }
  hasAttributes() { return this[NEXT].nodeType === ATTRIBUTE_NODE; }

  removeAttribute(name) {
    if (name === 'class' && this[CLASS_LIST])
        this[CLASS_LIST].clear();
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next.name === name) {
        removeAttribute(this, next);
        return;
      }
      next = next[NEXT];
    }
  }

  removeAttributeNode(attribute) {
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next === attribute) {
        removeAttribute(this, next);
        return;
      }
      next = next[NEXT];
    }
  }

  setAttribute(name, value) {
    if (name === 'class')
      this.className = value;
    else {
      const attribute = this.getAttributeNode(name);
      if (attribute)
        attribute.value = value;
      else
        setAttribute(this, new Attr$1(this.ownerDocument, name, value));
    }
  }

  setAttributeNode(attribute) {
    const {name} = attribute;
    const previously = this.getAttributeNode(name);
    if (previously !== attribute) {
      if (previously)
        this.removeAttributeNode(previously);
      const {ownerElement} = attribute;
      if (ownerElement)
        ownerElement.removeAttributeNode(attribute);
      setAttribute(this, attribute);
    }
    return previously;
  }

  toggleAttribute(name, force) {
    if (this.hasAttribute(name)) {
      if (!force) {
        this.removeAttribute(name);
        return false;
      }
      return true;
    }
    else if (force || arguments.length === 1) {
      this.setAttribute(name, '');
      return true;
    }
    return false;
  }
  // </attributes>

  // <ShadowDOM>
  get shadowRoot() {
    if (shadowRoots.has(this)) {
      const {mode, shadowRoot} = shadowRoots.get(this);
      if (mode === 'open')
        return shadowRoot;
    }
    return null;
  }

  attachShadow(init) {
    if (shadowRoots.has(this))
      throw new Error('operation not supported');
    // TODO: shadowRoot should be likely a specialized class that extends DocumentFragment
    //       but until DSD is out, I am not sure I should spend time on this.
    const shadowRoot = new ShadowRoot$1(this);
    shadowRoot.append(...this.childNodes);
    shadowRoots.set(this, {
      mode: init.mode,
      shadowRoot
    });
    return shadowRoot;
  }
  // </ShadowDOM>

  // <selectors>
  matches(selectors) { return matches(this, selectors); }
  closest(selectors) {
    let parentElement = this;
    const matches = prepareMatch(parentElement, selectors);
    while (parentElement && !matches(parentElement))
      parentElement = parentElement.parentElement;
    return parentElement;
  }
  // </selectors>

  // <insertAdjacent>
  insertAdjacentElement(position, element) {
    const {parentElement} = this;
    switch (position) {
      case 'beforebegin':
        if (parentElement) {
          parentElement.insertBefore(element, this);
          break;
        }
        return null;
      case 'afterbegin':
        this.insertBefore(element, this.firstChild);
        break;
      case 'beforeend':
        this.insertBefore(element, null);
        break;
      case 'afterend':
        if (parentElement) {
          parentElement.insertBefore(element, this.nextSibling);
          break;
        }
        return null;
    }
    return element;
  }

  insertAdjacentHTML(position, html) {
    const template = this.ownerDocument.createElement('template');
    template.innerHTML = html;
    this.insertAdjacentElement(position, template.content);
  }

  insertAdjacentText(position, text) {
    const node = this.ownerDocument.createTextNode(text);
    this.insertAdjacentElement(position, node);
  }
  // </insertAdjacent>

  cloneNode(deep = false) {
    const {ownerDocument, localName} = this;
    const addNext = next => {
      next.parentNode = parentNode;
      knownAdjacent($next, next);
      $next = next;
    };
    const clone = create(ownerDocument, this, localName);
    let parentNode = clone, $next = clone;
    let {[NEXT]: next, [END]: prev} = this;
    while (next !== prev && (deep || next.nodeType === ATTRIBUTE_NODE)) {
      switch (next.nodeType) {
        case NODE_END:
          knownAdjacent($next, parentNode[END]);
          $next = parentNode[END];
          parentNode = parentNode.parentNode;
          break;
        case ELEMENT_NODE: {
          const node = create(ownerDocument, next, next.localName);
          addNext(node);
          parentNode = node;
          break;
        }
        case ATTRIBUTE_NODE: {
          const attr = next.cloneNode(deep);
          attr.ownerElement = parentNode;
          addNext(attr);
          break;
        }
        case TEXT_NODE:
        case COMMENT_NODE:
          addNext(next.cloneNode(deep));
          break;
      }
      next = next[NEXT];
    }
    knownAdjacent($next, clone[END]);
    return clone;
  }

  // <custom>
  toString() {
    const out = [];
    const {[END]: end} = this;
    let next = {[NEXT]: this};
    let isOpened = false;
    do {
      next = next[NEXT];
      switch (next.nodeType) {
        case ATTRIBUTE_NODE: {
          const attr = ' ' + next;
          switch (attr) {
            case ' id':
            case ' class':
            case ' style':
              break;
            default:
              out.push(attr);
          }
          break;
        }
        case NODE_END: {
          const start = next[START];
          if (isOpened) {
            if ('ownerSVGElement' in start)
              out.push(' />');
            else if (isVoid(start))
              out.push(ignoreCase(start) ? '>' : ' />');
            else
              out.push(`></${start.localName}>`);
            isOpened = false;
          }
          else
            out.push(`</${start.localName}>`);
          break;
        }
        case ELEMENT_NODE:
          if (isOpened)
            out.push('>');
          if (next.toString !== this.toString) {
            out.push(next.toString());
            next = next[END];
            isOpened = false;
          }
          else {
            out.push(`<${next.localName}`);
            isOpened = true;
          }
          break;
        case TEXT_NODE:
        case COMMENT_NODE:
          out.push((isOpened ? '>' : '') + next);
          isOpened = false;
          break;
      }
    } while (next !== end);
    return out.join('');
  }

  toJSON() {
    const json = [];
    elementAsJSON(this, json);
    return json;
  }
  // </custom>


  /* c8 ignore start */
  getAttributeNS(_, name) { return this.getAttribute(name); }
  getElementsByTagNameNS(_, name) { return this.getElementsByTagName(name); }
  hasAttributeNS(_, name) { return this.hasAttribute(name); }
  removeAttributeNS(_, name) { this.removeAttribute(name); }
  setAttributeNS(_, name, value) { this.setAttribute(name, value); }
  setAttributeNodeNS(attr) { return this.setAttributeNode(attr); }
  /* c8 ignore stop */
}

const classNames = new WeakMap;

const handler = {
  get(target, name) {
    return target[name];
  },
  set(target, name, value) {
    target[name] = value;
    return true;
  }
};

/**
 * @implements globalThis.SVGElement
 */
class SVGElement$1 extends Element$1 {
  constructor(ownerDocument, localName, ownerSVGElement = null) {
    super(ownerDocument, localName);
    this.ownerSVGElement = ownerSVGElement;
  }

  get className() {
    if (!classNames.has(this))
      classNames.set(this, new Proxy({baseVal: '', animVal: ''}, handler));
    return classNames.get(this);
  }

  /* c8 ignore start */
  set className(value) {
    const {classList} = this;
    classList.clear();
    classList.add(...value.split(/\s+/));
  }
  /* c8 ignore stop */

  getAttribute(name) {
    return name === 'class' ?
      [...this.classList].join(' ') :
      super.getAttribute(name);
  }

  setAttribute(name, value) {
    if (name === 'class')
      this.className = value;
    else if (name === 'style') {
      const {className} = this;
      className.baseVal = className.animVal = value;
    }
    super.setAttribute(name, value);
  }
}

/* c8 ignore start */
const illegalConstructor = () => {
  throw new TypeError('Illegal constructor');
};

function Attr() { illegalConstructor(); }
setPrototypeOf(Attr, Attr$1);
Attr.prototype = Attr$1.prototype;

function CharacterData() { illegalConstructor(); }
setPrototypeOf(CharacterData, CharacterData$1);
CharacterData.prototype = CharacterData$1.prototype;

function Comment() { illegalConstructor(); }
setPrototypeOf(Comment, Comment$2);
Comment.prototype = Comment$2.prototype;

function DocumentFragment() { illegalConstructor(); }
setPrototypeOf(DocumentFragment, DocumentFragment$1);
DocumentFragment.prototype = DocumentFragment$1.prototype;

function DocumentType() { illegalConstructor(); }
setPrototypeOf(DocumentType, DocumentType$1);
DocumentType.prototype = DocumentType$1.prototype;

function Element() { illegalConstructor(); }
setPrototypeOf(Element, Element$1);
Element.prototype = Element$1.prototype;

function Node() { illegalConstructor(); }
setPrototypeOf(Node, Node$1);
Node.prototype = Node$1.prototype;

function ShadowRoot() { illegalConstructor(); }
setPrototypeOf(ShadowRoot, ShadowRoot$1);
ShadowRoot.prototype = ShadowRoot$1.prototype;

function Text() { illegalConstructor(); }
setPrototypeOf(Text, Text$1);
Text.prototype = Text$1.prototype;

function SVGElement() { illegalConstructor(); }
setPrototypeOf(SVGElement, SVGElement$1);
SVGElement.prototype = SVGElement$1.prototype;
/* c8 ignore stop */

const Facades = {
  Attr,
  CharacterData,
  Comment,
  DocumentFragment,
  DocumentType,
  Element,
  Node,
  ShadowRoot,
  Text,
  SVGElement
};

const Level0 = new WeakMap;
const level0 = {
  get(element, name) {
    return Level0.has(element) && Level0.get(element)[name] || null;
  },
  set(element, name, value) {
    if (!Level0.has(element))
      Level0.set(element, {});
    const handlers = Level0.get(element);
    const type = name.slice(2);
    if (handlers[name])
      element.removeEventListener(type, handlers[name], false);
    if ((handlers[name] = value))
      element.addEventListener(type, value, false);
  }
};

/**
 * @implements globalThis.HTMLElement
 */
class HTMLElement extends Element$1 {

  static get observedAttributes() { return []; }

  constructor(ownerDocument = null, localName = '') {
    super(ownerDocument, localName);

    const ownerLess = !ownerDocument;
    let options;

    if (ownerLess) {
      const {constructor: Class} = this;
      if (!Classes.has(Class))
        throw new Error('unable to initialize this Custom Element');
      ({ownerDocument, localName, options} = Classes.get(Class));
    }

    if (ownerDocument[UPGRADE]) {
      const {element, values} = ownerDocument[UPGRADE];
      ownerDocument[UPGRADE] = null;
      for (const [key, value] of values)
        element[key] = value;
      return element;
    }

    if (ownerLess) {
      this.ownerDocument = this[END].ownerDocument = ownerDocument;
      this.localName = localName;
      customElements.set(this, {connected: false});
      if (options.is)
        this.setAttribute('is', options.is);
    }
  }

  /* c8 ignore start */

  /* TODO: what about these?
  offsetHeight
  offsetLeft
  offsetParent
  offsetTop
  offsetWidth
  */

  blur() { this.dispatchEvent(new GlobalEvent('blur')); }
  click() { this.dispatchEvent(new GlobalEvent('click')); }

  // Boolean getters
  get accessKeyLabel() {
    const {accessKey} = this;
    return accessKey && `Alt+Shift+${accessKey}`;
  }
  get isContentEditable() { return this.hasAttribute('contenteditable'); }

  // Boolean Accessors
  get contentEditable() { return booleanAttribute.get(this, 'contenteditable'); }
  set contentEditable(value) { booleanAttribute.set(this, 'contenteditable', value); }
  get draggable() { return booleanAttribute.get(this, 'draggable'); }
  set draggable(value) { booleanAttribute.set(this, 'draggable', value); }
  get hidden() { return booleanAttribute.get(this, 'hidden'); }
  set hidden(value) { booleanAttribute.set(this, 'hidden', value); }
  get spellcheck() { return booleanAttribute.get(this, 'spellcheck'); }
  set spellcheck(value) { booleanAttribute.set(this, 'spellcheck', value); }

  // String Accessors
  get accessKey() { return stringAttribute.get(this, 'accesskey'); }
  set accessKey(value) { stringAttribute.set(this, 'accesskey', value); }
  get dir() { return stringAttribute.get(this, 'dir'); }
  set dir(value) { stringAttribute.set(this, 'dir', value); }
  get lang() { return stringAttribute.get(this, 'lang'); }
  set lang(value) { stringAttribute.set(this, 'lang', value); }
  get title() { return stringAttribute.get(this, 'title'); }
  set title(value) { stringAttribute.set(this, 'title', value); }

  // DOM Level 0
  get onabort() { return level0.get(this, 'onabort'); }
  set onabort(value) { level0.set(this, 'onabort', value); }

  get onblur() { return level0.get(this, 'onblur'); }
  set onblur(value) { level0.set(this, 'onblur', value); }

  get oncancel() { return level0.get(this, 'oncancel'); }
  set oncancel(value) { level0.set(this, 'oncancel', value); }

  get oncanplay() { return level0.get(this, 'oncanplay'); }
  set oncanplay(value) { level0.set(this, 'oncanplay', value); }

  get oncanplaythrough() { return level0.get(this, 'oncanplaythrough'); }
  set oncanplaythrough(value) { level0.set(this, 'oncanplaythrough', value); }

  get onchange() { return level0.get(this, 'onchange'); }
  set onchange(value) { level0.set(this, 'onchange', value); }

  get onclick() { return level0.get(this, 'onclick'); }
  set onclick(value) { level0.set(this, 'onclick', value); }

  get onclose() { return level0.get(this, 'onclose'); }
  set onclose(value) { level0.set(this, 'onclose', value); }

  get oncontextmenu() { return level0.get(this, 'oncontextmenu'); }
  set oncontextmenu(value) { level0.set(this, 'oncontextmenu', value); }

  get oncuechange() { return level0.get(this, 'oncuechange'); }
  set oncuechange(value) { level0.set(this, 'oncuechange', value); }

  get ondblclick() { return level0.get(this, 'ondblclick'); }
  set ondblclick(value) { level0.set(this, 'ondblclick', value); }

  get ondrag() { return level0.get(this, 'ondrag'); }
  set ondrag(value) { level0.set(this, 'ondrag', value); }

  get ondragend() { return level0.get(this, 'ondragend'); }
  set ondragend(value) { level0.set(this, 'ondragend', value); }

  get ondragenter() { return level0.get(this, 'ondragenter'); }
  set ondragenter(value) { level0.set(this, 'ondragenter', value); }

  get ondragleave() { return level0.get(this, 'ondragleave'); }
  set ondragleave(value) { level0.set(this, 'ondragleave', value); }

  get ondragover() { return level0.get(this, 'ondragover'); }
  set ondragover(value) { level0.set(this, 'ondragover', value); }

  get ondragstart() { return level0.get(this, 'ondragstart'); }
  set ondragstart(value) { level0.set(this, 'ondragstart', value); }

  get ondrop() { return level0.get(this, 'ondrop'); }
  set ondrop(value) { level0.set(this, 'ondrop', value); }

  get ondurationchange() { return level0.get(this, 'ondurationchange'); }
  set ondurationchange(value) { level0.set(this, 'ondurationchange', value); }

  get onemptied() { return level0.get(this, 'onemptied'); }
  set onemptied(value) { level0.set(this, 'onemptied', value); }

  get onended() { return level0.get(this, 'onended'); }
  set onended(value) { level0.set(this, 'onended', value); }

  get onerror() { return level0.get(this, 'onerror'); }
  set onerror(value) { level0.set(this, 'onerror', value); }

  get onfocus() { return level0.get(this, 'onfocus'); }
  set onfocus(value) { level0.set(this, 'onfocus', value); }

  get oninput() { return level0.get(this, 'oninput'); }
  set oninput(value) { level0.set(this, 'oninput', value); }

  get oninvalid() { return level0.get(this, 'oninvalid'); }
  set oninvalid(value) { level0.set(this, 'oninvalid', value); }

  get onkeydown() { return level0.get(this, 'onkeydown'); }
  set onkeydown(value) { level0.set(this, 'onkeydown', value); }

  get onkeypress() { return level0.get(this, 'onkeypress'); }
  set onkeypress(value) { level0.set(this, 'onkeypress', value); }

  get onkeyup() { return level0.get(this, 'onkeyup'); }
  set onkeyup(value) { level0.set(this, 'onkeyup', value); }

  get onload() { return level0.get(this, 'onload'); }
  set onload(value) { level0.set(this, 'onload', value); }

  get onloadeddata() { return level0.get(this, 'onloadeddata'); }
  set onloadeddata(value) { level0.set(this, 'onloadeddata', value); }

  get onloadedmetadata() { return level0.get(this, 'onloadedmetadata'); }
  set onloadedmetadata(value) { level0.set(this, 'onloadedmetadata', value); }

  get onloadstart() { return level0.get(this, 'onloadstart'); }
  set onloadstart(value) { level0.set(this, 'onloadstart', value); }

  get onmousedown() { return level0.get(this, 'onmousedown'); }
  set onmousedown(value) { level0.set(this, 'onmousedown', value); }

  get onmouseenter() { return level0.get(this, 'onmouseenter'); }
  set onmouseenter(value) { level0.set(this, 'onmouseenter', value); }

  get onmouseleave() { return level0.get(this, 'onmouseleave'); }
  set onmouseleave(value) { level0.set(this, 'onmouseleave', value); }

  get onmousemove() { return level0.get(this, 'onmousemove'); }
  set onmousemove(value) { level0.set(this, 'onmousemove', value); }

  get onmouseout() { return level0.get(this, 'onmouseout'); }
  set onmouseout(value) { level0.set(this, 'onmouseout', value); }

  get onmouseover() { return level0.get(this, 'onmouseover'); }
  set onmouseover(value) { level0.set(this, 'onmouseover', value); }

  get onmouseup() { return level0.get(this, 'onmouseup'); }
  set onmouseup(value) { level0.set(this, 'onmouseup', value); }

  get onmousewheel() { return level0.get(this, 'onmousewheel'); }
  set onmousewheel(value) { level0.set(this, 'onmousewheel', value); }

  get onpause() { return level0.get(this, 'onpause'); }
  set onpause(value) { level0.set(this, 'onpause', value); }

  get onplay() { return level0.get(this, 'onplay'); }
  set onplay(value) { level0.set(this, 'onplay', value); }

  get onplaying() { return level0.get(this, 'onplaying'); }
  set onplaying(value) { level0.set(this, 'onplaying', value); }

  get onprogress() { return level0.get(this, 'onprogress'); }
  set onprogress(value) { level0.set(this, 'onprogress', value); }

  get onratechange() { return level0.get(this, 'onratechange'); }
  set onratechange(value) { level0.set(this, 'onratechange', value); }

  get onreset() { return level0.get(this, 'onreset'); }
  set onreset(value) { level0.set(this, 'onreset', value); }

  get onresize() { return level0.get(this, 'onresize'); }
  set onresize(value) { level0.set(this, 'onresize', value); }

  get onscroll() { return level0.get(this, 'onscroll'); }
  set onscroll(value) { level0.set(this, 'onscroll', value); }

  get onseeked() { return level0.get(this, 'onseeked'); }
  set onseeked(value) { level0.set(this, 'onseeked', value); }

  get onseeking() { return level0.get(this, 'onseeking'); }
  set onseeking(value) { level0.set(this, 'onseeking', value); }

  get onselect() { return level0.get(this, 'onselect'); }
  set onselect(value) { level0.set(this, 'onselect', value); }

  get onshow() { return level0.get(this, 'onshow'); }
  set onshow(value) { level0.set(this, 'onshow', value); }

  get onstalled() { return level0.get(this, 'onstalled'); }
  set onstalled(value) { level0.set(this, 'onstalled', value); }

  get onsubmit() { return level0.get(this, 'onsubmit'); }
  set onsubmit(value) { level0.set(this, 'onsubmit', value); }

  get onsuspend() { return level0.get(this, 'onsuspend'); }
  set onsuspend(value) { level0.set(this, 'onsuspend', value); }

  get ontimeupdate() { return level0.get(this, 'ontimeupdate'); }
  set ontimeupdate(value) { level0.set(this, 'ontimeupdate', value); }

  get ontoggle() { return level0.get(this, 'ontoggle'); }
  set ontoggle(value) { level0.set(this, 'ontoggle', value); }

  get onvolumechange() { return level0.get(this, 'onvolumechange'); }
  set onvolumechange(value) { level0.set(this, 'onvolumechange', value); }

  get onwaiting() { return level0.get(this, 'onwaiting'); }
  set onwaiting(value) { level0.set(this, 'onwaiting', value); }

  get onauxclick() { return level0.get(this, 'onauxclick'); }
  set onauxclick(value) { level0.set(this, 'onauxclick', value); }

  get ongotpointercapture() { return level0.get(this, 'ongotpointercapture'); }
  set ongotpointercapture(value) { level0.set(this, 'ongotpointercapture', value); }

  get onlostpointercapture() { return level0.get(this, 'onlostpointercapture'); }
  set onlostpointercapture(value) { level0.set(this, 'onlostpointercapture', value); }

  get onpointercancel() { return level0.get(this, 'onpointercancel'); }
  set onpointercancel(value) { level0.set(this, 'onpointercancel', value); }

  get onpointerdown() { return level0.get(this, 'onpointerdown'); }
  set onpointerdown(value) { level0.set(this, 'onpointerdown', value); }

  get onpointerenter() { return level0.get(this, 'onpointerenter'); }
  set onpointerenter(value) { level0.set(this, 'onpointerenter', value); }

  get onpointerleave() { return level0.get(this, 'onpointerleave'); }
  set onpointerleave(value) { level0.set(this, 'onpointerleave', value); }

  get onpointermove() { return level0.get(this, 'onpointermove'); }
  set onpointermove(value) { level0.set(this, 'onpointermove', value); }

  get onpointerout() { return level0.get(this, 'onpointerout'); }
  set onpointerout(value) { level0.set(this, 'onpointerout', value); }

  get onpointerover() { return level0.get(this, 'onpointerover'); }
  set onpointerover(value) { level0.set(this, 'onpointerover', value); }

  get onpointerup() { return level0.get(this, 'onpointerup'); }
  set onpointerup(value) { level0.set(this, 'onpointerup', value); }
  /* c8 ignore stop */

}

const tagName$f = 'template';

/**
 * @implements globalThis.HTMLTemplateElement
 */
class HTMLTemplateElement extends HTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, tagName$f);
    const content = this.ownerDocument.createDocumentFragment();
    (this[CONTENT] = content)[PRIVATE] = this;
  }

  get content() {
    if (this.hasChildNodes() && !this[CONTENT].hasChildNodes()) {
      for (const node of this.childNodes)
        this[CONTENT].appendChild(node.cloneNode(true));
    }
    return this[CONTENT];
  }
}

registerHTMLClass(tagName$f, HTMLTemplateElement);

/**
 * @implements globalThis.HTMLHtmlElement
 */
class HTMLHtmlElement extends HTMLElement {
  constructor(ownerDocument, localName = 'html') {
    super(ownerDocument, localName);
  }
}

const {toString} = HTMLElement.prototype;

class TextElement extends HTMLElement {

  get innerHTML() { return this.textContent; }
  set innerHTML(html) { this.textContent = html; }

  toString() {
    const outerHTML = toString.call(this.cloneNode());
    return outerHTML.replace(/></, `>${this.textContent}<`);
  }
}

const tagName$e = 'script';

/**
 * @implements globalThis.HTMLScriptElement
 */
class HTMLScriptElement extends TextElement {
  constructor(ownerDocument, localName = tagName$e) {
    super(ownerDocument, localName);
  }

  get type() {
    return stringAttribute.get(this, 'type');
  }
  set type(value) {
    stringAttribute.set(this, 'type', value);
  }

  get src() {
    return stringAttribute.get(this, 'src');
  }
  set src(value) {
    stringAttribute.set(this, 'src', value);
  }

  get defer() {
    return booleanAttribute.get(this, 'defer');
  }

  set defer(value) {
    booleanAttribute.set(this, 'defer', value);
  }

  get crossOrigin() {
    return stringAttribute.get(this, 'crossorigin');
  }
  set crossOrigin(value) {
    stringAttribute.set(this, 'crossorigin', value);
  }

  get nomodule() {
    return booleanAttribute.get(this, 'nomodule');
  }
  set nomodule(value) {
    booleanAttribute.set(this, 'nomodule', value);
  }

  get referrerPolicy() {
    return stringAttribute.get(this, 'referrerpolicy');
  }
  set referrerPolicy(value) {
    stringAttribute.set(this, 'referrerpolicy', value);
  }

  get nonce() {
    return stringAttribute.get(this, 'nonce');
  }
  set nonce(value) {
    stringAttribute.set(this, 'nonce', value);
  }

  get async() {
    return booleanAttribute.get(this, 'async');
  }
  set async(value) {
    booleanAttribute.set(this, 'async', value);
  }
}

registerHTMLClass(tagName$e, HTMLScriptElement);

/**
 * @implements globalThis.HTMLFrameElement
 */
class HTMLFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = 'frame') {
    super(ownerDocument, localName);
  }
}

const tagName$d = 'iframe';

/**
 * @implements globalThis.HTMLIFrameElement
 */
class HTMLIFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$d) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get src() { return stringAttribute.get(this, 'src'); }
  set src(value) { stringAttribute.set(this, 'src', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName$d, HTMLIFrameElement);

/**
 * @implements globalThis.HTMLObjectElement
 */
class HTMLObjectElement extends HTMLElement {
  constructor(ownerDocument, localName = 'object') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLHeadElement
 */
class HTMLHeadElement extends HTMLElement {
  constructor(ownerDocument, localName = 'head') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLBodyElement
 */
class HTMLBodyElement extends HTMLElement {
  constructor(ownerDocument, localName = 'body') {
    super(ownerDocument, localName);
  }
}

var CSSStyleDeclaration = {};

var parse$2 = {};

var CSSStyleSheet = {};

var StyleSheet = {};

//.CommonJS
var CSSOM$c = {};
///CommonJS


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#the-stylesheet-interface
 */
CSSOM$c.StyleSheet = function StyleSheet() {
	this.parentStyleSheet = null;
};


//.CommonJS
StyleSheet.StyleSheet = CSSOM$c.StyleSheet;

var CSSStyleRule = {};

var CSSRule = {};

//.CommonJS
var CSSOM$b = {};
///CommonJS


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#the-cssrule-interface
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule
 */
CSSOM$b.CSSRule = function CSSRule() {
	this.parentRule = null;
	this.parentStyleSheet = null;
};

CSSOM$b.CSSRule.UNKNOWN_RULE = 0;                 // obsolete
CSSOM$b.CSSRule.STYLE_RULE = 1;
CSSOM$b.CSSRule.CHARSET_RULE = 2;                 // obsolete
CSSOM$b.CSSRule.IMPORT_RULE = 3;
CSSOM$b.CSSRule.MEDIA_RULE = 4;
CSSOM$b.CSSRule.FONT_FACE_RULE = 5;
CSSOM$b.CSSRule.PAGE_RULE = 6;
CSSOM$b.CSSRule.KEYFRAMES_RULE = 7;
CSSOM$b.CSSRule.KEYFRAME_RULE = 8;
CSSOM$b.CSSRule.MARGIN_RULE = 9;
CSSOM$b.CSSRule.NAMESPACE_RULE = 10;
CSSOM$b.CSSRule.COUNTER_STYLE_RULE = 11;
CSSOM$b.CSSRule.SUPPORTS_RULE = 12;
CSSOM$b.CSSRule.DOCUMENT_RULE = 13;
CSSOM$b.CSSRule.FONT_FEATURE_VALUES_RULE = 14;
CSSOM$b.CSSRule.VIEWPORT_RULE = 15;
CSSOM$b.CSSRule.REGION_STYLE_RULE = 16;


CSSOM$b.CSSRule.prototype = {
	constructor: CSSOM$b.CSSRule
	//FIXME
};


//.CommonJS
CSSRule.CSSRule = CSSOM$b.CSSRule;

var hasRequiredCSSStyleRule;

function requireCSSStyleRule () {
	if (hasRequiredCSSStyleRule) return CSSStyleRule;
	hasRequiredCSSStyleRule = 1;
	//.CommonJS
	var CSSOM = {
		CSSStyleDeclaration: requireCSSStyleDeclaration().CSSStyleDeclaration,
		CSSRule: CSSRule.CSSRule
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://dev.w3.org/csswg/cssom/#cssstylerule
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule
	 */
	CSSOM.CSSStyleRule = function CSSStyleRule() {
		CSSOM.CSSRule.call(this);
		this.selectorText = "";
		this.style = new CSSOM.CSSStyleDeclaration();
		this.style.parentRule = this;
	};

	CSSOM.CSSStyleRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSStyleRule.prototype.constructor = CSSOM.CSSStyleRule;
	CSSOM.CSSStyleRule.prototype.type = 1;

	Object.defineProperty(CSSOM.CSSStyleRule.prototype, "cssText", {
		get: function() {
			var text;
			if (this.selectorText) {
				text = this.selectorText + " {" + this.style.cssText + "}";
			} else {
				text = "";
			}
			return text;
		},
		set: function(cssText) {
			var rule = CSSOM.CSSStyleRule.parse(cssText);
			this.style = rule.style;
			this.selectorText = rule.selectorText;
		}
	});


	/**
	 * NON-STANDARD
	 * lightweight version of parse.js.
	 * @param {string} ruleText
	 * @return CSSStyleRule
	 */
	CSSOM.CSSStyleRule.parse = function(ruleText) {
		var i = 0;
		var state = "selector";
		var index;
		var j = i;
		var buffer = "";

		var SIGNIFICANT_WHITESPACE = {
			"selector": true,
			"value": true
		};

		var styleRule = new CSSOM.CSSStyleRule();
		var name, priority="";

		for (var character; (character = ruleText.charAt(i)); i++) {

			switch (character) {

			case " ":
			case "\t":
			case "\r":
			case "\n":
			case "\f":
				if (SIGNIFICANT_WHITESPACE[state]) {
					// Squash 2 or more white-spaces in the row into 1
					switch (ruleText.charAt(i - 1)) {
						case " ":
						case "\t":
						case "\r":
						case "\n":
						case "\f":
							break;
						default:
							buffer += " ";
							break;
					}
				}
				break;

			// String
			case '"':
				j = i + 1;
				index = ruleText.indexOf('"', j) + 1;
				if (!index) {
					throw '" is missing';
				}
				buffer += ruleText.slice(i, index);
				i = index - 1;
				break;

			case "'":
				j = i + 1;
				index = ruleText.indexOf("'", j) + 1;
				if (!index) {
					throw "' is missing";
				}
				buffer += ruleText.slice(i, index);
				i = index - 1;
				break;

			// Comment
			case "/":
				if (ruleText.charAt(i + 1) === "*") {
					i += 2;
					index = ruleText.indexOf("*/", i);
					if (index === -1) {
						throw new SyntaxError("Missing */");
					} else {
						i = index + 1;
					}
				} else {
					buffer += character;
				}
				break;

			case "{":
				if (state === "selector") {
					styleRule.selectorText = buffer.trim();
					buffer = "";
					state = "name";
				}
				break;

			case ":":
				if (state === "name") {
					name = buffer.trim();
					buffer = "";
					state = "value";
				} else {
					buffer += character;
				}
				break;

			case "!":
				if (state === "value" && ruleText.indexOf("!important", i) === i) {
					priority = "important";
					i += "important".length;
				} else {
					buffer += character;
				}
				break;

			case ";":
				if (state === "value") {
					styleRule.style.setProperty(name, buffer.trim(), priority);
					priority = "";
					buffer = "";
					state = "name";
				} else {
					buffer += character;
				}
				break;

			case "}":
				if (state === "value") {
					styleRule.style.setProperty(name, buffer.trim(), priority);
					priority = "";
					buffer = "";
				} else if (state === "name") {
					break;
				} else {
					buffer += character;
				}
				state = "selector";
				break;

			default:
				buffer += character;
				break;

			}
		}

		return styleRule;

	};


	//.CommonJS
	CSSStyleRule.CSSStyleRule = CSSOM.CSSStyleRule;
	///CommonJS
	return CSSStyleRule;
}

var hasRequiredCSSStyleSheet;

function requireCSSStyleSheet () {
	if (hasRequiredCSSStyleSheet) return CSSStyleSheet;
	hasRequiredCSSStyleSheet = 1;
	//.CommonJS
	var CSSOM = {
		StyleSheet: StyleSheet.StyleSheet,
		CSSStyleRule: requireCSSStyleRule().CSSStyleRule
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet
	 */
	CSSOM.CSSStyleSheet = function CSSStyleSheet() {
		CSSOM.StyleSheet.call(this);
		this.cssRules = [];
	};


	CSSOM.CSSStyleSheet.prototype = new CSSOM.StyleSheet();
	CSSOM.CSSStyleSheet.prototype.constructor = CSSOM.CSSStyleSheet;


	/**
	 * Used to insert a new rule into the style sheet. The new rule now becomes part of the cascade.
	 *
	 *   sheet = new Sheet("body {margin: 0}")
	 *   sheet.toString()
	 *   -> "body{margin:0;}"
	 *   sheet.insertRule("img {border: none}", 0)
	 *   -> 0
	 *   sheet.toString()
	 *   -> "img{border:none;}body{margin:0;}"
	 *
	 * @param {string} rule
	 * @param {number} index
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-insertRule
	 * @return {number} The index within the style sheet's rule collection of the newly inserted rule.
	 */
	CSSOM.CSSStyleSheet.prototype.insertRule = function(rule, index) {
		if (index < 0 || index > this.cssRules.length) {
			throw new RangeError("INDEX_SIZE_ERR");
		}
		var cssRule = CSSOM.parse(rule).cssRules[0];
		cssRule.parentStyleSheet = this;
		this.cssRules.splice(index, 0, cssRule);
		return index;
	};


	/**
	 * Used to delete a rule from the style sheet.
	 *
	 *   sheet = new Sheet("img{border:none} body{margin:0}")
	 *   sheet.toString()
	 *   -> "img{border:none;}body{margin:0;}"
	 *   sheet.deleteRule(0)
	 *   sheet.toString()
	 *   -> "body{margin:0;}"
	 *
	 * @param {number} index within the style sheet's rule list of the rule to remove.
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-deleteRule
	 */
	CSSOM.CSSStyleSheet.prototype.deleteRule = function(index) {
		if (index < 0 || index >= this.cssRules.length) {
			throw new RangeError("INDEX_SIZE_ERR");
		}
		this.cssRules.splice(index, 1);
	};


	/**
	 * NON-STANDARD
	 * @return {string} serialize stylesheet
	 */
	CSSOM.CSSStyleSheet.prototype.toString = function() {
		var result = "";
		var rules = this.cssRules;
		for (var i=0; i<rules.length; i++) {
			result += rules[i].cssText + "\n";
		}
		return result;
	};


	//.CommonJS
	CSSStyleSheet.CSSStyleSheet = CSSOM.CSSStyleSheet;
	CSSOM.parse = requireParse().parse; // Cannot be included sooner due to the mutual dependency between parse.js and CSSStyleSheet.js
	///CommonJS
	return CSSStyleSheet;
}

var CSSImportRule = {};

var MediaList = {};

//.CommonJS
var CSSOM$a = {};
///CommonJS


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#the-medialist-interface
 */
CSSOM$a.MediaList = function MediaList(){
	this.length = 0;
};

CSSOM$a.MediaList.prototype = {

	constructor: CSSOM$a.MediaList,

	/**
	 * @return {string}
	 */
	get mediaText() {
		return Array.prototype.join.call(this, ", ");
	},

	/**
	 * @param {string} value
	 */
	set mediaText(value) {
		var values = value.split(",");
		var length = this.length = values.length;
		for (var i=0; i<length; i++) {
			this[i] = values[i].trim();
		}
	},

	/**
	 * @param {string} medium
	 */
	appendMedium: function(medium) {
		if (Array.prototype.indexOf.call(this, medium) === -1) {
			this[this.length] = medium;
			this.length++;
		}
	},

	/**
	 * @param {string} medium
	 */
	deleteMedium: function(medium) {
		var index = Array.prototype.indexOf.call(this, medium);
		if (index !== -1) {
			Array.prototype.splice.call(this, index, 1);
		}
	}

};


//.CommonJS
MediaList.MediaList = CSSOM$a.MediaList;

var hasRequiredCSSImportRule;

function requireCSSImportRule () {
	if (hasRequiredCSSImportRule) return CSSImportRule;
	hasRequiredCSSImportRule = 1;
	//.CommonJS
	var CSSOM = {
		CSSRule: CSSRule.CSSRule,
		CSSStyleSheet: requireCSSStyleSheet().CSSStyleSheet,
		MediaList: MediaList.MediaList
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://dev.w3.org/csswg/cssom/#cssimportrule
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule
	 */
	CSSOM.CSSImportRule = function CSSImportRule() {
		CSSOM.CSSRule.call(this);
		this.href = "";
		this.media = new CSSOM.MediaList();
		this.styleSheet = new CSSOM.CSSStyleSheet();
	};

	CSSOM.CSSImportRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSImportRule.prototype.constructor = CSSOM.CSSImportRule;
	CSSOM.CSSImportRule.prototype.type = 3;

	Object.defineProperty(CSSOM.CSSImportRule.prototype, "cssText", {
	  get: function() {
	    var mediaText = this.media.mediaText;
	    return "@import url(" + this.href + ")" + (mediaText ? " " + mediaText : "") + ";";
	  },
	  set: function(cssText) {
	    var i = 0;

	    /**
	     * @import url(partial.css) screen, handheld;
	     *        ||               |
	     *        after-import     media
	     *         |
	     *         url
	     */
	    var state = '';

	    var buffer = '';
	    var index;
	    for (var character; (character = cssText.charAt(i)); i++) {

	      switch (character) {
	        case ' ':
	        case '\t':
	        case '\r':
	        case '\n':
	        case '\f':
	          if (state === 'after-import') {
	            state = 'url';
	          } else {
	            buffer += character;
	          }
	          break;

	        case '@':
	          if (!state && cssText.indexOf('@import', i) === i) {
	            state = 'after-import';
	            i += 'import'.length;
	            buffer = '';
	          }
	          break;

	        case 'u':
	          if (state === 'url' && cssText.indexOf('url(', i) === i) {
	            index = cssText.indexOf(')', i + 1);
	            if (index === -1) {
	              throw i + ': ")" not found';
	            }
	            i += 'url('.length;
	            var url = cssText.slice(i, index);
	            if (url[0] === url[url.length - 1]) {
	              if (url[0] === '"' || url[0] === "'") {
	                url = url.slice(1, -1);
	              }
	            }
	            this.href = url;
	            i = index;
	            state = 'media';
	          }
	          break;

	        case '"':
	          if (state === 'url') {
	            index = cssText.indexOf('"', i + 1);
	            if (!index) {
	              throw i + ": '\"' not found";
	            }
	            this.href = cssText.slice(i + 1, index);
	            i = index;
	            state = 'media';
	          }
	          break;

	        case "'":
	          if (state === 'url') {
	            index = cssText.indexOf("'", i + 1);
	            if (!index) {
	              throw i + ': "\'" not found';
	            }
	            this.href = cssText.slice(i + 1, index);
	            i = index;
	            state = 'media';
	          }
	          break;

	        case ';':
	          if (state === 'media') {
	            if (buffer) {
	              this.media.mediaText = buffer.trim();
	            }
	          }
	          break;

	        default:
	          if (state === 'media') {
	            buffer += character;
	          }
	          break;
	      }
	    }
	  }
	});


	//.CommonJS
	CSSImportRule.CSSImportRule = CSSOM.CSSImportRule;
	///CommonJS
	return CSSImportRule;
}

var CSSGroupingRule = {};

//.CommonJS
var CSSOM$9 = {
	CSSRule: CSSRule.CSSRule
};
///CommonJS


/**
 * @constructor
 * @see https://drafts.csswg.org/cssom/#the-cssgroupingrule-interface
 */
CSSOM$9.CSSGroupingRule = function CSSGroupingRule() {
	CSSOM$9.CSSRule.call(this);
	this.cssRules = [];
};

CSSOM$9.CSSGroupingRule.prototype = new CSSOM$9.CSSRule();
CSSOM$9.CSSGroupingRule.prototype.constructor = CSSOM$9.CSSGroupingRule;


/**
 * Used to insert a new CSS rule to a list of CSS rules.
 *
 * @example
 *   cssGroupingRule.cssText
 *   -> "body{margin:0;}"
 *   cssGroupingRule.insertRule("img{border:none;}", 1)
 *   -> 1
 *   cssGroupingRule.cssText
 *   -> "body{margin:0;}img{border:none;}"
 *
 * @param {string} rule
 * @param {number} [index]
 * @see https://www.w3.org/TR/cssom-1/#dom-cssgroupingrule-insertrule
 * @return {number} The index within the grouping rule's collection of the newly inserted rule.
 */
 CSSOM$9.CSSGroupingRule.prototype.insertRule = function insertRule(rule, index) {
	if (index < 0 || index > this.cssRules.length) {
		throw new RangeError("INDEX_SIZE_ERR");
	}
	var cssRule = CSSOM$9.parse(rule).cssRules[0];
	cssRule.parentRule = this;
	this.cssRules.splice(index, 0, cssRule);
	return index;
};

/**
 * Used to delete a rule from the grouping rule.
 *
 *   cssGroupingRule.cssText
 *   -> "img{border:none;}body{margin:0;}"
 *   cssGroupingRule.deleteRule(0)
 *   cssGroupingRule.cssText
 *   -> "body{margin:0;}"
 *
 * @param {number} index within the grouping rule's rule list of the rule to remove.
 * @see https://www.w3.org/TR/cssom-1/#dom-cssgroupingrule-deleterule
 */
 CSSOM$9.CSSGroupingRule.prototype.deleteRule = function deleteRule(index) {
	if (index < 0 || index >= this.cssRules.length) {
		throw new RangeError("INDEX_SIZE_ERR");
	}
	this.cssRules.splice(index, 1)[0].parentRule = null;
};

//.CommonJS
CSSGroupingRule.CSSGroupingRule = CSSOM$9.CSSGroupingRule;

var CSSMediaRule = {};

var CSSConditionRule = {};

//.CommonJS
var CSSOM$8 = {
  CSSRule: CSSRule.CSSRule,
  CSSGroupingRule: CSSGroupingRule.CSSGroupingRule
};
///CommonJS


/**
 * @constructor
 * @see https://www.w3.org/TR/css-conditional-3/#the-cssconditionrule-interface
 */
CSSOM$8.CSSConditionRule = function CSSConditionRule() {
  CSSOM$8.CSSGroupingRule.call(this);
  this.cssRules = [];
};

CSSOM$8.CSSConditionRule.prototype = new CSSOM$8.CSSGroupingRule();
CSSOM$8.CSSConditionRule.prototype.constructor = CSSOM$8.CSSConditionRule;
CSSOM$8.CSSConditionRule.prototype.conditionText = '';
CSSOM$8.CSSConditionRule.prototype.cssText = '';

//.CommonJS
CSSConditionRule.CSSConditionRule = CSSOM$8.CSSConditionRule;

//.CommonJS
var CSSOM$7 = {
	CSSRule: CSSRule.CSSRule,
	CSSGroupingRule: CSSGroupingRule.CSSGroupingRule,
	CSSConditionRule: CSSConditionRule.CSSConditionRule,
	MediaList: MediaList.MediaList
};
///CommonJS


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#cssmediarule
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule
 */
CSSOM$7.CSSMediaRule = function CSSMediaRule() {
	CSSOM$7.CSSConditionRule.call(this);
	this.media = new CSSOM$7.MediaList();
};

CSSOM$7.CSSMediaRule.prototype = new CSSOM$7.CSSConditionRule();
CSSOM$7.CSSMediaRule.prototype.constructor = CSSOM$7.CSSMediaRule;
CSSOM$7.CSSMediaRule.prototype.type = 4;

// https://opensource.apple.com/source/WebCore/WebCore-7611.1.21.161.3/css/CSSMediaRule.cpp
Object.defineProperties(CSSOM$7.CSSMediaRule.prototype, {
  "conditionText": {
    get: function() {
      return this.media.mediaText;
    },
    set: function(value) {
      this.media.mediaText = value;
    },
    configurable: true,
    enumerable: true
  },
  "cssText": {
    get: function() {
      var cssTexts = [];
      for (var i=0, length=this.cssRules.length; i < length; i++) {
        cssTexts.push(this.cssRules[i].cssText);
      }
      return "@media " + this.media.mediaText + " {" + cssTexts.join("") + "}";
    },
    configurable: true,
    enumerable: true
  }
});


//.CommonJS
CSSMediaRule.CSSMediaRule = CSSOM$7.CSSMediaRule;

var CSSSupportsRule = {};

//.CommonJS
var CSSOM$6 = {
  CSSRule: CSSRule.CSSRule,
  CSSGroupingRule: CSSGroupingRule.CSSGroupingRule,
  CSSConditionRule: CSSConditionRule.CSSConditionRule
};
///CommonJS


/**
 * @constructor
 * @see https://drafts.csswg.org/css-conditional-3/#the-csssupportsrule-interface
 */
CSSOM$6.CSSSupportsRule = function CSSSupportsRule() {
  CSSOM$6.CSSConditionRule.call(this);
};

CSSOM$6.CSSSupportsRule.prototype = new CSSOM$6.CSSConditionRule();
CSSOM$6.CSSSupportsRule.prototype.constructor = CSSOM$6.CSSSupportsRule;
CSSOM$6.CSSSupportsRule.prototype.type = 12;

Object.defineProperty(CSSOM$6.CSSSupportsRule.prototype, "cssText", {
  get: function() {
    var cssTexts = [];

    for (var i = 0, length = this.cssRules.length; i < length; i++) {
      cssTexts.push(this.cssRules[i].cssText);
    }

    return "@supports " + this.conditionText + " {" + cssTexts.join("") + "}";
  }
});

//.CommonJS
CSSSupportsRule.CSSSupportsRule = CSSOM$6.CSSSupportsRule;

var CSSFontFaceRule = {};

var hasRequiredCSSFontFaceRule;

function requireCSSFontFaceRule () {
	if (hasRequiredCSSFontFaceRule) return CSSFontFaceRule;
	hasRequiredCSSFontFaceRule = 1;
	//.CommonJS
	var CSSOM = {
		CSSStyleDeclaration: requireCSSStyleDeclaration().CSSStyleDeclaration,
		CSSRule: CSSRule.CSSRule
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://dev.w3.org/csswg/cssom/#css-font-face-rule
	 */
	CSSOM.CSSFontFaceRule = function CSSFontFaceRule() {
		CSSOM.CSSRule.call(this);
		this.style = new CSSOM.CSSStyleDeclaration();
		this.style.parentRule = this;
	};

	CSSOM.CSSFontFaceRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSFontFaceRule.prototype.constructor = CSSOM.CSSFontFaceRule;
	CSSOM.CSSFontFaceRule.prototype.type = 5;
	//FIXME
	//CSSOM.CSSFontFaceRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
	//CSSOM.CSSFontFaceRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

	// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSFontFaceRule.cpp
	Object.defineProperty(CSSOM.CSSFontFaceRule.prototype, "cssText", {
	  get: function() {
	    return "@font-face {" + this.style.cssText + "}";
	  }
	});


	//.CommonJS
	CSSFontFaceRule.CSSFontFaceRule = CSSOM.CSSFontFaceRule;
	///CommonJS
	return CSSFontFaceRule;
}

var CSSHostRule = {};

//.CommonJS
var CSSOM$5 = {
	CSSRule: CSSRule.CSSRule
};
///CommonJS


/**
 * @constructor
 * @see http://www.w3.org/TR/shadow-dom/#host-at-rule
 */
CSSOM$5.CSSHostRule = function CSSHostRule() {
	CSSOM$5.CSSRule.call(this);
	this.cssRules = [];
};

CSSOM$5.CSSHostRule.prototype = new CSSOM$5.CSSRule();
CSSOM$5.CSSHostRule.prototype.constructor = CSSOM$5.CSSHostRule;
CSSOM$5.CSSHostRule.prototype.type = 1001;
//FIXME
//CSSOM.CSSHostRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSHostRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

Object.defineProperty(CSSOM$5.CSSHostRule.prototype, "cssText", {
	get: function() {
		var cssTexts = [];
		for (var i=0, length=this.cssRules.length; i < length; i++) {
			cssTexts.push(this.cssRules[i].cssText);
		}
		return "@host {" + cssTexts.join("") + "}";
	}
});


//.CommonJS
CSSHostRule.CSSHostRule = CSSOM$5.CSSHostRule;

var CSSKeyframeRule = {};

var hasRequiredCSSKeyframeRule;

function requireCSSKeyframeRule () {
	if (hasRequiredCSSKeyframeRule) return CSSKeyframeRule;
	hasRequiredCSSKeyframeRule = 1;
	//.CommonJS
	var CSSOM = {
		CSSRule: CSSRule.CSSRule,
		CSSStyleDeclaration: requireCSSStyleDeclaration().CSSStyleDeclaration
	};
	///CommonJS


	/**
	 * @constructor
	 * @see http://www.w3.org/TR/css3-animations/#DOM-CSSKeyframeRule
	 */
	CSSOM.CSSKeyframeRule = function CSSKeyframeRule() {
		CSSOM.CSSRule.call(this);
		this.keyText = '';
		this.style = new CSSOM.CSSStyleDeclaration();
		this.style.parentRule = this;
	};

	CSSOM.CSSKeyframeRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSKeyframeRule.prototype.constructor = CSSOM.CSSKeyframeRule;
	CSSOM.CSSKeyframeRule.prototype.type = 8;
	//FIXME
	//CSSOM.CSSKeyframeRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
	//CSSOM.CSSKeyframeRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

	// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSKeyframeRule.cpp
	Object.defineProperty(CSSOM.CSSKeyframeRule.prototype, "cssText", {
	  get: function() {
	    return this.keyText + " {" + this.style.cssText + "} ";
	  }
	});


	//.CommonJS
	CSSKeyframeRule.CSSKeyframeRule = CSSOM.CSSKeyframeRule;
	///CommonJS
	return CSSKeyframeRule;
}

var CSSKeyframesRule = {};

//.CommonJS
var CSSOM$4 = {
	CSSRule: CSSRule.CSSRule
};
///CommonJS


/**
 * @constructor
 * @see http://www.w3.org/TR/css3-animations/#DOM-CSSKeyframesRule
 */
CSSOM$4.CSSKeyframesRule = function CSSKeyframesRule() {
	CSSOM$4.CSSRule.call(this);
	this.name = '';
	this.cssRules = [];
};

CSSOM$4.CSSKeyframesRule.prototype = new CSSOM$4.CSSRule();
CSSOM$4.CSSKeyframesRule.prototype.constructor = CSSOM$4.CSSKeyframesRule;
CSSOM$4.CSSKeyframesRule.prototype.type = 7;
//FIXME
//CSSOM.CSSKeyframesRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSKeyframesRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSKeyframesRule.cpp
Object.defineProperty(CSSOM$4.CSSKeyframesRule.prototype, "cssText", {
  get: function() {
    var cssTexts = [];
    for (var i=0, length=this.cssRules.length; i < length; i++) {
      cssTexts.push("  " + this.cssRules[i].cssText);
    }
    return "@" + (this._vendorPrefix || '') + "keyframes " + this.name + " { \n" + cssTexts.join("\n") + "\n}";
  }
});


//.CommonJS
CSSKeyframesRule.CSSKeyframesRule = CSSOM$4.CSSKeyframesRule;

var CSSValueExpression = {};

var CSSValue = {};

//.CommonJS
var CSSOM$3 = {};
///CommonJS


/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
 *
 * TODO: add if needed
 */
CSSOM$3.CSSValue = function CSSValue() {
};

CSSOM$3.CSSValue.prototype = {
	constructor: CSSOM$3.CSSValue,

	// @see: http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
	set cssText(text) {
		var name = this._getConstructorName();

		throw new Error('DOMException: property "cssText" of "' + name + '" is readonly and can not be replaced with "' + text + '"!');
	},

	get cssText() {
		var name = this._getConstructorName();

		throw new Error('getter "cssText" of "' + name + '" is not implemented!');
	},

	_getConstructorName: function() {
		var s = this.constructor.toString(),
				c = s.match(/function\s([^\(]+)/),
				name = c[1];

		return name;
	}
};


//.CommonJS
CSSValue.CSSValue = CSSOM$3.CSSValue;

//.CommonJS
var CSSOM$2 = {
	CSSValue: CSSValue.CSSValue
};
///CommonJS


/**
 * @constructor
 * @see http://msdn.microsoft.com/en-us/library/ms537634(v=vs.85).aspx
 *
 */
CSSOM$2.CSSValueExpression = function CSSValueExpression(token, idx) {
	this._token = token;
	this._idx = idx;
};

CSSOM$2.CSSValueExpression.prototype = new CSSOM$2.CSSValue();
CSSOM$2.CSSValueExpression.prototype.constructor = CSSOM$2.CSSValueExpression;

/**
 * parse css expression() value
 *
 * @return {Object}
 *         - error:
 *         or
 *         - idx:
 *         - expression:
 *
 * Example:
 *
 * .selector {
 *		zoom: expression(documentElement.clientWidth > 1000 ? '1000px' : 'auto');
 * }
 */
CSSOM$2.CSSValueExpression.prototype.parse = function() {
	var token = this._token,
			idx = this._idx;

	var character = '',
			expression = '',
			error = '',
			info,
			paren = [];


	for (; ; ++idx) {
		character = token.charAt(idx);

		// end of token
		if (character === '') {
			error = 'css expression error: unfinished expression!';
			break;
		}

		switch(character) {
			case '(':
				paren.push(character);
				expression += character;
				break;

			case ')':
				paren.pop(character);
				expression += character;
				break;

			case '/':
				if ((info = this._parseJSComment(token, idx))) { // comment?
					if (info.error) {
						error = 'css expression error: unfinished comment in expression!';
					} else {
						idx = info.idx;
						// ignore the comment
					}
				} else if ((info = this._parseJSRexExp(token, idx))) { // regexp
					idx = info.idx;
					expression += info.text;
				} else { // other
					expression += character;
				}
				break;

			case "'":
			case '"':
				info = this._parseJSString(token, idx, character);
				if (info) { // string
					idx = info.idx;
					expression += info.text;
				} else {
					expression += character;
				}
				break;

			default:
				expression += character;
				break;
		}

		if (error) {
			break;
		}

		// end of expression
		if (paren.length === 0) {
			break;
		}
	}

	var ret;
	if (error) {
		ret = {
			error: error
		};
	} else {
		ret = {
			idx: idx,
			expression: expression
		};
	}

	return ret;
};


/**
 *
 * @return {Object|false}
 *          - idx:
 *          - text:
 *          or
 *          - error:
 *          or
 *          false
 *
 */
CSSOM$2.CSSValueExpression.prototype._parseJSComment = function(token, idx) {
	var nextChar = token.charAt(idx + 1),
			text;

	if (nextChar === '/' || nextChar === '*') {
		var startIdx = idx,
				endIdx,
				commentEndChar;

		if (nextChar === '/') { // line comment
			commentEndChar = '\n';
		} else if (nextChar === '*') { // block comment
			commentEndChar = '*/';
		}

		endIdx = token.indexOf(commentEndChar, startIdx + 1 + 1);
		if (endIdx !== -1) {
			endIdx = endIdx + commentEndChar.length - 1;
			text = token.substring(idx, endIdx + 1);
			return {
				idx: endIdx,
				text: text
			};
		} else {
			var error = 'css expression error: unfinished comment in expression!';
			return {
				error: error
			};
		}
	} else {
		return false;
	}
};


/**
 *
 * @return {Object|false}
 *					- idx:
 *					- text:
 *					or 
 *					false
 *
 */
CSSOM$2.CSSValueExpression.prototype._parseJSString = function(token, idx, sep) {
	var endIdx = this._findMatchedIdx(token, idx, sep),
			text;

	if (endIdx === -1) {
		return false;
	} else {
		text = token.substring(idx, endIdx + sep.length);

		return {
			idx: endIdx,
			text: text
		};
	}
};


/**
 * parse regexp in css expression
 *
 * @return {Object|false}
 *				- idx:
 *				- regExp:
 *				or 
 *				false
 */

/*

all legal RegExp
 
/a/
(/a/)
[/a/]
[12, /a/]

!/a/

+/a/
-/a/
* /a/
/ /a/
%/a/

===/a/
!==/a/
==/a/
!=/a/
>/a/
>=/a/
</a/
<=/a/

&/a/
|/a/
^/a/
~/a/
<</a/
>>/a/
>>>/a/

&&/a/
||/a/
?/a/
=/a/
,/a/

		delete /a/
				in /a/
instanceof /a/
				new /a/
		typeof /a/
			void /a/

*/
CSSOM$2.CSSValueExpression.prototype._parseJSRexExp = function(token, idx) {
	var before = token.substring(0, idx).replace(/\s+$/, ""),
			legalRegx = [
				/^$/,
				/\($/,
				/\[$/,
				/\!$/,
				/\+$/,
				/\-$/,
				/\*$/,
				/\/\s+/,
				/\%$/,
				/\=$/,
				/\>$/,
				/<$/,
				/\&$/,
				/\|$/,
				/\^$/,
				/\~$/,
				/\?$/,
				/\,$/,
				/delete$/,
				/in$/,
				/instanceof$/,
				/new$/,
				/typeof$/,
				/void$/
			];

	var isLegal = legalRegx.some(function(reg) {
		return reg.test(before);
	});

	if (!isLegal) {
		return false;
	} else {
		var sep = '/';

		// same logic as string
		return this._parseJSString(token, idx, sep);
	}
};


/**
 *
 * find next sep(same line) index in `token`
 *
 * @return {Number}
 *
 */
CSSOM$2.CSSValueExpression.prototype._findMatchedIdx = function(token, idx, sep) {
	var startIdx = idx,
			endIdx;

	var NOT_FOUND = -1;

	while(true) {
		endIdx = token.indexOf(sep, startIdx + 1);

		if (endIdx === -1) { // not found
			endIdx = NOT_FOUND;
			break;
		} else {
			var text = token.substring(idx + 1, endIdx),
					matched = text.match(/\\+$/);
			if (!matched || matched[0] % 2 === 0) { // not escaped
				break;
			} else {
				startIdx = endIdx;
			}
		}
	}

	// boundary must be in the same line(js sting or regexp)
	var nextNewLineIdx = token.indexOf('\n', idx + 1);
	if (nextNewLineIdx < endIdx) {
		endIdx = NOT_FOUND;
	}


	return endIdx;
};




//.CommonJS
CSSValueExpression.CSSValueExpression = CSSOM$2.CSSValueExpression;

var CSSDocumentRule = {};

var MatcherList = {};

//.CommonJS
var CSSOM$1 = {};
///CommonJS


/**
 * @constructor
 * @see https://developer.mozilla.org/en/CSS/@-moz-document
 */
CSSOM$1.MatcherList = function MatcherList(){
    this.length = 0;
};

CSSOM$1.MatcherList.prototype = {

    constructor: CSSOM$1.MatcherList,

    /**
     * @return {string}
     */
    get matcherText() {
        return Array.prototype.join.call(this, ", ");
    },

    /**
     * @param {string} value
     */
    set matcherText(value) {
        // just a temporary solution, actually it may be wrong by just split the value with ',', because a url can include ','.
        var values = value.split(",");
        var length = this.length = values.length;
        for (var i=0; i<length; i++) {
            this[i] = values[i].trim();
        }
    },

    /**
     * @param {string} matcher
     */
    appendMatcher: function(matcher) {
        if (Array.prototype.indexOf.call(this, matcher) === -1) {
            this[this.length] = matcher;
            this.length++;
        }
    },

    /**
     * @param {string} matcher
     */
    deleteMatcher: function(matcher) {
        var index = Array.prototype.indexOf.call(this, matcher);
        if (index !== -1) {
            Array.prototype.splice.call(this, index, 1);
        }
    }

};


//.CommonJS
MatcherList.MatcherList = CSSOM$1.MatcherList;

//.CommonJS
var CSSOM = {
    CSSRule: CSSRule.CSSRule,
    MatcherList: MatcherList.MatcherList
};
///CommonJS


/**
 * @constructor
 * @see https://developer.mozilla.org/en/CSS/@-moz-document
 */
CSSOM.CSSDocumentRule = function CSSDocumentRule() {
    CSSOM.CSSRule.call(this);
    this.matcher = new CSSOM.MatcherList();
    this.cssRules = [];
};

CSSOM.CSSDocumentRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSDocumentRule.prototype.constructor = CSSOM.CSSDocumentRule;
CSSOM.CSSDocumentRule.prototype.type = 10;
//FIXME
//CSSOM.CSSDocumentRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSDocumentRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

Object.defineProperty(CSSOM.CSSDocumentRule.prototype, "cssText", {
  get: function() {
    var cssTexts = [];
    for (var i=0, length=this.cssRules.length; i < length; i++) {
        cssTexts.push(this.cssRules[i].cssText);
    }
    return "@-moz-document " + this.matcher.matcherText + " {" + cssTexts.join("") + "}";
  }
});


//.CommonJS
CSSDocumentRule.CSSDocumentRule = CSSOM.CSSDocumentRule;

var hasRequiredParse;

function requireParse () {
	if (hasRequiredParse) return parse$2;
	hasRequiredParse = 1;
	//.CommonJS
	var CSSOM = {};
	///CommonJS


	/**
	 * @param {string} token
	 */
	CSSOM.parse = function parse(token) {

		var i = 0;

		/**
			"before-selector" or
			"selector" or
			"atRule" or
			"atBlock" or
			"conditionBlock" or
			"before-name" or
			"name" or
			"before-value" or
			"value"
		*/
		var state = "before-selector";

		var index;
		var buffer = "";
		var valueParenthesisDepth = 0;

		var SIGNIFICANT_WHITESPACE = {
			"selector": true,
			"value": true,
			"value-parenthesis": true,
			"atRule": true,
			"importRule-begin": true,
			"importRule": true,
			"atBlock": true,
			"conditionBlock": true,
			'documentRule-begin': true
		};

		var styleSheet = new CSSOM.CSSStyleSheet();

		// @type CSSStyleSheet|CSSMediaRule|CSSSupportsRule|CSSFontFaceRule|CSSKeyframesRule|CSSDocumentRule
		var currentScope = styleSheet;

		// @type CSSMediaRule|CSSSupportsRule|CSSKeyframesRule|CSSDocumentRule
		var parentRule;

		var ancestorRules = [];
		var hasAncestors = false;
		var prevScope;

		var name, priority="", styleRule, mediaRule, supportsRule, importRule, fontFaceRule, keyframesRule, documentRule, hostRule;

		var atKeyframesRegExp = /@(-(?:\w+-)+)?keyframes/g;

		var parseError = function(message) {
			var lines = token.substring(0, i).split('\n');
			var lineCount = lines.length;
			var charCount = lines.pop().length + 1;
			var error = new Error(message + ' (line ' + lineCount + ', char ' + charCount + ')');
			error.line = lineCount;
			/* jshint sub : true */
			error['char'] = charCount;
			error.styleSheet = styleSheet;
			throw error;
		};

		for (var character; (character = token.charAt(i)); i++) {

			switch (character) {

			case " ":
			case "\t":
			case "\r":
			case "\n":
			case "\f":
				if (SIGNIFICANT_WHITESPACE[state]) {
					buffer += character;
				}
				break;

			// String
			case '"':
				index = i + 1;
				do {
					index = token.indexOf('"', index) + 1;
					if (!index) {
						parseError('Unmatched "');
					}
				} while (token[index - 2] === '\\');
				buffer += token.slice(i, index);
				i = index - 1;
				switch (state) {
					case 'before-value':
						state = 'value';
						break;
					case 'importRule-begin':
						state = 'importRule';
						break;
				}
				break;

			case "'":
				index = i + 1;
				do {
					index = token.indexOf("'", index) + 1;
					if (!index) {
						parseError("Unmatched '");
					}
				} while (token[index - 2] === '\\');
				buffer += token.slice(i, index);
				i = index - 1;
				switch (state) {
					case 'before-value':
						state = 'value';
						break;
					case 'importRule-begin':
						state = 'importRule';
						break;
				}
				break;

			// Comment
			case "/":
				if (token.charAt(i + 1) === "*") {
					i += 2;
					index = token.indexOf("*/", i);
					if (index === -1) {
						parseError("Missing */");
					} else {
						i = index + 1;
					}
				} else {
					buffer += character;
				}
				if (state === "importRule-begin") {
					buffer += " ";
					state = "importRule";
				}
				break;

			// At-rule
			case "@":
				if (token.indexOf("@-moz-document", i) === i) {
					state = "documentRule-begin";
					documentRule = new CSSOM.CSSDocumentRule();
					documentRule.__starts = i;
					i += "-moz-document".length;
					buffer = "";
					break;
				} else if (token.indexOf("@media", i) === i) {
					state = "atBlock";
					mediaRule = new CSSOM.CSSMediaRule();
					mediaRule.__starts = i;
					i += "media".length;
					buffer = "";
					break;
				} else if (token.indexOf("@supports", i) === i) {
					state = "conditionBlock";
					supportsRule = new CSSOM.CSSSupportsRule();
					supportsRule.__starts = i;
					i += "supports".length;
					buffer = "";
					break;
				} else if (token.indexOf("@host", i) === i) {
					state = "hostRule-begin";
					i += "host".length;
					hostRule = new CSSOM.CSSHostRule();
					hostRule.__starts = i;
					buffer = "";
					break;
				} else if (token.indexOf("@import", i) === i) {
					state = "importRule-begin";
					i += "import".length;
					buffer += "@import";
					break;
				} else if (token.indexOf("@font-face", i) === i) {
					state = "fontFaceRule-begin";
					i += "font-face".length;
					fontFaceRule = new CSSOM.CSSFontFaceRule();
					fontFaceRule.__starts = i;
					buffer = "";
					break;
				} else {
					atKeyframesRegExp.lastIndex = i;
					var matchKeyframes = atKeyframesRegExp.exec(token);
					if (matchKeyframes && matchKeyframes.index === i) {
						state = "keyframesRule-begin";
						keyframesRule = new CSSOM.CSSKeyframesRule();
						keyframesRule.__starts = i;
						keyframesRule._vendorPrefix = matchKeyframes[1]; // Will come out as undefined if no prefix was found
						i += matchKeyframes[0].length - 1;
						buffer = "";
						break;
					} else if (state === "selector") {
						state = "atRule";
					}
				}
				buffer += character;
				break;

			case "{":
				if (state === "selector" || state === "atRule") {
					styleRule.selectorText = buffer.trim();
					styleRule.style.__starts = i;
					buffer = "";
					state = "before-name";
				} else if (state === "atBlock") {
					mediaRule.media.mediaText = buffer.trim();

					if (parentRule) {
						ancestorRules.push(parentRule);
					}

					currentScope = parentRule = mediaRule;
					mediaRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				} else if (state === "conditionBlock") {
					supportsRule.conditionText = buffer.trim();

					if (parentRule) {
						ancestorRules.push(parentRule);
					}

					currentScope = parentRule = supportsRule;
					supportsRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				} else if (state === "hostRule-begin") {
					if (parentRule) {
						ancestorRules.push(parentRule);
					}

					currentScope = parentRule = hostRule;
					hostRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				} else if (state === "fontFaceRule-begin") {
					if (parentRule) {
						fontFaceRule.parentRule = parentRule;
					}
					fontFaceRule.parentStyleSheet = styleSheet;
					styleRule = fontFaceRule;
					buffer = "";
					state = "before-name";
				} else if (state === "keyframesRule-begin") {
					keyframesRule.name = buffer.trim();
					if (parentRule) {
						ancestorRules.push(parentRule);
						keyframesRule.parentRule = parentRule;
					}
					keyframesRule.parentStyleSheet = styleSheet;
					currentScope = parentRule = keyframesRule;
					buffer = "";
					state = "keyframeRule-begin";
				} else if (state === "keyframeRule-begin") {
					styleRule = new CSSOM.CSSKeyframeRule();
					styleRule.keyText = buffer.trim();
					styleRule.__starts = i;
					buffer = "";
					state = "before-name";
				} else if (state === "documentRule-begin") {
					// FIXME: what if this '{' is in the url text of the match function?
					documentRule.matcher.matcherText = buffer.trim();
					if (parentRule) {
						ancestorRules.push(parentRule);
						documentRule.parentRule = parentRule;
					}
					currentScope = parentRule = documentRule;
					documentRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				}
				break;

			case ":":
				if (state === "name") {
					name = buffer.trim();
					buffer = "";
					state = "before-value";
				} else {
					buffer += character;
				}
				break;

			case "(":
				if (state === 'value') {
					// ie css expression mode
					if (buffer.trim() === 'expression') {
						var info = (new CSSOM.CSSValueExpression(token, i)).parse();

						if (info.error) {
							parseError(info.error);
						} else {
							buffer += info.expression;
							i = info.idx;
						}
					} else {
						state = 'value-parenthesis';
						//always ensure this is reset to 1 on transition
						//from value to value-parenthesis
						valueParenthesisDepth = 1;
						buffer += character;
					}
				} else if (state === 'value-parenthesis') {
					valueParenthesisDepth++;
					buffer += character;
				} else {
					buffer += character;
				}
				break;

			case ")":
				if (state === 'value-parenthesis') {
					valueParenthesisDepth--;
					if (valueParenthesisDepth === 0) state = 'value';
				}
				buffer += character;
				break;

			case "!":
				if (state === "value" && token.indexOf("!important", i) === i) {
					priority = "important";
					i += "important".length;
				} else {
					buffer += character;
				}
				break;

			case ";":
				switch (state) {
					case "value":
						styleRule.style.setProperty(name, buffer.trim(), priority);
						priority = "";
						buffer = "";
						state = "before-name";
						break;
					case "atRule":
						buffer = "";
						state = "before-selector";
						break;
					case "importRule":
						importRule = new CSSOM.CSSImportRule();
						importRule.parentStyleSheet = importRule.styleSheet.parentStyleSheet = styleSheet;
						importRule.cssText = buffer + character;
						styleSheet.cssRules.push(importRule);
						buffer = "";
						state = "before-selector";
						break;
					default:
						buffer += character;
						break;
				}
				break;

			case "}":
				switch (state) {
					case "value":
						styleRule.style.setProperty(name, buffer.trim(), priority);
						priority = "";
						/* falls through */
					case "before-name":
					case "name":
						styleRule.__ends = i + 1;
						if (parentRule) {
							styleRule.parentRule = parentRule;
						}
						styleRule.parentStyleSheet = styleSheet;
						currentScope.cssRules.push(styleRule);
						buffer = "";
						if (currentScope.constructor === CSSOM.CSSKeyframesRule) {
							state = "keyframeRule-begin";
						} else {
							state = "before-selector";
						}
						break;
					case "keyframeRule-begin":
					case "before-selector":
					case "selector":
						// End of media/supports/document rule.
						if (!parentRule) {
							parseError("Unexpected }");
						}

						// Handle rules nested in @media or @supports
						hasAncestors = ancestorRules.length > 0;

						while (ancestorRules.length > 0) {
							parentRule = ancestorRules.pop();

							if (
								parentRule.constructor.name === "CSSMediaRule"
								|| parentRule.constructor.name === "CSSSupportsRule"
							) {
								prevScope = currentScope;
								currentScope = parentRule;
								currentScope.cssRules.push(prevScope);
								break;
							}

							if (ancestorRules.length === 0) {
								hasAncestors = false;
							}
						}
						
						if (!hasAncestors) {
							currentScope.__ends = i + 1;
							styleSheet.cssRules.push(currentScope);
							currentScope = styleSheet;
							parentRule = null;
						}

						buffer = "";
						state = "before-selector";
						break;
				}
				break;

			default:
				switch (state) {
					case "before-selector":
						state = "selector";
						styleRule = new CSSOM.CSSStyleRule();
						styleRule.__starts = i;
						break;
					case "before-name":
						state = "name";
						break;
					case "before-value":
						state = "value";
						break;
					case "importRule-begin":
						state = "importRule";
						break;
				}
				buffer += character;
				break;
			}
		}

		return styleSheet;
	};


	//.CommonJS
	parse$2.parse = CSSOM.parse;
	// The following modules cannot be included sooner due to the mutual dependency with parse.js
	CSSOM.CSSStyleSheet = requireCSSStyleSheet().CSSStyleSheet;
	CSSOM.CSSStyleRule = requireCSSStyleRule().CSSStyleRule;
	CSSOM.CSSImportRule = requireCSSImportRule().CSSImportRule;
	CSSOM.CSSGroupingRule = CSSGroupingRule.CSSGroupingRule;
	CSSOM.CSSMediaRule = CSSMediaRule.CSSMediaRule;
	CSSOM.CSSConditionRule = CSSConditionRule.CSSConditionRule;
	CSSOM.CSSSupportsRule = CSSSupportsRule.CSSSupportsRule;
	CSSOM.CSSFontFaceRule = requireCSSFontFaceRule().CSSFontFaceRule;
	CSSOM.CSSHostRule = CSSHostRule.CSSHostRule;
	CSSOM.CSSStyleDeclaration = requireCSSStyleDeclaration().CSSStyleDeclaration;
	CSSOM.CSSKeyframeRule = requireCSSKeyframeRule().CSSKeyframeRule;
	CSSOM.CSSKeyframesRule = CSSKeyframesRule.CSSKeyframesRule;
	CSSOM.CSSValueExpression = CSSValueExpression.CSSValueExpression;
	CSSOM.CSSDocumentRule = CSSDocumentRule.CSSDocumentRule;
	///CommonJS
	return parse$2;
}

var hasRequiredCSSStyleDeclaration;

function requireCSSStyleDeclaration () {
	if (hasRequiredCSSStyleDeclaration) return CSSStyleDeclaration;
	hasRequiredCSSStyleDeclaration = 1;
	//.CommonJS
	var CSSOM = {};
	///CommonJS


	/**
	 * @constructor
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration
	 */
	CSSOM.CSSStyleDeclaration = function CSSStyleDeclaration(){
		this.length = 0;
		this.parentRule = null;

		// NON-STANDARD
		this._importants = {};
	};


	CSSOM.CSSStyleDeclaration.prototype = {

		constructor: CSSOM.CSSStyleDeclaration,

		/**
		 *
		 * @param {string} name
		 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyValue
		 * @return {string} the value of the property if it has been explicitly set for this declaration block.
		 * Returns the empty string if the property has not been set.
		 */
		getPropertyValue: function(name) {
			return this[name] || "";
		},

		/**
		 *
		 * @param {string} name
		 * @param {string} value
		 * @param {string} [priority=null] "important" or null
		 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-setProperty
		 */
		setProperty: function(name, value, priority) {
			if (this[name]) {
				// Property already exist. Overwrite it.
				var index = Array.prototype.indexOf.call(this, name);
				if (index < 0) {
					this[this.length] = name;
					this.length++;
				}
			} else {
				// New property.
				this[this.length] = name;
				this.length++;
			}
			this[name] = value + "";
			this._importants[name] = priority;
		},

		/**
		 *
		 * @param {string} name
		 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-removeProperty
		 * @return {string} the value of the property if it has been explicitly set for this declaration block.
		 * Returns the empty string if the property has not been set or the property name does not correspond to a known CSS property.
		 */
		removeProperty: function(name) {
			if (!(name in this)) {
				return "";
			}
			var index = Array.prototype.indexOf.call(this, name);
			if (index < 0) {
				return "";
			}
			var prevValue = this[name];
			this[name] = "";

			// That's what WebKit and Opera do
			Array.prototype.splice.call(this, index, 1);

			// That's what Firefox does
			//this[index] = ""

			return prevValue;
		},

		getPropertyCSSValue: function() {
			//FIXME
		},

		/**
		 *
		 * @param {String} name
		 */
		getPropertyPriority: function(name) {
			return this._importants[name] || "";
		},


		/**
		 *   element.style.overflow = "auto"
		 *   element.style.getPropertyShorthand("overflow-x")
		 *   -> "overflow"
		 */
		getPropertyShorthand: function() {
			//FIXME
		},

		isPropertyImplicit: function() {
			//FIXME
		},

		// Doesn't work in IE < 9
		get cssText(){
			var properties = [];
			for (var i=0, length=this.length; i < length; ++i) {
				var name = this[i];
				var value = this.getPropertyValue(name);
				var priority = this.getPropertyPriority(name);
				if (priority) {
					priority = " !" + priority;
				}
				properties[i] = name + ": " + value + priority + ";";
			}
			return properties.join(" ");
		},

		set cssText(text){
			var i, name;
			for (i = this.length; i--;) {
				name = this[i];
				this[name] = "";
			}
			Array.prototype.splice.call(this, 0, this.length);
			this._importants = {};

			var dummyRule = CSSOM.parse('#bogus{' + text + '}').cssRules[0].style;
			var length = dummyRule.length;
			for (i = 0; i < length; ++i) {
				name = dummyRule[i];
				this.setProperty(dummyRule[i], dummyRule.getPropertyValue(name), dummyRule.getPropertyPriority(name));
			}
		}
	};


	//.CommonJS
	CSSStyleDeclaration.CSSStyleDeclaration = CSSOM.CSSStyleDeclaration;
	CSSOM.parse = requireParse().parse; // Cannot be included sooner due to the mutual dependency between parse.js and CSSStyleDeclaration.js
	///CommonJS
	return CSSStyleDeclaration;
}

//.CommonJS
({
	CSSStyleSheet: requireCSSStyleSheet().CSSStyleSheet,
	CSSRule: CSSRule.CSSRule,
	CSSStyleRule: requireCSSStyleRule().CSSStyleRule,
	CSSGroupingRule: CSSGroupingRule.CSSGroupingRule,
	CSSConditionRule: CSSConditionRule.CSSConditionRule,
	CSSMediaRule: CSSMediaRule.CSSMediaRule,
	CSSSupportsRule: CSSSupportsRule.CSSSupportsRule,
	CSSStyleDeclaration: requireCSSStyleDeclaration().CSSStyleDeclaration,
	CSSKeyframeRule: requireCSSKeyframeRule().CSSKeyframeRule,
	CSSKeyframesRule: CSSKeyframesRule.CSSKeyframesRule
});

requireCSSStyleDeclaration().CSSStyleDeclaration;
requireCSSStyleRule().CSSStyleRule;
requireCSSImportRule().CSSImportRule;
requireCSSFontFaceRule().CSSFontFaceRule;
requireCSSStyleSheet().CSSStyleSheet;
requireCSSKeyframeRule().CSSKeyframeRule;
var parse$1 = requireParse().parse;

const tagName$c = 'style';

/**
 * @implements globalThis.HTMLStyleElement
 */
class HTMLStyleElement extends TextElement {
  constructor(ownerDocument, localName = tagName$c) {
    super(ownerDocument, localName);
    this[SHEET] = null;
  }

  get sheet() {
    const sheet = this[SHEET];
    if (sheet !== null) {
      return sheet;
    }
    return this[SHEET] = parse$1(this.textContent);
  }

  get innerHTML() {
    return super.innerHTML || '';
  }
  set innerHTML(value) {
    super.textContent = value;
    this[SHEET] = null;
  }
  get innerText() {
    return super.innerText || '';
  }
  set innerText(value) {
    super.textContent = value;
    this[SHEET] = null;
  }
  get textContent() {
    return super.textContent || '';
  }
  set textContent(value) {
    super.textContent = value;
    this[SHEET] = null;
  }
}

registerHTMLClass(tagName$c, HTMLStyleElement);

/**
 * @implements globalThis.HTMLTimeElement
 */
class HTMLTimeElement extends HTMLElement {
  constructor(ownerDocument, localName = 'time') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLFieldSetElement
 */
class HTMLFieldSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'fieldset') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLEmbedElement
 */
class HTMLEmbedElement extends HTMLElement {
  constructor(ownerDocument, localName = 'embed') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLHRElement
 */
class HTMLHRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'hr') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLProgressElement
 */
class HTMLProgressElement extends HTMLElement {
  constructor(ownerDocument, localName = 'progress') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLParagraphElement
 */
class HTMLParagraphElement extends HTMLElement {
  constructor(ownerDocument, localName = 'p') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLTableElement
 */
class HTMLTableElement extends HTMLElement {
  constructor(ownerDocument, localName = 'table') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLFrameSetElement
 */
class HTMLFrameSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'frameset') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLLIElement
 */
class HTMLLIElement extends HTMLElement {
  constructor(ownerDocument, localName = 'li') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLBaseElement
 */
class HTMLBaseElement extends HTMLElement {
  constructor(ownerDocument, localName = 'base') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLDataListElement
 */
class HTMLDataListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'datalist') {
    super(ownerDocument, localName);
  }
}

const tagName$b = 'input';

/**
 * @implements globalThis.HTMLInputElement
 */
class HTMLInputElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$b) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get autofocus() { return booleanAttribute.get(this, 'autofocus') || -1; }
  set autofocus(value) { booleanAttribute.set(this, 'autofocus', value); }

  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }

  get placeholder() { return this.getAttribute('placeholder'); }
  set placeholder(value) { this.setAttribute('placeholder', value); }

  get type() { return this.getAttribute('type'); }
  set type(value) { this.setAttribute('type', value); }

  get value() { return stringAttribute.get(this, 'value'); }
  set value(value) { stringAttribute.set(this, 'value', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName$b, HTMLInputElement);

/**
 * @implements globalThis.HTMLParamElement
 */
class HTMLParamElement extends HTMLElement {
  constructor(ownerDocument, localName = 'param') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLMediaElement
 */
class HTMLMediaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'media') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLAudioElement
 */
class HTMLAudioElement extends HTMLElement {
  constructor(ownerDocument, localName = 'audio') {
    super(ownerDocument, localName);
  }
}

const tagName$a = 'h1';

/**
 * @implements globalThis.HTMLHeadingElement
 */
class HTMLHeadingElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$a) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass([tagName$a, 'h2', 'h3', 'h4', 'h5', 'h6'], HTMLHeadingElement);

/**
 * @implements globalThis.HTMLDirectoryElement
 */
class HTMLDirectoryElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dir') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLQuoteElement
 */
class HTMLQuoteElement extends HTMLElement {
  constructor(ownerDocument, localName = 'quote') {
    super(ownerDocument, localName);
  }
}

class Canvas {
              constructor(width, height) {
                this.width = width;
                this.height = height;
              }
              getContext() { return null; }
              toDataURL() { return ''; }
            }
            var Canvas$1 = {createCanvas: (width, height) => new Canvas(width, height)};

const {createCanvas} = Canvas$1;

const tagName$9 = 'canvas';

/**
 * @implements globalThis.HTMLCanvasElement
 */
class HTMLCanvasElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$9) {
    super(ownerDocument, localName);
    this[IMAGE] = createCanvas(300, 150);
  }

  get width() {
    return this[IMAGE].width;
  }

  set width(value) {
    numericAttribute.set(this, 'width', value);
    this[IMAGE].width = value;
  }

  get height() {
    return this[IMAGE].height;
  }

  set height(value) {
    numericAttribute.set(this, 'height', value);
    this[IMAGE].height = value;
  }

  getContext(type) {
    return this[IMAGE].getContext(type);
  }

  toDataURL(...args) {
    return this[IMAGE].toDataURL(...args);
  }
}

registerHTMLClass(tagName$9, HTMLCanvasElement);

/**
 * @implements globalThis.HTMLLegendElement
 */
class HTMLLegendElement extends HTMLElement {
  constructor(ownerDocument, localName = 'legend') {
    super(ownerDocument, localName);
  }
}

const tagName$8 = 'option';

/**
 * @implements globalThis.HTMLOptionElement
 */
class HTMLOptionElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$8) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get value() { return stringAttribute.get(this, 'value'); }
  set value(value) { stringAttribute.set(this, 'value', value); }
  /* c8 ignore stop */

  get selected() { return booleanAttribute.get(this, 'selected'); }
  set selected(value) {
    const option = this.parentElement?.querySelector('option[selected]');
    if (option && option !== this)
      option.selected = false;
    booleanAttribute.set(this, 'selected', value);
  }
}

registerHTMLClass(tagName$8, HTMLOptionElement);

/**
 * @implements globalThis.HTMLSpanElement
 */
class HTMLSpanElement extends HTMLElement {
  constructor(ownerDocument, localName = 'span') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLMeterElement
 */
class HTMLMeterElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meter') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLVideoElement
 */
class HTMLVideoElement extends HTMLElement {
  constructor(ownerDocument, localName = 'video') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLTableCellElement
 */
class HTMLTableCellElement extends HTMLElement {
  constructor(ownerDocument, localName = 'td') {
    super(ownerDocument, localName);
  }
}

const tagName$7 = 'title';

/**
 * @implements globalThis.HTMLTitleElement
 */
class HTMLTitleElement extends TextElement {
  constructor(ownerDocument, localName = tagName$7) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName$7, HTMLTitleElement);

/**
 * @implements globalThis.HTMLOutputElement
 */
class HTMLOutputElement extends HTMLElement {
  constructor(ownerDocument, localName = 'output') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLTableRowElement
 */
class HTMLTableRowElement extends HTMLElement {
  constructor(ownerDocument, localName = 'tr') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLDataElement
 */
class HTMLDataElement extends HTMLElement {
  constructor(ownerDocument, localName = 'data') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLMenuElement
 */
class HTMLMenuElement extends HTMLElement {
  constructor(ownerDocument, localName = 'menu') {
    super(ownerDocument, localName);
  }
}

const tagName$6 = 'select';

/**
 * @implements globalThis.HTMLSelectElement
 */
class HTMLSelectElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$6) {
    super(ownerDocument, localName);
  }

  get options() {
    let children = new NodeList;
    let {firstElementChild} = this;
    while (firstElementChild) {
      if (firstElementChild.tagName === 'OPTGROUP')
        children.push(...firstElementChild.children);
      else
        children.push(firstElementChild);
      firstElementChild = firstElementChild.nextElementSibling;
    }
    return children;
  }

  /* c8 ignore start */
  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }
  /* c8 ignore stop */

  get value() { return this.querySelector('option[selected]')?.value; }
}

registerHTMLClass(tagName$6, HTMLSelectElement);

/**
 * @implements globalThis.HTMLBRElement
 */
class HTMLBRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'br') {
    super(ownerDocument, localName);
  }
}

const tagName$5 = 'button';

/**
 * @implements globalThis.HTMLButtonElement
 */
class HTMLButtonElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$5) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }

  get type() { return this.getAttribute('type'); }
  set type(value) { this.setAttribute('type', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName$5, HTMLButtonElement);

/**
 * @implements globalThis.HTMLMapElement
 */
class HTMLMapElement extends HTMLElement {
  constructor(ownerDocument, localName = 'map') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLOptGroupElement
 */
class HTMLOptGroupElement extends HTMLElement {
  constructor(ownerDocument, localName = 'optgroup') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLDListElement
 */
class HTMLDListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dl') {
    super(ownerDocument, localName);
  }
}

const tagName$4 = 'textarea';

/**
 * @implements globalThis.HTMLTextAreaElement
 */
class HTMLTextAreaElement extends TextElement {
  constructor(ownerDocument, localName = tagName$4) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }

  get placeholder() { return this.getAttribute('placeholder'); }
  set placeholder(value) { this.setAttribute('placeholder', value); }

  get type() { return this.getAttribute('type'); }
  set type(value) { this.setAttribute('type', value); }

  get value() { return this.textContent; }
  set value(content) { this.textContent = content; }
  /* c8 ignore stop */
}

registerHTMLClass(tagName$4, HTMLTextAreaElement);

/**
 * @implements globalThis.HTMLFontElement
 */
class HTMLFontElement extends HTMLElement {
  constructor(ownerDocument, localName = 'font') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLDivElement
 */
class HTMLDivElement extends HTMLElement {
  constructor(ownerDocument, localName = 'div') {
    super(ownerDocument, localName);
  }
}

const tagName$3 = 'link';

/**
 * @implements globalThis.HTMLLinkElement
 */
class HTMLLinkElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$3) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */ // copy paste from img.src, already covered
  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get href() { return stringAttribute.get(this, 'href'); }
  set href(value) { stringAttribute.set(this, 'href', value); }

  get hreflang() { return stringAttribute.get(this, 'hreflang'); }
  set hreflang(value) { stringAttribute.set(this, 'hreflang', value); }

  get media() { return stringAttribute.get(this, 'media'); }
  set media(value) { stringAttribute.set(this, 'media', value); }

  get rel() { return stringAttribute.get(this, 'rel'); }
  set rel(value) { stringAttribute.set(this, 'rel', value); }

  get type() { return stringAttribute.get(this, 'type'); }
  set type(value) { stringAttribute.set(this, 'type', value); }
  /* c8 ignore stop */

}

registerHTMLClass(tagName$3, HTMLLinkElement);

/**
 * @implements globalThis.HTMLSlotElement
 */
class HTMLSlotElement extends HTMLElement {
  constructor(ownerDocument, localName = 'slot') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLFormElement
 */
class HTMLFormElement extends HTMLElement {
  constructor(ownerDocument, localName = 'form') {
    super(ownerDocument, localName);
  }
}

const tagName$2 = 'img';

/**
 * @implements globalThis.HTMLImageElement
 */
class HTMLImageElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$2) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get alt() { return stringAttribute.get(this, 'alt'); }
  set alt(value) { stringAttribute.set(this, 'alt', value); }

  get sizes() { return stringAttribute.get(this, 'sizes'); }
  set sizes(value) { stringAttribute.set(this, 'sizes', value); }

  get src() { return stringAttribute.get(this, 'src'); }
  set src(value) { stringAttribute.set(this, 'src', value); }

  get srcset() { return stringAttribute.get(this, 'srcset'); }
  set srcset(value) { stringAttribute.set(this, 'srcset', value); }

  get title() { return stringAttribute.get(this, 'title'); }
  set title(value) { stringAttribute.set(this, 'title', value); }

  get width() { return numericAttribute.get(this, 'width'); }
  set width(value) { numericAttribute.set(this, 'width', value); }

  get height() { return numericAttribute.get(this, 'height'); }
  set height(value) { numericAttribute.set(this, 'height', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName$2, HTMLImageElement);

/**
 * @implements globalThis.HTMLPreElement
 */
class HTMLPreElement extends HTMLElement {
  constructor(ownerDocument, localName = 'pre') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLUListElement
 */
class HTMLUListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'ul') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLMetaElement
 */
class HTMLMetaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meta') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLPictureElement
 */
class HTMLPictureElement extends HTMLElement {
  constructor(ownerDocument, localName = 'picture') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLAreaElement
 */
class HTMLAreaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'area') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLOListElement
 */
class HTMLOListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'ol') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLTableCaptionElement
 */
class HTMLTableCaptionElement extends HTMLElement {
  constructor(ownerDocument, localName = 'caption') {
    super(ownerDocument, localName);
  }
}

const tagName$1 = 'a';

/**
 * @implements globalThis.HTMLAnchorElement
 */
class HTMLAnchorElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName$1) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */ // copy paste from img.src, already covered
  get href() { return encodeURI(stringAttribute.get(this, 'href')); }
  set href(value) { stringAttribute.set(this, 'href', decodeURI(value)); }

  get download() { return encodeURI(stringAttribute.get(this, 'download')); }
  set download(value) { stringAttribute.set(this, 'download', decodeURI(value)); }

  get target() { return stringAttribute.get(this, 'target'); }
  set target(value) { stringAttribute.set(this, 'target', value); }

  get type() { return stringAttribute.get(this, 'type'); }
  set type(value) { stringAttribute.set(this, 'type', value); }
  /* c8 ignore stop */

}

registerHTMLClass(tagName$1, HTMLAnchorElement);

/**
 * @implements globalThis.HTMLLabelElement
 */
class HTMLLabelElement extends HTMLElement {
  constructor(ownerDocument, localName = 'label') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLUnknownElement
 */
class HTMLUnknownElement extends HTMLElement {
  constructor(ownerDocument, localName = 'unknown') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLModElement
 */
class HTMLModElement extends HTMLElement {
  constructor(ownerDocument, localName = 'mod') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLDetailsElement
 */
class HTMLDetailsElement extends HTMLElement {
  constructor(ownerDocument, localName = 'details') {
    super(ownerDocument, localName);
  }
}

const tagName = 'source';

/**
 * @implements globalThis.HTMLSourceElement
 */
class HTMLSourceElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get src() { return stringAttribute.get(this, 'src'); }
  set src(value) { stringAttribute.set(this, 'src', value); }

  get srcset() { return stringAttribute.get(this, 'srcset'); }
  set srcset(value) { stringAttribute.set(this, 'srcset', value); }

  get sizes() { return stringAttribute.get(this, 'sizes'); }
  set sizes(value) { stringAttribute.set(this, 'sizes', value); }

  get type() { return stringAttribute.get(this, 'type'); }
  set type(value) { stringAttribute.set(this, 'type', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLSourceElement);

/**
 * @implements globalThis.HTMLTrackElement
 */
class HTMLTrackElement extends HTMLElement {
  constructor(ownerDocument, localName = 'track') {
    super(ownerDocument, localName);
  }
}

/**
 * @implements globalThis.HTMLMarqueeElement
 */
class HTMLMarqueeElement extends HTMLElement {
  constructor(ownerDocument, localName = 'marquee') {
    super(ownerDocument, localName);
  }
}

const HTMLClasses = {
  HTMLElement,
  HTMLTemplateElement,
  HTMLHtmlElement,
  HTMLScriptElement,
  HTMLFrameElement,
  HTMLIFrameElement,
  HTMLObjectElement,
  HTMLHeadElement,
  HTMLBodyElement,
  HTMLStyleElement,
  HTMLTimeElement,
  HTMLFieldSetElement,
  HTMLEmbedElement,
  HTMLHRElement,
  HTMLProgressElement,
  HTMLParagraphElement,
  HTMLTableElement,
  HTMLFrameSetElement,
  HTMLLIElement,
  HTMLBaseElement,
  HTMLDataListElement,
  HTMLInputElement,
  HTMLParamElement,
  HTMLMediaElement,
  HTMLAudioElement,
  HTMLHeadingElement,
  HTMLDirectoryElement,
  HTMLQuoteElement,
  HTMLCanvasElement,
  HTMLLegendElement,
  HTMLOptionElement,
  HTMLSpanElement,
  HTMLMeterElement,
  HTMLVideoElement,
  HTMLTableCellElement,
  HTMLTitleElement,
  HTMLOutputElement,
  HTMLTableRowElement,
  HTMLDataElement,
  HTMLMenuElement,
  HTMLSelectElement,
  HTMLBRElement,
  HTMLButtonElement,
  HTMLMapElement,
  HTMLOptGroupElement,
  HTMLDListElement,
  HTMLTextAreaElement,
  HTMLFontElement,
  HTMLDivElement,
  HTMLLinkElement,
  HTMLSlotElement,
  HTMLFormElement,
  HTMLImageElement,
  HTMLPreElement,
  HTMLUListElement,
  HTMLMetaElement,
  HTMLPictureElement,
  HTMLAreaElement,
  HTMLOListElement,
  HTMLTableCaptionElement,
  HTMLAnchorElement,
  HTMLLabelElement,
  HTMLUnknownElement,
  HTMLModElement,
  HTMLDetailsElement,
  HTMLSourceElement,
  HTMLTrackElement,
  HTMLMarqueeElement
};

// TODO: ensure all these are text only
// /^(?:plaintext|script|style|textarea|title|xmp)$/i

const voidElements = {test: () => true};
const Mime = {
  'text/html': {
    docType: '<!DOCTYPE html>',
    ignoreCase: true,
    voidElements: /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i
  },
  'image/svg+xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  'text/xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  'application/xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  'application/xhtml+xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  }
};

// https://dom.spec.whatwg.org/#interface-customevent

/**
 * @implements globalThis.CustomEvent
 */
const GlobalCustomEvent = typeof CustomEvent === 'function' ?
  CustomEvent :
  class CustomEvent extends GlobalEvent {
    constructor(type, eventInitDict = {}) {
      super(type, eventInitDict);
      this.detail = eventInitDict.detail;
    }
  };

/* c8 ignore stop */

// https://dom.spec.whatwg.org/#interface-customevent

/**
 * @implements globalThis.InputEvent
 */
class InputEvent extends GlobalEvent {
  constructor(type, inputEventInit = {}) {
    super(type, inputEventInit);
    this.inputType = inputEventInit.inputType;
    this.data = inputEventInit.data;
    this.dataTransfer = inputEventInit.dataTransfer;
    this.isComposing = inputEventInit.isComposing || false;
    this.ranges = inputEventInit.ranges;
  }
}
/* c8 ignore stop */

const ImageClass = ownerDocument =>
/**
 * @implements globalThis.Image
 */
class Image extends HTMLImageElement {
  constructor(width, height) {
    super(ownerDocument);
    switch (arguments.length) {
      case 1:
        this.height = width;
        this.width = width;
        break;
      case 2:
        this.height = height;
        this.width = width;
        break;
    }
  }
};

// https://dom.spec.whatwg.org/#concept-live-range

const deleteContents = ({[START]: start, [END]: end}, fragment = null) => {
  setAdjacent(start[PREV], end[NEXT]);
  do {
    const after = getEnd(start);
    const next = after === end ? after : after[NEXT];
    if (fragment)
      fragment.insertBefore(start, fragment[END]);
    else
      start.remove();
    start = next;
  } while (start !== end);
};

/**
 * @implements globalThis.Range
 */
class Range {
  constructor() {
    this[START] = null;
    this[END] = null;
    this.commonAncestorContainer = null;
  }

  /* TODO: this is more complicated than it looks
  setStart(node, offset) {
    this[START] = node.childNodes[offset];
  }

  setEnd(node, offset) {
    this[END] = getEnd(node.childNodes[offset]);
  }
  //*/

  insertNode(newNode) {
    this[END].parentNode.insertBefore(newNode, this[START]);
  }

  selectNode(node) {
    this[START] = node;
    this[END] = getEnd(node);
  }

  surroundContents(parentNode) {
    parentNode.replaceChildren(this.extractContents());
  }

  setStartBefore(node) {
    this[START] = node;
  }

  setStartAfter(node) {
    this[START] = node.nextSibling;
  }

  setEndBefore(node) {
    this[END] = getEnd(node.previousSibling);
  }

  setEndAfter(node) {
    this[END] = getEnd(node);
  }

  cloneContents() {
    let {[START]: start, [END]: end} = this;
    const fragment = start.ownerDocument.createDocumentFragment();
    while (start !== end) {
      fragment.insertBefore(start.cloneNode(true), fragment[END]);
      start = getEnd(start);
      if (start !== end)
        start = start[NEXT];
    }
    return fragment;
  }

  deleteContents() {
    deleteContents(this);
  }

  extractContents() {
    const fragment = this[START].ownerDocument.createDocumentFragment();
    deleteContents(this, fragment);
    return fragment;
  }

  createContextualFragment(html) {
    const template = this.commonAncestorContainer.createElement('template');
    template.innerHTML = html;
    this.selectNode(template.content);
    return template.content;
  }

  cloneRange() {
    const range = new Range;
    range[START] = this[START];
    range[END] = this[END];
    return range;
  }
}

const isOK = ({nodeType}, mask) => {
  switch (nodeType) {
    case ELEMENT_NODE:
      return mask & SHOW_ELEMENT;
    case TEXT_NODE:
      return mask & SHOW_TEXT;
    case COMMENT_NODE:
      return mask & SHOW_COMMENT;
  }
  return 0;
};

/**
 * @implements globalThis.TreeWalker
 */
class TreeWalker {
  constructor(root, whatToShow = SHOW_ALL) {
    this.root = root;
    this.currentNode = root;
    this.whatToShow = whatToShow;
    let {[NEXT]: next, [END]: end} = root;
    if (root.nodeType === DOCUMENT_NODE) {
      const {documentElement} = root;
      next = documentElement;
      end = documentElement[END];
    }
    const nodes = [];
    while (next !== end) {
      if (isOK(next, whatToShow))
        nodes.push(next);
      next = next[NEXT];
    }
    this[PRIVATE] = {i: 0, nodes};
  }

  nextNode() {
    const $ = this[PRIVATE];
    this.currentNode = $.i < $.nodes.length ? $.nodes[$.i++] : null;
    return this.currentNode;
  }
}

const query = (method, ownerDocument, selectors) => {
  let {[NEXT]: next, [END]: end} = ownerDocument;
  return method.call({ownerDocument, [NEXT]: next, [END]: end}, selectors);
};

const globalExports = assign(
  {},
  Facades,
  HTMLClasses,
  {
    CustomEvent: GlobalCustomEvent,
    Event: GlobalEvent,
    EventTarget: DOMEventTarget,
    InputEvent,
    NamedNodeMap,
    NodeList
  }
);

const window$1 = new WeakMap;

/**
 * @implements globalThis.Document
 */
class Document$1 extends NonElementParentNode {
  constructor(type) {
    super(null, '#document', DOCUMENT_NODE);
    this[CUSTOM_ELEMENTS] = {active: false, registry: null};
    this[MUTATION_OBSERVER] = {active: false, class: null};
    this[MIME] = Mime[type];
    /** @type {DocumentType} */
    this[DOCTYPE] = null;
    this[DOM_PARSER] = null;
    this[GLOBALS] = null;
    this[IMAGE] = null;
    this[UPGRADE] = null;
  }

  /**
   * @type {globalThis.Document['defaultView']}
   */
  get defaultView() {
    if (!window$1.has(this))
      window$1.set(this, new Proxy(globalThis, {
        set: (target, name, value) => {
          switch (name) {
            case 'addEventListener':
            case 'removeEventListener':
            case 'dispatchEvent':
              this[EVENT_TARGET][name] = value;
              break;
            default:
              target[name] = value;
              break;
          }
          return true;
        },
        get: (globalThis, name) => {
          switch (name) {
            case 'addEventListener':
            case 'removeEventListener':
            case 'dispatchEvent':
              if (!this[EVENT_TARGET]) {
                const et = this[EVENT_TARGET] = new DOMEventTarget;
                et.dispatchEvent = et.dispatchEvent.bind(et);
                et.addEventListener = et.addEventListener.bind(et);
                et.removeEventListener = et.removeEventListener.bind(et);
              }
              return this[EVENT_TARGET][name];
            case 'document':
              return this;
            /* c8 ignore start */
            case 'navigator':
              return {
                userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
              };
            /* c8 ignore stop */
            case 'window':
              return window$1.get(this);
            case 'customElements':
              if (!this[CUSTOM_ELEMENTS].registry)
                this[CUSTOM_ELEMENTS] = new CustomElementRegistry(this);
              return this[CUSTOM_ELEMENTS];
            case 'performance':
              return performance;
            case 'DOMParser':
              return this[DOM_PARSER];
            case 'Image':
              if (!this[IMAGE])
                this[IMAGE] = ImageClass(this);
              return this[IMAGE];
            case 'MutationObserver':
              if (!this[MUTATION_OBSERVER].class)
                this[MUTATION_OBSERVER] = new MutationObserverClass(this);
              return this[MUTATION_OBSERVER].class;
          }
          return (this[GLOBALS] && this[GLOBALS][name]) ||
                  globalExports[name] ||
                  globalThis[name];
        }
      }));
    return window$1.get(this);
  }

  get doctype() {
    const docType = this[DOCTYPE];
    if (docType)
      return docType;
    const {firstChild} = this;
    if (firstChild && firstChild.nodeType === DOCUMENT_TYPE_NODE)
      return (this[DOCTYPE] = firstChild);
    return null;
  }

  set doctype(value) {
    if (/^([a-z:]+)(\s+system|\s+public(\s+"([^"]+)")?)?(\s+"([^"]+)")?/i.test(value)) {
      const {$1: name, $4: publicId, $6: systemId} = RegExp;
      this[DOCTYPE] = new DocumentType$1(this, name, publicId, systemId);
      knownSiblings(this, this[DOCTYPE], this[NEXT]);
    }
  }

  get documentElement() {
    return this.firstElementChild;
  }

  get isConnected() { return true; }

  /**
   * @protected
   */
   _getParent() {
    return this[EVENT_TARGET];
  }

  createAttribute(name) { return new Attr$1(this, name); }
  createComment(textContent) { return new Comment$2(this, textContent); }
  createDocumentFragment() { return new DocumentFragment$1(this); }
  createDocumentType(name, publicId, systemId) { return new DocumentType$1(this, name, publicId, systemId); }
  createElement(localName) { return new Element$1(this, localName); }
  createRange() {
    const range = new Range;
    range.commonAncestorContainer = this;
    return range;
  }
  createTextNode(textContent) { return new Text$1(this, textContent); }
  createTreeWalker(root, whatToShow = -1) { return new TreeWalker(root, whatToShow); }
  createNodeIterator(root, whatToShow = -1) { return this.createTreeWalker(root, whatToShow); }

  createEvent(name) {
    const event = create$1(name === 'Event' ? new GlobalEvent('') : new GlobalCustomEvent(''));
    event.initEvent = event.initCustomEvent = (
      type,
      canBubble = false,
      cancelable = false,
      detail
    ) => {
      defineProperties(event, {
        type: {value: type},
        canBubble: {value: canBubble},
        cancelable: {value: cancelable},
        detail: {value: detail}
      });
    };
    return event;
  }

  cloneNode(deep = false) {
    const {
      constructor,
      [CUSTOM_ELEMENTS]: customElements,
      [DOCTYPE]: doctype
    } = this;
    const document = new constructor();
    document[CUSTOM_ELEMENTS] = customElements;
    if (deep) {
      const end = document[END];
      const {childNodes} = this;
      for (let {length} = childNodes, i = 0; i < length; i++)
        document.insertBefore(childNodes[i].cloneNode(true), end);
      if (doctype)
        document[DOCTYPE] = childNodes[0];
    }
    return document;
  }

  importNode(externalNode) {
    // important: keep the signature length as *one*
    // or it would behave like old IE or Edge with polyfills
    const deep = 1 < arguments.length && !!arguments[1];
    const node = externalNode.cloneNode(deep);
    const {[CUSTOM_ELEMENTS]: customElements} = this;
    const {active} = customElements;
    const upgrade = element => {
      const {ownerDocument, nodeType} = element;
      element.ownerDocument = this;
      if (active && ownerDocument !== this && nodeType === ELEMENT_NODE)
        customElements.upgrade(element);
    };
    upgrade(node);
    if (deep) {
      switch (node.nodeType) {
        case ELEMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE: {
          let {[NEXT]: next, [END]: end} = node;
          while (next !== end) {
            if (next.nodeType === ELEMENT_NODE)
              upgrade(next);
            next = next[NEXT];
          }
          break;
        }
      }
    }
    return node;
  }

  toString() { return this.childNodes.join(''); }

  querySelector(selectors) {
    return query(super.querySelector, this, selectors);
  }

  querySelectorAll(selectors) {
    return query(super.querySelectorAll, this, selectors);
  }

  /* c8 ignore start */
  getElementsByTagNameNS(_, name) {
    return this.getElementsByTagName(name);
  }
  createAttributeNS(_, name) {
    return this.createAttribute(name);
  }
  createElementNS(nsp, localName, options) {
    return nsp === SVG_NAMESPACE ?
            new SVGElement$1(this, localName, null) :
            this.createElement(localName, options);
  }
  /* c8 ignore stop */
}

setPrototypeOf(
  globalExports.Document = function Document() {
    illegalConstructor();
  },
  Document$1
).prototype = Document$1.prototype;

const createHTMLElement$1 = (ownerDocument, builtin, localName, options) => {
  if (!builtin && htmlClasses.has(localName)) {
    const Class = htmlClasses.get(localName);
    return new Class(ownerDocument, localName);
  }
  const {[CUSTOM_ELEMENTS]: {active, registry}} = ownerDocument;
  if (active) {
    const ce = builtin ? options.is : localName;
    if (registry.has(ce)) {
      const {Class} = registry.get(ce);
      const element = new Class(ownerDocument, localName);
      customElements.set(element, {connected: false});
      return element;
    }
  }
  return new HTMLElement(ownerDocument, localName);
};

/**
 * @implements globalThis.HTMLDocument
 */
class HTMLDocument extends Document$1 {
  constructor() { super('text/html'); }

  get all() {
    const nodeList = new NodeList;
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      switch (next.nodeType) {
        case ELEMENT_NODE:
          nodeList.push(next);
          break;
      }
      next = next[NEXT];
    }
    return nodeList;
  }

  /**
   * @type HTMLHeadElement
   */
  get head() {
    const {documentElement} = this;
    let {firstElementChild} = documentElement;
    if (!firstElementChild || firstElementChild.tagName !== 'HEAD') {
      firstElementChild = this.createElement('head');
      documentElement.prepend(firstElementChild);
    }
    return firstElementChild;
  }

  /**
   * @type HTMLBodyElement
   */
  get body() {
    const {head} = this;
    let {nextElementSibling} = head;
    if (!nextElementSibling || nextElementSibling.tagName !== 'BODY') {
      nextElementSibling = this.createElement('body');
      head.after(nextElementSibling);
    }
    return nextElementSibling;
  }

  /**
   * @type HTMLTitleElement
   */
  get title() {
    const {head} = this;
    let title = head.getElementsByTagName('title').shift();
    return title ? title.textContent : '';
  }

  set title(textContent) {
    const {head} = this;
    let title = head.getElementsByTagName('title').shift();
    if (title)
      title.textContent = textContent;
    else {
      head.insertBefore(
        this.createElement('title'),
        head.firstChild
      ).textContent = textContent;
    }
  }

  createElement(localName, options) {
    const builtin = !!(options && options.is);
    const element = createHTMLElement$1(this, builtin, localName, options);
    if (builtin)
      element.setAttribute('is', options.is);
    return element;
  }
}

/**
 * @implements globalThis.Document
 */
class SVGDocument extends Document$1 {
  constructor() { super('image/svg+xml'); }
  toString() {
    return this[MIME].docType + super.toString();
  }
}

/**
 * @implements globalThis.XMLDocument
 */
class XMLDocument extends Document$1 {
  constructor() { super('text/xml'); }
  toString() {
    return this[MIME].docType + super.toString();
  }
}

/**
 * @implements globalThis.DOMParser
 */
class DOMParser {

  /** @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc */
  /**
   * @template {string|NodeJS.ReadableStream} INPUT
   * @template {keyof MimeToDoc} MIME
   * @param {INPUT} markupLanguage
   * @param {MIME} mimeType
   * @returns {INPUT extends string ? MimeToDoc[MIME] : Promise<MimeToDoc[MIME]>}
   */
  parseFromString(markupLanguage, mimeType, globals = null) {
    let isHTML = false, document;
    if (mimeType === 'text/html') {
      isHTML = true;
      document = new HTMLDocument;
    }
    else if (mimeType === 'image/svg+xml')
      document = new SVGDocument;
    else
      document = new XMLDocument;
    document[DOM_PARSER] = DOMParser;
    if (globals)
      document[GLOBALS] = globals;
    if (isHTML && markupLanguage === '...')
      markupLanguage = '<!doctype html><html><head></head><body></body></html>';
    return markupLanguage ?
            parseFromString(document, isHTML, markupLanguage) :
            document;
  }
}

/**
 * @typedef {import('../interface/node').Node} Node
 * @typedef {import('../svg/element').SVGElement} SVGElement
 * @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc
 */

/**
 * @template {keyof MimeToDoc} MIME
 * @extends {Writable}
 */
class DOMStream extends Writable {
  /**
   * @param {MIME} mimeType
   * @param {(name: string, attributes: Record<string, string>) => boolean} filter
   */
  constructor (mimeType, filter) {
    super();
    this.mimeType = mimeType;
    if (mimeType === 'text/html') this.isHTML = true;
    this.filter = filter;
    /**
     * @type {{
     *   document: MimeToDoc[MIME]
     *   node: MimeToDoc[MIME]|Node
     *   ownerSVGElement: SVGElement|undefined
     *   rootNode: Node|undefined
     * }[]}
     */
    this.stack = []; // LIFO
    this.init();
  }

  newDocument () {
    let document;
    if (this.mimeType === 'text/html') {
      document = new HTMLDocument();
    } else if (this.mimeType === 'image/svg+xml') {
      document = new SVGDocument();
    } else {
      document = new XMLDocument();
    }
    if (this.doctype) document.doctype = this.doctype;
    this.stack.push({ document, node: document });
  }

  init ()  {
    this.parserStream = new WritableStream({
      // <!DOCTYPE ...>
      onprocessinginstruction: (name, data) => {
        this.doctype = onprocessinginstruction(name, data);
      },
      // <tagName>
      onopentag: (name, attributes) => {
        if (this.filter(name, attributes)) this.newDocument();
        for (const item of this.stack) {
          onopentag(name, attributes, item, this.isHTML);
        }
      },
      // #text, #comment
      oncomment: (data) => {
        for (const item of this.stack) {
          oncomment(data, item);
        }
      },
      ontext: (text) => {
        for (const item of this.stack) {
          ontext(text, item);
        }
      },
      // </tagName>
      onclosetag: () => {
        for (const item of this.stack) {
          onclosetag(item, this.isHTML, document => {
            this.emit('document', document);
            this.stack.length -= 1;
          });
        }
      }
    }, {
      lowerCaseAttributeNames: false,
      decodeEntities: true,
      xmlMode: !this.isHTML
    });
    this.parserStream.on('error', err => this.emit('error', err));
  }

  /**
   * @param {string|Buffer} chunk 
   * @param {string} encoding 
   * @param {() => void} callback 
   */
  _write(chunk, encoding, callback) {
    this.parserStream._write(chunk, encoding, callback);
  }

  /**
   * @param {() => void} callback 
   */
  _final(callback) {
    this.parserStream._final(callback);
  }

  /**
   * An alias for `docStream.on('document', doc => {...})`
   * @param {(doc: MimeToDoc[MIME]) => void} listener 
   */
  ondocument (listener) {
    this.on('document', listener);
    return this
  }

  /**
   * An alias for `docStream.on('error', err => {...})`
   * or `docStream.parserStream.on('error', err => {...})` 
   * @param {(err: Error) => void} listener 
   */
  onerror (listener) {
    this.on('error', listener);
    return this
  }  
}

const {parse} = JSON;

const append = (parentNode, node, end) => {
  node.parentNode = parentNode;
  knownSiblings(end[PREV], node, end);
};

const createHTMLElement = (ownerDocument, localName) => {
  if (htmlClasses.has(localName)) {
    const Class = htmlClasses.get(localName);
    return new Class(ownerDocument, localName);
  }
  return new HTMLElement(ownerDocument, localName);
};

/**
 * @typedef {number|string} jsdonValue - either a node type or its content
 */

/**
 * Given a stringified, or arrayfied DOM element, returns an HTMLDocument
 * that represent the content of such string, or array.
 * @param {string|jsdonValue[]} value
 * @returns {HTMLDocument}
 */
const parseJSON = value => {
  const array = typeof value === 'string' ? parse(value) : value;
  const {length} = array;
  const document = new HTMLDocument;
  let parentNode = document, end = parentNode[END], svg = false, i = 0;
  while (i < length) {
    let nodeType = array[i++];
    switch (nodeType) {
      case ELEMENT_NODE: {
        const localName = array[i++];
        const isSVG = svg || localName === 'svg' || localName === 'SVG';
        const element = isSVG ?
                          new SVGElement$1(document, localName, parentNode.ownerSVGElement || null) :
                          createHTMLElement(document, localName);
        knownBoundaries(end[PREV], element, end);
        element.parentNode = parentNode;
        parentNode = element;
        end = parentNode[END];
        svg = isSVG;
        break;
      }
      case ATTRIBUTE_NODE: {
        const name = array[i++];
        const value = typeof array[i] === 'string' ? array[i++] : '';
        const attr = new Attr$1(document, name, value);
        attr.ownerElement = parentNode;
        knownSiblings(end[PREV], attr, end);
        break;
      }
      case TEXT_NODE:
        append(parentNode, new Text$1(document, array[i++]), end);
        break;
      case COMMENT_NODE:
        append(parentNode, new Comment$2(document, array[i++]), end);
        break;
      case DOCUMENT_TYPE_NODE: {
        const args = [document];
        while (typeof array[i] === 'string')
          args.push(array[i++]);
        if (args.length === 3 && /\.dtd$/i.test(args[2]))
          args.splice(2, 0, '');
        append(parentNode, new DocumentType$1(...args), end);
        break;
      }
      case DOCUMENT_FRAGMENT_NODE:
        parentNode = document.createDocumentFragment();
        end = parentNode[END];
      /* eslint no-fallthrough:0 */
      case DOCUMENT_NODE:
        break;
      default:
        do {
          nodeType -= NODE_END;
          if (svg && !parentNode.ownerSVGElement)
            svg = false;
          parentNode = parentNode.parentNode || parentNode;
        } while (nodeType < 0);
        end = parentNode[END];
        break;
    }
  }
  switch (i && array[0]) {
    case ELEMENT_NODE:
      return document.firstElementChild;
    case DOCUMENT_FRAGMENT_NODE:
      return parentNode;
  }
  return document;
};

/**
 * 
 * @param {Document|Element} node the Document or Element to serialize
 * @returns {jsdonValue[]} the linear jsdon serialized array
 */
const toJSON = node => node.toJSON();

class NodeFilter {
  static get SHOW_ALL() { return SHOW_ALL; }
  static get SHOW_ELEMENT() { return SHOW_ELEMENT; }
  static get SHOW_COMMENT() { return SHOW_COMMENT; }
  static get SHOW_TEXT() { return SHOW_TEXT; }
}

const parseHTML = (html, globals = null) => (new DOMParser).parseFromString(
  html, 'text/html', globals
).defaultView;

function Document() {
  illegalConstructor();
}

setPrototypeOf(Document, Document$1).prototype = Document$1.prototype;

export { Attr, CharacterData, Comment, GlobalCustomEvent as CustomEvent, DOMParser, DOMStream, Document, DocumentFragment, DocumentType, Element, GlobalEvent as Event, DOMEventTarget as EventTarget, Facades, HTMLAnchorElement, HTMLAreaElement, HTMLAudioElement, HTMLBRElement, HTMLBaseElement, HTMLBodyElement, HTMLButtonElement, HTMLCanvasElement, HTMLClasses, HTMLDListElement, HTMLDataElement, HTMLDataListElement, HTMLDetailsElement, HTMLDirectoryElement, HTMLDivElement, HTMLElement, HTMLEmbedElement, HTMLFieldSetElement, HTMLFontElement, HTMLFormElement, HTMLFrameElement, HTMLFrameSetElement, HTMLHRElement, HTMLHeadElement, HTMLHeadingElement, HTMLHtmlElement, HTMLIFrameElement, HTMLImageElement, HTMLInputElement, HTMLLIElement, HTMLLabelElement, HTMLLegendElement, HTMLLinkElement, HTMLMapElement, HTMLMarqueeElement, HTMLMediaElement, HTMLMenuElement, HTMLMetaElement, HTMLMeterElement, HTMLModElement, HTMLOListElement, HTMLObjectElement, HTMLOptGroupElement, HTMLOptionElement, HTMLOutputElement, HTMLParagraphElement, HTMLParamElement, HTMLPictureElement, HTMLPreElement, HTMLProgressElement, HTMLQuoteElement, HTMLScriptElement, HTMLSelectElement, HTMLSlotElement, HTMLSourceElement, HTMLSpanElement, HTMLStyleElement, HTMLTableCaptionElement, HTMLTableCellElement, HTMLTableElement, HTMLTableRowElement, HTMLTemplateElement, HTMLTextAreaElement, HTMLTimeElement, HTMLTitleElement, HTMLTrackElement, HTMLUListElement, HTMLUnknownElement, HTMLVideoElement, InputEvent, Node, NodeFilter, NodeList, SVGElement, ShadowRoot, Text, illegalConstructor, parseHTML, parseJSON, toJSON };
