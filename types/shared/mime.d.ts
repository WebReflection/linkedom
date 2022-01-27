export const Mime: {
    'text/html': {
        docType: string;
        ignoreCase: boolean;
        escapeHtmlEntities: boolean;
        voidElements: RegExp;
    };
    'image/svg+xml': {
        docType: string;
        ignoreCase: boolean;
        escapeHtmlEntities: boolean;
        voidElements: {
            test: () => boolean;
        };
    };
    'text/xml': {
        docType: string;
        ignoreCase: boolean;
        escapeHtmlEntities: boolean;
        voidElements: {
            test: () => boolean;
        };
    };
    'application/xml': {
        docType: string;
        ignoreCase: boolean;
        escapeHtmlEntities: boolean;
        voidElements: {
            test: () => boolean;
        };
    };
    'application/xhtml+xml': {
        docType: string;
        ignoreCase: boolean;
        escapeHtmlEntities: boolean;
        voidElements: {
            test: () => boolean;
        };
    };
    'text/jsx+xml': {
        docType: string;
        ignoreCase: boolean;
        escapeHtmlEntities: boolean;
        unquotedJsonAttributes: boolean;
        voidElements: {
            test: () => boolean;
        };
    };
};
