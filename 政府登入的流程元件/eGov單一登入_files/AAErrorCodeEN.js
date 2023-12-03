function majorErrorReasonEN(rcode) {
    switch (rcode) {
        case 0x76000001:
            return "Encryption key is null.";
        case 0x76000002:
            return "Certificate information is null.";
        case 0x76000003:
            return "Unsigned data is null.";
        case 0x76000004:
            return "Cipher is null.";
        case 0x76000005:
            return "library path of program is null.";
        case 0x76000006:
            return "No IC card inserted.";
        case 0x76000007:
            return "Not logged in.";
        case 0x76000008:
            return "Type checking failed.";
        case 0x76000009:
            return "Incorrect file.";
        case 0x7600000A:
            return "File is too large to be loaded.";
        case 0x7600000B:
            return "Format error of JSON.";
        case 0x7600000C:
            return "Incorrect variable.";
        case 0x7600000D:
            return "Execution timeout.";
        case 0x7600000E:
            return "Non-supportive method.";
        case 0x7600000F:
            return "Forbidden domain name.";
        case 0x76000998:
            return "PIN code is null.";
        case 0x76000999:
            return "User has already cancelled action.";
        case 0x76100001:
            return "Fail to load library that is relevant to IC card.";
        case 0x76100002:
            return "Error happened at the end of closing IC card library.";
        case 0x76100003:
            return "No available card reader.";
        case 0x76100004:
            return "Fail to access data from card reader.";
        case 0x76100005:
            return "Fail to access session.";
        case 0x76100006:
            return "IC card login failed.";
        case 0x76100007:
            return "IC card logout failed.";
        case 0x76100008:
            return "Fail to access key from IC card.";
        case 0x76100009:
            return "Fail to access certificate from IC card.";
        case 0x7610000A:
            return "Fail to access relevant library";
        case 0x7610000B:
            return "Fail to access IC card information.";
        case 0x7610000C:
            return "Cannot find specified certificate.";
        case 0x7610000D:
            return "Cannot find specified key.";
        case 0x76200001:
            return "pfx initialization failed.";
        case 0x76200006:
            return "pfx login failed.";
        case 0x76200007:
            return "pfx logout failed.";
        case 0x76200008:
            return "Non-supportive certificate authority.";
        case 0x76300001:
            return "Certificate‑based signature initialization failed.";
        case 0x76300002:
            return "Type checking of certificate‑based signature failed.";
        case 0x76300003:
            return "Incorrect data of certificate‑based signature.";
        case 0x76300004:
            return "Execution error while signing signature.";
        case 0x76300005:
            return "Error happened while reading certificate.";
        case 0x76300006:
            return "Format DER error of certificate‑based signature.";
        case 0x76300007:
            return "Error happened at the end of signing signature.";
        case 0x76300008:
            return "Fail to validate certificate‑based signature.";
        case 0x76300009:
            return "BIO error of certificate‑based signature.";
        case 0x76400001:
            return "Error happened while decrypting DER.";
        case 0x76400002:
            return "Type checking error happened while decrypting.";
        case 0x76400003:
            return "Fail to decrypt.";
        case 0x76500001:
            return "Certificate is not yet effective.";
        case 0x76500002:
            return "Certificate is expired.";
        case 0x76600001:
            return "Error happened while encoding Base64.";
        case 0x76600002:
            return "Error happened while decoding Base64.";
        case 0x76700001:
            return "Fail to decrypt key of server-side.";
        case 0x76700002:
            return "Unrecorded key of server-side.";
        case 0x76700003:
            return "Error happened while encrypting key of server-side.";
        case 0x76210001:
            return "Mismatch of National Identity Card or Unified Number.";
        case 0x76210002:
            return "Type of certificate is non-supportive.";
        case 0x76210003:
            return "非元大寶來憑證";
        case 0x76210004:
            return "Certificate doesn't be issued by Public Certification Authority of Chunghwa Telecom.";
        case 0x77100001:
            return "Mismatch of captcha.";
        case 0x77200001:
            return "Null input of 'SNO' code that is authorized by secondary card.";
        case 0x77200002:
            return "Card-reading error: insufficient buffer.";
        case 0x77200003:
            return "Card-reading error: insufficient storage of card.";
        case 0x77200004:
            return "Card-reading error: oversize data.";
        case 0x77200005:
            return "Card-reading error: fail to load dll. (E_NOT_LOAD_DLL)";
        case 0x77200006:
            return "Card-reading error: library is non-supportive. (E_NOT_SUPPORT_FUNCTION)";
        case 0x77200007:
            return "Card-reading error: wrong slot. (E_SLOT)";
        case 0x77200008:
            return "Card-reading error: wrong index format.";
        case 0x77200009:
            return "Card-reading error: null selection of card reader. (READER_NOT_SELECT_ERROR)";
        case 0x77200010:
            return "Card-reading error: wrong 'SNO' code.";
        case 0x77200011:
            return "Card-reading error: 'SNO' code is non-existent. (SNO_NO_EXIST)";
        case -536870893: //0xE0000013
            return "Mismatch of key.";
        case -536870894: //0xE0000012
            return "User cancelled action.";
        case -536870896: //0xE0000010
            return "Fail to establish container for key. It may be due to the insufficient permission.";
        case -536870897: //0xE000000F
            return "Issuer of certificate cannot be confirmed, but it's found within categories offered by Public Certification Authority of ";
        case -536870898: //0xE000000E
            return "Fail to access 'p7b' object.";
        case -536870899: //0xE000000D
            return "Wrong HEX format.";
        case -536870900: //0xE000000C
            return "Wrong length of HEX code.";
        case -536870901: //0xE000000B
            return "Fail to transform multi-byte character from unicode character.";
        case -536870902: //0xE000000A
            return "Fail to read CertStore.";
        case -536870903: //0xE0000009
            return "Fail to outport file.";
        case -536870904: //0xE0000008
            return "Fail to import file.";
        case -536870905: //0xE0000007
            return "File path cannot be null.";
        case -536870906: //0xE0000006
            return "Issuers of certificate cannot be confirmed.";
        case -536870907: //0xE0000005
            return "Issuer isn't Public Certification Authority of Chunghwa Telecom, it may be issued by other certification authority.";
        case -536870908: //0xE0000004
            return "Non-supportive organization code.";
        case -536870909: //0xE0000003
            return "Mismatch of hash value.";
        case -536870910: //0xE0000002
            return "Fail to allocate memory.";
        case -536870911: //0xE0000001
            return "No certificate meets the search criteria and being issued by Public Certification Authority of Chunghwa Telecom.";
        default:
            return rcode.toString(16);
    }
}
function minorErrorReasonEN(rcode) {
    switch (rcode) {
        case 0x06:
            return "Fail to load library.";
        case 0xA0:
            return "Wrong PIN code.";
        case 0xA2:
            return "Wrong length of PIN code.";
        case 0xA4:
            return "Certificate is locked.";
        case 0x150:
            return "Insufficient memory buffer.";
        case -2147483647:
            return "Wrong PIN code. One chance is left.";
        case -2147483646:
            return "Wrong PIN code. Two chances are left.";
        default:
            return rcode.toString(16);
    }
}
//# sourceMappingURL=AAErrorCodeEN.js.map