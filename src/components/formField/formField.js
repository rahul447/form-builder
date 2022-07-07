import React from 'react';
import Input from "../formAtoms/input";
import TextArea from "../formAtoms/textarea";
import SelectBox from "../formAtoms/select";
import Radio from '../formAtoms/radio';
import { FIELD } from "../../utils/constant";


const Field = ({ onFieldUpdate, metadata, index, path }) => {

    switch (metadata.type) {
        case FIELD.INPUT:
            return <Input index={index} metadata={metadata} setField={onFieldUpdate} path={path} />
        case FIELD.TEXTAREA:
            return <TextArea index={index} metadata={metadata} setField={onFieldUpdate} path={path} />
        case FIELD.SSLECT:
            return <SelectBox index={index} metadata={metadata} setField={onFieldUpdate} path={path} />
        case FIELD.RADIO:
            return <Radio index={index} metadata={metadata} setField={onFieldUpdate} path={path} />
        default: return <></>
    }
}

export default Field;