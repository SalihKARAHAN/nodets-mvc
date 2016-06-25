import IKeyValuePair = require('./IKeyValuePair');
import KeyIsNotExistException = require('../../Exceptions/KeyIsNotExistException');
import KeyIsAlreadyExistException = require('../../Exceptions/KeyIsAlreadyExistException');

class KeyValueCollection<TKey, TValue>{
    private _collection: { [Key: string]: IKeyValuePair<TKey, TValue> } = null;

    constructor() {
        this._collection = {}
    }

    /**
     * Add new value with new unique key!
     * @param {TKey}   key   [description]
     * @param {TValue} value [description]
     */
    Add(key: TKey, value: TValue): void {
        if (this.ContainsKey(key)) {
            throw new KeyIsAlreadyExistException('Key is already exist in collection!');
        }

        this._collection[key.toString()] = {
            Key: key
            , Value: value
        };
    }

    /**
     * [Get description]
     * @param  {TKey}   key [description]
     * @return {TValue}     [description]
     */
    Get(key: TKey): TValue {
        if (!this.ContainsKey(key)) {
            throw new KeyIsNotExistException('Key is not exist in collection!');
        }

        let value: IKeyValuePair<TKey, TValue> = null;
        value = this._collection[key.toString()];
        return value.Value;
    }

    /**
     * [ContainsKey description]
     * @param  {TKey}    key [description]
     * @return {boolean}     [description]
     */
    ContainsKey(key: TKey): boolean {
        let isContains: boolean = false;
        let value: IKeyValuePair<TKey, TValue> = null;
        value = this._collection[key.toString()];

        if (value && value.Value) {
            isContains = true;
        }

        return isContains;
    }
}

export = KeyValueCollection;
