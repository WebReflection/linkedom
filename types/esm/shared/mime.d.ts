export const Mime: {
    'text/html': {
        docType: string;
        ignoreCase: boolean;
        isXML: boolean;
        voidElements: RegExp;
    };
    'image/svg+xml': {
        docType: string;
        ignoreCase: boolean;
        isXML: boolean;
        voidElements: {
            test: () => boolean;
        };
    };
    'text/xml': {
        docType: string;
        ignoreCase: boolean;
        isXML: boolean;
        voidElements: {
            test: () => boolean;
        };
    };
    'application/xml': {
        docType: string;
        ignoreCase: boolean;
        isXML: boolean;
        voidElements: {
            test: () => boolean;
        };
    };
    'application/xhtml+xml': {
        docType: string;
        ignoreCase: boolean;
        isXML: boolean;
        voidElements: {
            test: () => boolean;
        };
    };
};
