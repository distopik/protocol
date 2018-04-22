/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.OutputCoding = (function() {

    /**
     * Properties of an OutputCoding.
     * @exports IOutputCoding
     * @interface IOutputCoding
     * @property {string|null} [container] The mux container used. For example "wav", "mp4" or "ogg" or "webm" or "raw"
     * @property {string|null} [codec] The codec used. For example "pcm_s24le" or "flac" or "opus"
     * @property {number|null} [targetSampleRate] The target sample rate that the engine should write to the result.
     * Sample rate conversion will occur if the engine is running a different
     * sample than this setting. For example 44100 vs. 192000
     * @property {number|null} [targetBitRate] target bitrate when this is important
     * @property {number|null} [packetsPerFragment] how many packets per fragment (0 means do not fragmentize)
     * @property {number|null} [samplesPerPacket] how many samples per packet (0 means deduce automatically for codec)
     * @property {string|null} [sampleFormat] sample format (absent means use default)
     * @property {number|null} [numChannels] number of output channels (0 means use default as deduced by the graph)
     */

    /**
     * Constructs a new OutputCoding.
     * @exports OutputCoding
     * @classdesc Sent to the engine by the controller. The output coding of the resulting
     * stream is set as specified here.
     * @implements IOutputCoding
     * @constructor
     * @param {IOutputCoding=} [properties] Properties to set
     */
    function OutputCoding(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * The mux container used. For example "wav", "mp4" or "ogg" or "webm" or "raw"
     * @member {string} container
     * @memberof OutputCoding
     * @instance
     */
    OutputCoding.prototype.container = "";

    /**
     * The codec used. For example "pcm_s24le" or "flac" or "opus"
     * @member {string} codec
     * @memberof OutputCoding
     * @instance
     */
    OutputCoding.prototype.codec = "";

    /**
     * The target sample rate that the engine should write to the result.
     * Sample rate conversion will occur if the engine is running a different
     * sample than this setting. For example 44100 vs. 192000
     * @member {number} targetSampleRate
     * @memberof OutputCoding
     * @instance
     */
    OutputCoding.prototype.targetSampleRate = 0;

    /**
     * target bitrate when this is important
     * @member {number} targetBitRate
     * @memberof OutputCoding
     * @instance
     */
    OutputCoding.prototype.targetBitRate = 0;

    /**
     * how many packets per fragment (0 means do not fragmentize)
     * @member {number} packetsPerFragment
     * @memberof OutputCoding
     * @instance
     */
    OutputCoding.prototype.packetsPerFragment = 0;

    /**
     * how many samples per packet (0 means deduce automatically for codec)
     * @member {number} samplesPerPacket
     * @memberof OutputCoding
     * @instance
     */
    OutputCoding.prototype.samplesPerPacket = 0;

    /**
     * sample format (absent means use default)
     * @member {string} sampleFormat
     * @memberof OutputCoding
     * @instance
     */
    OutputCoding.prototype.sampleFormat = "";

    /**
     * number of output channels (0 means use default as deduced by the graph)
     * @member {number} numChannels
     * @memberof OutputCoding
     * @instance
     */
    OutputCoding.prototype.numChannels = 0;

    /**
     * Creates a new OutputCoding instance using the specified properties.
     * @function create
     * @memberof OutputCoding
     * @static
     * @param {IOutputCoding=} [properties] Properties to set
     * @returns {OutputCoding} OutputCoding instance
     */
    OutputCoding.create = function create(properties) {
        return new OutputCoding(properties);
    };

    /**
     * Encodes the specified OutputCoding message. Does not implicitly {@link OutputCoding.verify|verify} messages.
     * @function encode
     * @memberof OutputCoding
     * @static
     * @param {IOutputCoding} message OutputCoding message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OutputCoding.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.container != null && message.hasOwnProperty("container"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.container);
        if (message.codec != null && message.hasOwnProperty("codec"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.codec);
        if (message.targetSampleRate != null && message.hasOwnProperty("targetSampleRate"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.targetSampleRate);
        if (message.targetBitRate != null && message.hasOwnProperty("targetBitRate"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.targetBitRate);
        if (message.packetsPerFragment != null && message.hasOwnProperty("packetsPerFragment"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.packetsPerFragment);
        if (message.samplesPerPacket != null && message.hasOwnProperty("samplesPerPacket"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.samplesPerPacket);
        if (message.sampleFormat != null && message.hasOwnProperty("sampleFormat"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.sampleFormat);
        if (message.numChannels != null && message.hasOwnProperty("numChannels"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.numChannels);
        return writer;
    };

    /**
     * Encodes the specified OutputCoding message, length delimited. Does not implicitly {@link OutputCoding.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OutputCoding
     * @static
     * @param {IOutputCoding} message OutputCoding message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OutputCoding.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OutputCoding message from the specified reader or buffer.
     * @function decode
     * @memberof OutputCoding
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OutputCoding} OutputCoding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OutputCoding.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OutputCoding();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.container = reader.string();
                break;
            case 2:
                message.codec = reader.string();
                break;
            case 3:
                message.targetSampleRate = reader.uint32();
                break;
            case 4:
                message.targetBitRate = reader.uint32();
                break;
            case 5:
                message.packetsPerFragment = reader.uint32();
                break;
            case 6:
                message.samplesPerPacket = reader.uint32();
                break;
            case 7:
                message.sampleFormat = reader.string();
                break;
            case 8:
                message.numChannels = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an OutputCoding message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OutputCoding
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OutputCoding} OutputCoding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OutputCoding.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OutputCoding message.
     * @function verify
     * @memberof OutputCoding
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OutputCoding.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.container != null && message.hasOwnProperty("container"))
            if (!$util.isString(message.container))
                return "container: string expected";
        if (message.codec != null && message.hasOwnProperty("codec"))
            if (!$util.isString(message.codec))
                return "codec: string expected";
        if (message.targetSampleRate != null && message.hasOwnProperty("targetSampleRate"))
            if (!$util.isInteger(message.targetSampleRate))
                return "targetSampleRate: integer expected";
        if (message.targetBitRate != null && message.hasOwnProperty("targetBitRate"))
            if (!$util.isInteger(message.targetBitRate))
                return "targetBitRate: integer expected";
        if (message.packetsPerFragment != null && message.hasOwnProperty("packetsPerFragment"))
            if (!$util.isInteger(message.packetsPerFragment))
                return "packetsPerFragment: integer expected";
        if (message.samplesPerPacket != null && message.hasOwnProperty("samplesPerPacket"))
            if (!$util.isInteger(message.samplesPerPacket))
                return "samplesPerPacket: integer expected";
        if (message.sampleFormat != null && message.hasOwnProperty("sampleFormat"))
            if (!$util.isString(message.sampleFormat))
                return "sampleFormat: string expected";
        if (message.numChannels != null && message.hasOwnProperty("numChannels"))
            if (!$util.isInteger(message.numChannels))
                return "numChannels: integer expected";
        return null;
    };

    /**
     * Creates an OutputCoding message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OutputCoding
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OutputCoding} OutputCoding
     */
    OutputCoding.fromObject = function fromObject(object) {
        if (object instanceof $root.OutputCoding)
            return object;
        var message = new $root.OutputCoding();
        if (object.container != null)
            message.container = String(object.container);
        if (object.codec != null)
            message.codec = String(object.codec);
        if (object.targetSampleRate != null)
            message.targetSampleRate = object.targetSampleRate >>> 0;
        if (object.targetBitRate != null)
            message.targetBitRate = object.targetBitRate >>> 0;
        if (object.packetsPerFragment != null)
            message.packetsPerFragment = object.packetsPerFragment >>> 0;
        if (object.samplesPerPacket != null)
            message.samplesPerPacket = object.samplesPerPacket >>> 0;
        if (object.sampleFormat != null)
            message.sampleFormat = String(object.sampleFormat);
        if (object.numChannels != null)
            message.numChannels = object.numChannels >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an OutputCoding message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OutputCoding
     * @static
     * @param {OutputCoding} message OutputCoding
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OutputCoding.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.container = "";
            object.codec = "";
            object.targetSampleRate = 0;
            object.targetBitRate = 0;
            object.packetsPerFragment = 0;
            object.samplesPerPacket = 0;
            object.sampleFormat = "";
            object.numChannels = 0;
        }
        if (message.container != null && message.hasOwnProperty("container"))
            object.container = message.container;
        if (message.codec != null && message.hasOwnProperty("codec"))
            object.codec = message.codec;
        if (message.targetSampleRate != null && message.hasOwnProperty("targetSampleRate"))
            object.targetSampleRate = message.targetSampleRate;
        if (message.targetBitRate != null && message.hasOwnProperty("targetBitRate"))
            object.targetBitRate = message.targetBitRate;
        if (message.packetsPerFragment != null && message.hasOwnProperty("packetsPerFragment"))
            object.packetsPerFragment = message.packetsPerFragment;
        if (message.samplesPerPacket != null && message.hasOwnProperty("samplesPerPacket"))
            object.samplesPerPacket = message.samplesPerPacket;
        if (message.sampleFormat != null && message.hasOwnProperty("sampleFormat"))
            object.sampleFormat = message.sampleFormat;
        if (message.numChannels != null && message.hasOwnProperty("numChannels"))
            object.numChannels = message.numChannels;
        return object;
    };

    /**
     * Converts this OutputCoding to JSON.
     * @function toJSON
     * @memberof OutputCoding
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OutputCoding.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OutputCoding;
})();

$root.InsertSpec = (function() {

    /**
     * Properties of an InsertSpec.
     * @exports IInsertSpec
     * @interface IInsertSpec
     * @property {string|null} [endpoint] name of the device which we will be using to perform our insert
     * @property {Array.<number>|null} [inputChannels] array of input channel indices to be used as the insert
     * @property {Array.<number>|null} [outputChannels] array of output channel indices to be used as the insert
     * @property {number|null} [additionalLatency] Additional latency exhibited by the file. For example, by a tape machine.
     * Expressed in **ENGINE SAMPLE RATE SAMPLES**
     * @property {boolean|null} [enableDryWet] When true, support dry/wet mixing
     * @property {boolean|null} [enableFFT] When true, enable FFT analysis
     * @property {number|null} [sampleRate] Sample rate of the device stream
     * @property {number|null} [bufferSize] Buffer size of the device stream
     */

    /**
     * Constructs a new InsertSpec.
     * @exports InsertSpec
     * @classdesc Specification of an insert point processor.
     * @implements IInsertSpec
     * @constructor
     * @param {IInsertSpec=} [properties] Properties to set
     */
    function InsertSpec(properties) {
        this.inputChannels = [];
        this.outputChannels = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * name of the device which we will be using to perform our insert
     * @member {string} endpoint
     * @memberof InsertSpec
     * @instance
     */
    InsertSpec.prototype.endpoint = "";

    /**
     * array of input channel indices to be used as the insert
     * @member {Array.<number>} inputChannels
     * @memberof InsertSpec
     * @instance
     */
    InsertSpec.prototype.inputChannels = $util.emptyArray;

    /**
     * array of output channel indices to be used as the insert
     * @member {Array.<number>} outputChannels
     * @memberof InsertSpec
     * @instance
     */
    InsertSpec.prototype.outputChannels = $util.emptyArray;

    /**
     * Additional latency exhibited by the file. For example, by a tape machine.
     * Expressed in **ENGINE SAMPLE RATE SAMPLES**
     * @member {number} additionalLatency
     * @memberof InsertSpec
     * @instance
     */
    InsertSpec.prototype.additionalLatency = 0;

    /**
     * When true, support dry/wet mixing
     * @member {boolean} enableDryWet
     * @memberof InsertSpec
     * @instance
     */
    InsertSpec.prototype.enableDryWet = false;

    /**
     * When true, enable FFT analysis
     * @member {boolean} enableFFT
     * @memberof InsertSpec
     * @instance
     */
    InsertSpec.prototype.enableFFT = false;

    /**
     * Sample rate of the device stream
     * @member {number} sampleRate
     * @memberof InsertSpec
     * @instance
     */
    InsertSpec.prototype.sampleRate = 0;

    /**
     * Buffer size of the device stream
     * @member {number} bufferSize
     * @memberof InsertSpec
     * @instance
     */
    InsertSpec.prototype.bufferSize = 0;

    /**
     * Creates a new InsertSpec instance using the specified properties.
     * @function create
     * @memberof InsertSpec
     * @static
     * @param {IInsertSpec=} [properties] Properties to set
     * @returns {InsertSpec} InsertSpec instance
     */
    InsertSpec.create = function create(properties) {
        return new InsertSpec(properties);
    };

    /**
     * Encodes the specified InsertSpec message. Does not implicitly {@link InsertSpec.verify|verify} messages.
     * @function encode
     * @memberof InsertSpec
     * @static
     * @param {IInsertSpec} message InsertSpec message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InsertSpec.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.endpoint != null && message.hasOwnProperty("endpoint"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoint);
        if (message.inputChannels != null && message.inputChannels.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.inputChannels.length; ++i)
                writer.uint32(message.inputChannels[i]);
            writer.ldelim();
        }
        if (message.outputChannels != null && message.outputChannels.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.outputChannels.length; ++i)
                writer.uint32(message.outputChannels[i]);
            writer.ldelim();
        }
        if (message.additionalLatency != null && message.hasOwnProperty("additionalLatency"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.additionalLatency);
        if (message.enableDryWet != null && message.hasOwnProperty("enableDryWet"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.enableDryWet);
        if (message.enableFFT != null && message.hasOwnProperty("enableFFT"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.enableFFT);
        if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.sampleRate);
        if (message.bufferSize != null && message.hasOwnProperty("bufferSize"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.bufferSize);
        return writer;
    };

    /**
     * Encodes the specified InsertSpec message, length delimited. Does not implicitly {@link InsertSpec.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InsertSpec
     * @static
     * @param {IInsertSpec} message InsertSpec message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InsertSpec.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InsertSpec message from the specified reader or buffer.
     * @function decode
     * @memberof InsertSpec
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InsertSpec} InsertSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InsertSpec.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InsertSpec();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.endpoint = reader.string();
                break;
            case 2:
                if (!(message.inputChannels && message.inputChannels.length))
                    message.inputChannels = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.inputChannels.push(reader.uint32());
                } else
                    message.inputChannels.push(reader.uint32());
                break;
            case 3:
                if (!(message.outputChannels && message.outputChannels.length))
                    message.outputChannels = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.outputChannels.push(reader.uint32());
                } else
                    message.outputChannels.push(reader.uint32());
                break;
            case 4:
                message.additionalLatency = reader.uint32();
                break;
            case 5:
                message.enableDryWet = reader.bool();
                break;
            case 6:
                message.enableFFT = reader.bool();
                break;
            case 7:
                message.sampleRate = reader.uint32();
                break;
            case 8:
                message.bufferSize = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an InsertSpec message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InsertSpec
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InsertSpec} InsertSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InsertSpec.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InsertSpec message.
     * @function verify
     * @memberof InsertSpec
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InsertSpec.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.endpoint != null && message.hasOwnProperty("endpoint"))
            if (!$util.isString(message.endpoint))
                return "endpoint: string expected";
        if (message.inputChannels != null && message.hasOwnProperty("inputChannels")) {
            if (!Array.isArray(message.inputChannels))
                return "inputChannels: array expected";
            for (var i = 0; i < message.inputChannels.length; ++i)
                if (!$util.isInteger(message.inputChannels[i]))
                    return "inputChannels: integer[] expected";
        }
        if (message.outputChannels != null && message.hasOwnProperty("outputChannels")) {
            if (!Array.isArray(message.outputChannels))
                return "outputChannels: array expected";
            for (var i = 0; i < message.outputChannels.length; ++i)
                if (!$util.isInteger(message.outputChannels[i]))
                    return "outputChannels: integer[] expected";
        }
        if (message.additionalLatency != null && message.hasOwnProperty("additionalLatency"))
            if (!$util.isInteger(message.additionalLatency))
                return "additionalLatency: integer expected";
        if (message.enableDryWet != null && message.hasOwnProperty("enableDryWet"))
            if (typeof message.enableDryWet !== "boolean")
                return "enableDryWet: boolean expected";
        if (message.enableFFT != null && message.hasOwnProperty("enableFFT"))
            if (typeof message.enableFFT !== "boolean")
                return "enableFFT: boolean expected";
        if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
            if (!$util.isInteger(message.sampleRate))
                return "sampleRate: integer expected";
        if (message.bufferSize != null && message.hasOwnProperty("bufferSize"))
            if (!$util.isInteger(message.bufferSize))
                return "bufferSize: integer expected";
        return null;
    };

    /**
     * Creates an InsertSpec message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InsertSpec
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InsertSpec} InsertSpec
     */
    InsertSpec.fromObject = function fromObject(object) {
        if (object instanceof $root.InsertSpec)
            return object;
        var message = new $root.InsertSpec();
        if (object.endpoint != null)
            message.endpoint = String(object.endpoint);
        if (object.inputChannels) {
            if (!Array.isArray(object.inputChannels))
                throw TypeError(".InsertSpec.inputChannels: array expected");
            message.inputChannels = [];
            for (var i = 0; i < object.inputChannels.length; ++i)
                message.inputChannels[i] = object.inputChannels[i] >>> 0;
        }
        if (object.outputChannels) {
            if (!Array.isArray(object.outputChannels))
                throw TypeError(".InsertSpec.outputChannels: array expected");
            message.outputChannels = [];
            for (var i = 0; i < object.outputChannels.length; ++i)
                message.outputChannels[i] = object.outputChannels[i] >>> 0;
        }
        if (object.additionalLatency != null)
            message.additionalLatency = object.additionalLatency >>> 0;
        if (object.enableDryWet != null)
            message.enableDryWet = Boolean(object.enableDryWet);
        if (object.enableFFT != null)
            message.enableFFT = Boolean(object.enableFFT);
        if (object.sampleRate != null)
            message.sampleRate = object.sampleRate >>> 0;
        if (object.bufferSize != null)
            message.bufferSize = object.bufferSize >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an InsertSpec message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InsertSpec
     * @static
     * @param {InsertSpec} message InsertSpec
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InsertSpec.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.inputChannels = [];
            object.outputChannels = [];
        }
        if (options.defaults) {
            object.endpoint = "";
            object.additionalLatency = 0;
            object.enableDryWet = false;
            object.enableFFT = false;
            object.sampleRate = 0;
            object.bufferSize = 0;
        }
        if (message.endpoint != null && message.hasOwnProperty("endpoint"))
            object.endpoint = message.endpoint;
        if (message.inputChannels && message.inputChannels.length) {
            object.inputChannels = [];
            for (var j = 0; j < message.inputChannels.length; ++j)
                object.inputChannels[j] = message.inputChannels[j];
        }
        if (message.outputChannels && message.outputChannels.length) {
            object.outputChannels = [];
            for (var j = 0; j < message.outputChannels.length; ++j)
                object.outputChannels[j] = message.outputChannels[j];
        }
        if (message.additionalLatency != null && message.hasOwnProperty("additionalLatency"))
            object.additionalLatency = message.additionalLatency;
        if (message.enableDryWet != null && message.hasOwnProperty("enableDryWet"))
            object.enableDryWet = message.enableDryWet;
        if (message.enableFFT != null && message.hasOwnProperty("enableFFT"))
            object.enableFFT = message.enableFFT;
        if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
            object.sampleRate = message.sampleRate;
        if (message.bufferSize != null && message.hasOwnProperty("bufferSize"))
            object.bufferSize = message.bufferSize;
        return object;
    };

    /**
     * Converts this InsertSpec to JSON.
     * @function toJSON
     * @memberof InsertSpec
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InsertSpec.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InsertSpec;
})();

$root.PluginSpec = (function() {

    /**
     * Properties of a PluginSpec.
     * @exports IPluginSpec
     * @interface IPluginSpec
     * @property {string|null} [plugin] The identifier of the plugin. For example
     * "AudioUnit:Effects/aufx,LdMx,Mndt"
     * @property {number|null} [additionalLatency] Additional latency exhibited by the plugin, if it is reported incorrectly.
     * May be negative. Expressed in **ENGINE SAMPLE RATE SAMPLES**
     */

    /**
     * Constructs a new PluginSpec.
     * @exports PluginSpec
     * @classdesc Specification of a plugin processor
     * @implements IPluginSpec
     * @constructor
     * @param {IPluginSpec=} [properties] Properties to set
     */
    function PluginSpec(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * The identifier of the plugin. For example
     * "AudioUnit:Effects/aufx,LdMx,Mndt"
     * @member {string} plugin
     * @memberof PluginSpec
     * @instance
     */
    PluginSpec.prototype.plugin = "";

    /**
     * Additional latency exhibited by the plugin, if it is reported incorrectly.
     * May be negative. Expressed in **ENGINE SAMPLE RATE SAMPLES**
     * @member {number} additionalLatency
     * @memberof PluginSpec
     * @instance
     */
    PluginSpec.prototype.additionalLatency = 0;

    /**
     * Creates a new PluginSpec instance using the specified properties.
     * @function create
     * @memberof PluginSpec
     * @static
     * @param {IPluginSpec=} [properties] Properties to set
     * @returns {PluginSpec} PluginSpec instance
     */
    PluginSpec.create = function create(properties) {
        return new PluginSpec(properties);
    };

    /**
     * Encodes the specified PluginSpec message. Does not implicitly {@link PluginSpec.verify|verify} messages.
     * @function encode
     * @memberof PluginSpec
     * @static
     * @param {IPluginSpec} message PluginSpec message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PluginSpec.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.plugin != null && message.hasOwnProperty("plugin"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.plugin);
        if (message.additionalLatency != null && message.hasOwnProperty("additionalLatency"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.additionalLatency);
        return writer;
    };

    /**
     * Encodes the specified PluginSpec message, length delimited. Does not implicitly {@link PluginSpec.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PluginSpec
     * @static
     * @param {IPluginSpec} message PluginSpec message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PluginSpec.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PluginSpec message from the specified reader or buffer.
     * @function decode
     * @memberof PluginSpec
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PluginSpec} PluginSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PluginSpec.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PluginSpec();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.plugin = reader.string();
                break;
            case 3:
                message.additionalLatency = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PluginSpec message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PluginSpec
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PluginSpec} PluginSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PluginSpec.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PluginSpec message.
     * @function verify
     * @memberof PluginSpec
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PluginSpec.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.plugin != null && message.hasOwnProperty("plugin"))
            if (!$util.isString(message.plugin))
                return "plugin: string expected";
        if (message.additionalLatency != null && message.hasOwnProperty("additionalLatency"))
            if (!$util.isInteger(message.additionalLatency))
                return "additionalLatency: integer expected";
        return null;
    };

    /**
     * Creates a PluginSpec message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PluginSpec
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PluginSpec} PluginSpec
     */
    PluginSpec.fromObject = function fromObject(object) {
        if (object instanceof $root.PluginSpec)
            return object;
        var message = new $root.PluginSpec();
        if (object.plugin != null)
            message.plugin = String(object.plugin);
        if (object.additionalLatency != null)
            message.additionalLatency = object.additionalLatency | 0;
        return message;
    };

    /**
     * Creates a plain object from a PluginSpec message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PluginSpec
     * @static
     * @param {PluginSpec} message PluginSpec
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PluginSpec.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.plugin = "";
            object.additionalLatency = 0;
        }
        if (message.plugin != null && message.hasOwnProperty("plugin"))
            object.plugin = message.plugin;
        if (message.additionalLatency != null && message.hasOwnProperty("additionalLatency"))
            object.additionalLatency = message.additionalLatency;
        return object;
    };

    /**
     * Converts this PluginSpec to JSON.
     * @function toJSON
     * @memberof PluginSpec
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PluginSpec.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PluginSpec;
})();

$root.ProcessorSpec = (function() {

    /**
     * Properties of a ProcessorSpec.
     * @exports IProcessorSpec
     * @interface IProcessorSpec
     * @property {IInsertSpec|null} [insert] ProcessorSpec insert
     * @property {IPluginSpec|null} [plugin] ProcessorSpec plugin
     */

    /**
     * Constructs a new ProcessorSpec.
     * @exports ProcessorSpec
     * @classdesc A specification of a processor - maybe insert, maybe plugin
     * @implements IProcessorSpec
     * @constructor
     * @param {IProcessorSpec=} [properties] Properties to set
     */
    function ProcessorSpec(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProcessorSpec insert.
     * @member {IInsertSpec|null|undefined} insert
     * @memberof ProcessorSpec
     * @instance
     */
    ProcessorSpec.prototype.insert = null;

    /**
     * ProcessorSpec plugin.
     * @member {IPluginSpec|null|undefined} plugin
     * @memberof ProcessorSpec
     * @instance
     */
    ProcessorSpec.prototype.plugin = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ProcessorSpec spec.
     * @member {"insert"|"plugin"|undefined} spec
     * @memberof ProcessorSpec
     * @instance
     */
    Object.defineProperty(ProcessorSpec.prototype, "spec", {
        get: $util.oneOfGetter($oneOfFields = ["insert", "plugin"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ProcessorSpec instance using the specified properties.
     * @function create
     * @memberof ProcessorSpec
     * @static
     * @param {IProcessorSpec=} [properties] Properties to set
     * @returns {ProcessorSpec} ProcessorSpec instance
     */
    ProcessorSpec.create = function create(properties) {
        return new ProcessorSpec(properties);
    };

    /**
     * Encodes the specified ProcessorSpec message. Does not implicitly {@link ProcessorSpec.verify|verify} messages.
     * @function encode
     * @memberof ProcessorSpec
     * @static
     * @param {IProcessorSpec} message ProcessorSpec message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProcessorSpec.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.insert != null && message.hasOwnProperty("insert"))
            $root.InsertSpec.encode(message.insert, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.plugin != null && message.hasOwnProperty("plugin"))
            $root.PluginSpec.encode(message.plugin, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ProcessorSpec message, length delimited. Does not implicitly {@link ProcessorSpec.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProcessorSpec
     * @static
     * @param {IProcessorSpec} message ProcessorSpec message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProcessorSpec.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProcessorSpec message from the specified reader or buffer.
     * @function decode
     * @memberof ProcessorSpec
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProcessorSpec} ProcessorSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProcessorSpec.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProcessorSpec();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.insert = $root.InsertSpec.decode(reader, reader.uint32());
                break;
            case 2:
                message.plugin = $root.PluginSpec.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ProcessorSpec message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProcessorSpec
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProcessorSpec} ProcessorSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProcessorSpec.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProcessorSpec message.
     * @function verify
     * @memberof ProcessorSpec
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProcessorSpec.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.insert != null && message.hasOwnProperty("insert")) {
            properties.spec = 1;
            {
                var error = $root.InsertSpec.verify(message.insert);
                if (error)
                    return "insert." + error;
            }
        }
        if (message.plugin != null && message.hasOwnProperty("plugin")) {
            if (properties.spec === 1)
                return "spec: multiple values";
            properties.spec = 1;
            {
                var error = $root.PluginSpec.verify(message.plugin);
                if (error)
                    return "plugin." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ProcessorSpec message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProcessorSpec
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProcessorSpec} ProcessorSpec
     */
    ProcessorSpec.fromObject = function fromObject(object) {
        if (object instanceof $root.ProcessorSpec)
            return object;
        var message = new $root.ProcessorSpec();
        if (object.insert != null) {
            if (typeof object.insert !== "object")
                throw TypeError(".ProcessorSpec.insert: object expected");
            message.insert = $root.InsertSpec.fromObject(object.insert);
        }
        if (object.plugin != null) {
            if (typeof object.plugin !== "object")
                throw TypeError(".ProcessorSpec.plugin: object expected");
            message.plugin = $root.PluginSpec.fromObject(object.plugin);
        }
        return message;
    };

    /**
     * Creates a plain object from a ProcessorSpec message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProcessorSpec
     * @static
     * @param {ProcessorSpec} message ProcessorSpec
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProcessorSpec.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.insert != null && message.hasOwnProperty("insert")) {
            object.insert = $root.InsertSpec.toObject(message.insert, options);
            if (options.oneofs)
                object.spec = "insert";
        }
        if (message.plugin != null && message.hasOwnProperty("plugin")) {
            object.plugin = $root.PluginSpec.toObject(message.plugin, options);
            if (options.oneofs)
                object.spec = "plugin";
        }
        return object;
    };

    /**
     * Converts this ProcessorSpec to JSON.
     * @function toJSON
     * @memberof ProcessorSpec
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProcessorSpec.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ProcessorSpec;
})();

$root.Input = (function() {

    /**
     * Properties of an Input.
     * @exports IInput
     * @interface IInput
     * @property {string|null} [localPath] Path to the file on the local filesystem of the engine.
     * @property {number|null} [startPos] Where to start playing?
     * @property {number|null} [endPos] Where to end playing?
     */

    /**
     * Constructs a new Input.
     * @exports Input
     * @classdesc Sent by the controller to the engine. Sets the path to the file on the
     * local filesystem of the engine.
     * @implements IInput
     * @constructor
     * @param {IInput=} [properties] Properties to set
     */
    function Input(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Path to the file on the local filesystem of the engine.
     * @member {string} localPath
     * @memberof Input
     * @instance
     */
    Input.prototype.localPath = "";

    /**
     * Where to start playing?
     * @member {number} startPos
     * @memberof Input
     * @instance
     */
    Input.prototype.startPos = 0;

    /**
     * Where to end playing?
     * @member {number} endPos
     * @memberof Input
     * @instance
     */
    Input.prototype.endPos = 0;

    /**
     * Creates a new Input instance using the specified properties.
     * @function create
     * @memberof Input
     * @static
     * @param {IInput=} [properties] Properties to set
     * @returns {Input} Input instance
     */
    Input.create = function create(properties) {
        return new Input(properties);
    };

    /**
     * Encodes the specified Input message. Does not implicitly {@link Input.verify|verify} messages.
     * @function encode
     * @memberof Input
     * @static
     * @param {IInput} message Input message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Input.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.localPath != null && message.hasOwnProperty("localPath"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.localPath);
        if (message.startPos != null && message.hasOwnProperty("startPos"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.startPos);
        if (message.endPos != null && message.hasOwnProperty("endPos"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.endPos);
        return writer;
    };

    /**
     * Encodes the specified Input message, length delimited. Does not implicitly {@link Input.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Input
     * @static
     * @param {IInput} message Input message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Input.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Input message from the specified reader or buffer.
     * @function decode
     * @memberof Input
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Input} Input
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Input.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Input();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.localPath = reader.string();
                break;
            case 2:
                message.startPos = reader.double();
                break;
            case 3:
                message.endPos = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Input message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Input
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Input} Input
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Input.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Input message.
     * @function verify
     * @memberof Input
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Input.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.localPath != null && message.hasOwnProperty("localPath"))
            if (!$util.isString(message.localPath))
                return "localPath: string expected";
        if (message.startPos != null && message.hasOwnProperty("startPos"))
            if (typeof message.startPos !== "number")
                return "startPos: number expected";
        if (message.endPos != null && message.hasOwnProperty("endPos"))
            if (typeof message.endPos !== "number")
                return "endPos: number expected";
        return null;
    };

    /**
     * Creates an Input message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Input
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Input} Input
     */
    Input.fromObject = function fromObject(object) {
        if (object instanceof $root.Input)
            return object;
        var message = new $root.Input();
        if (object.localPath != null)
            message.localPath = String(object.localPath);
        if (object.startPos != null)
            message.startPos = Number(object.startPos);
        if (object.endPos != null)
            message.endPos = Number(object.endPos);
        return message;
    };

    /**
     * Creates a plain object from an Input message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Input
     * @static
     * @param {Input} message Input
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Input.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.localPath = "";
            object.startPos = 0;
            object.endPos = 0;
        }
        if (message.localPath != null && message.hasOwnProperty("localPath"))
            object.localPath = message.localPath;
        if (message.startPos != null && message.hasOwnProperty("startPos"))
            object.startPos = options.json && !isFinite(message.startPos) ? String(message.startPos) : message.startPos;
        if (message.endPos != null && message.hasOwnProperty("endPos"))
            object.endPos = options.json && !isFinite(message.endPos) ? String(message.endPos) : message.endPos;
        return object;
    };

    /**
     * Converts this Input to JSON.
     * @function toJSON
     * @memberof Input
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Input.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Input;
})();

$root.Measurement = (function() {

    /**
     * Properties of a Measurement.
     * @exports IMeasurement
     * @interface IMeasurement
     * @property {number|null} [sourceTime] When in time relative to the source has this happened?
     * @property {string|null} [name] name of the measurement
     * @property {number|null} [measurement] The actual measurement
     */

    /**
     * Constructs a new Measurement.
     * @exports Measurement
     * @classdesc Measurement taken by the engine, like RMS or Peak level, Gain Reduction,
     * overdrive, ...
     * @implements IMeasurement
     * @constructor
     * @param {IMeasurement=} [properties] Properties to set
     */
    function Measurement(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * When in time relative to the source has this happened?
     * @member {number} sourceTime
     * @memberof Measurement
     * @instance
     */
    Measurement.prototype.sourceTime = 0;

    /**
     * name of the measurement
     * @member {string} name
     * @memberof Measurement
     * @instance
     */
    Measurement.prototype.name = "";

    /**
     * The actual measurement
     * @member {number} measurement
     * @memberof Measurement
     * @instance
     */
    Measurement.prototype.measurement = 0;

    /**
     * Creates a new Measurement instance using the specified properties.
     * @function create
     * @memberof Measurement
     * @static
     * @param {IMeasurement=} [properties] Properties to set
     * @returns {Measurement} Measurement instance
     */
    Measurement.create = function create(properties) {
        return new Measurement(properties);
    };

    /**
     * Encodes the specified Measurement message. Does not implicitly {@link Measurement.verify|verify} messages.
     * @function encode
     * @memberof Measurement
     * @static
     * @param {IMeasurement} message Measurement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Measurement.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sourceTime != null && message.hasOwnProperty("sourceTime"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.sourceTime);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.measurement != null && message.hasOwnProperty("measurement"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.measurement);
        return writer;
    };

    /**
     * Encodes the specified Measurement message, length delimited. Does not implicitly {@link Measurement.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Measurement
     * @static
     * @param {IMeasurement} message Measurement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Measurement.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Measurement message from the specified reader or buffer.
     * @function decode
     * @memberof Measurement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Measurement} Measurement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Measurement.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Measurement();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sourceTime = reader.double();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.measurement = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Measurement message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Measurement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Measurement} Measurement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Measurement.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Measurement message.
     * @function verify
     * @memberof Measurement
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Measurement.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sourceTime != null && message.hasOwnProperty("sourceTime"))
            if (typeof message.sourceTime !== "number")
                return "sourceTime: number expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.measurement != null && message.hasOwnProperty("measurement"))
            if (typeof message.measurement !== "number")
                return "measurement: number expected";
        return null;
    };

    /**
     * Creates a Measurement message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Measurement
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Measurement} Measurement
     */
    Measurement.fromObject = function fromObject(object) {
        if (object instanceof $root.Measurement)
            return object;
        var message = new $root.Measurement();
        if (object.sourceTime != null)
            message.sourceTime = Number(object.sourceTime);
        if (object.name != null)
            message.name = String(object.name);
        if (object.measurement != null)
            message.measurement = Number(object.measurement);
        return message;
    };

    /**
     * Creates a plain object from a Measurement message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Measurement
     * @static
     * @param {Measurement} message Measurement
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Measurement.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.sourceTime = 0;
            object.name = "";
            object.measurement = 0;
        }
        if (message.sourceTime != null && message.hasOwnProperty("sourceTime"))
            object.sourceTime = options.json && !isFinite(message.sourceTime) ? String(message.sourceTime) : message.sourceTime;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.measurement != null && message.hasOwnProperty("measurement"))
            object.measurement = options.json && !isFinite(message.measurement) ? String(message.measurement) : message.measurement;
        return object;
    };

    /**
     * Converts this Measurement to JSON.
     * @function toJSON
     * @memberof Measurement
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Measurement.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Measurement;
})();

$root.Ready = (function() {

    /**
     * Properties of a Ready.
     * @exports IReady
     * @interface IReady
     */

    /**
     * Constructs a new Ready.
     * @exports Ready
     * @classdesc Sent by the engine when it is ready.
     * @implements IReady
     * @constructor
     * @param {IReady=} [properties] Properties to set
     */
    function Ready(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Ready instance using the specified properties.
     * @function create
     * @memberof Ready
     * @static
     * @param {IReady=} [properties] Properties to set
     * @returns {Ready} Ready instance
     */
    Ready.create = function create(properties) {
        return new Ready(properties);
    };

    /**
     * Encodes the specified Ready message. Does not implicitly {@link Ready.verify|verify} messages.
     * @function encode
     * @memberof Ready
     * @static
     * @param {IReady} message Ready message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ready.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Ready message, length delimited. Does not implicitly {@link Ready.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Ready
     * @static
     * @param {IReady} message Ready message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ready.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Ready message from the specified reader or buffer.
     * @function decode
     * @memberof Ready
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Ready} Ready
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ready.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ready();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Ready message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Ready
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Ready} Ready
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ready.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Ready message.
     * @function verify
     * @memberof Ready
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Ready.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Ready message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Ready
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Ready} Ready
     */
    Ready.fromObject = function fromObject(object) {
        if (object instanceof $root.Ready)
            return object;
        return new $root.Ready();
    };

    /**
     * Creates a plain object from a Ready message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Ready
     * @static
     * @param {Ready} message Ready
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Ready.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Ready to JSON.
     * @function toJSON
     * @memberof Ready
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Ready.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Ready;
})();

$root.AudioReady = (function() {

    /**
     * Properties of an AudioReady.
     * @exports IAudioReady
     * @interface IAudioReady
     * @property {Uint8Array|null} [buffer] Output data, in the muxer, codec, sample rate specified.
     * @property {Array.<IMeasurement>|null} [measurements] Measurements, keyed by a compound name. Usually, these will be keyed by
     * processor name and measurement name, seperated by a dot. For example
     * insert3.in_rms, limiter.gr, ...
     * @property {number|null} [sequence] The sequence number of this buffer, from the start of the last change of
     * output configuration SetOutputCoding.
     * @property {number|Long|null} [sampleTime] Position in the media space
     * @property {boolean|null} [haveMore] true when there are more buffers to follow, false otherwise
     */

    /**
     * Constructs a new AudioReady.
     * @exports AudioReady
     * @classdesc Sent by the engine to the controller to offer a resulting buffer.
     * @implements IAudioReady
     * @constructor
     * @param {IAudioReady=} [properties] Properties to set
     */
    function AudioReady(properties) {
        this.measurements = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Output data, in the muxer, codec, sample rate specified.
     * @member {Uint8Array} buffer
     * @memberof AudioReady
     * @instance
     */
    AudioReady.prototype.buffer = $util.newBuffer([]);

    /**
     * Measurements, keyed by a compound name. Usually, these will be keyed by
     * processor name and measurement name, seperated by a dot. For example
     * insert3.in_rms, limiter.gr, ...
     * @member {Array.<IMeasurement>} measurements
     * @memberof AudioReady
     * @instance
     */
    AudioReady.prototype.measurements = $util.emptyArray;

    /**
     * The sequence number of this buffer, from the start of the last change of
     * output configuration SetOutputCoding.
     * @member {number} sequence
     * @memberof AudioReady
     * @instance
     */
    AudioReady.prototype.sequence = 0;

    /**
     * Position in the media space
     * @member {number|Long} sampleTime
     * @memberof AudioReady
     * @instance
     */
    AudioReady.prototype.sampleTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * true when there are more buffers to follow, false otherwise
     * @member {boolean} haveMore
     * @memberof AudioReady
     * @instance
     */
    AudioReady.prototype.haveMore = false;

    /**
     * Creates a new AudioReady instance using the specified properties.
     * @function create
     * @memberof AudioReady
     * @static
     * @param {IAudioReady=} [properties] Properties to set
     * @returns {AudioReady} AudioReady instance
     */
    AudioReady.create = function create(properties) {
        return new AudioReady(properties);
    };

    /**
     * Encodes the specified AudioReady message. Does not implicitly {@link AudioReady.verify|verify} messages.
     * @function encode
     * @memberof AudioReady
     * @static
     * @param {IAudioReady} message AudioReady message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AudioReady.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.buffer != null && message.hasOwnProperty("buffer"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.buffer);
        if (message.measurements != null && message.measurements.length)
            for (var i = 0; i < message.measurements.length; ++i)
                $root.Measurement.encode(message.measurements[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.sequence != null && message.hasOwnProperty("sequence"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sequence);
        if (message.sampleTime != null && message.hasOwnProperty("sampleTime"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.sampleTime);
        if (message.haveMore != null && message.hasOwnProperty("haveMore"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.haveMore);
        return writer;
    };

    /**
     * Encodes the specified AudioReady message, length delimited. Does not implicitly {@link AudioReady.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AudioReady
     * @static
     * @param {IAudioReady} message AudioReady message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AudioReady.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AudioReady message from the specified reader or buffer.
     * @function decode
     * @memberof AudioReady
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AudioReady} AudioReady
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AudioReady.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AudioReady();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.buffer = reader.bytes();
                break;
            case 2:
                if (!(message.measurements && message.measurements.length))
                    message.measurements = [];
                message.measurements.push($root.Measurement.decode(reader, reader.uint32()));
                break;
            case 3:
                message.sequence = reader.int32();
                break;
            case 4:
                message.sampleTime = reader.uint64();
                break;
            case 5:
                message.haveMore = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AudioReady message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AudioReady
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AudioReady} AudioReady
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AudioReady.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AudioReady message.
     * @function verify
     * @memberof AudioReady
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AudioReady.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.buffer != null && message.hasOwnProperty("buffer"))
            if (!(message.buffer && typeof message.buffer.length === "number" || $util.isString(message.buffer)))
                return "buffer: buffer expected";
        if (message.measurements != null && message.hasOwnProperty("measurements")) {
            if (!Array.isArray(message.measurements))
                return "measurements: array expected";
            for (var i = 0; i < message.measurements.length; ++i) {
                var error = $root.Measurement.verify(message.measurements[i]);
                if (error)
                    return "measurements." + error;
            }
        }
        if (message.sequence != null && message.hasOwnProperty("sequence"))
            if (!$util.isInteger(message.sequence))
                return "sequence: integer expected";
        if (message.sampleTime != null && message.hasOwnProperty("sampleTime"))
            if (!$util.isInteger(message.sampleTime) && !(message.sampleTime && $util.isInteger(message.sampleTime.low) && $util.isInteger(message.sampleTime.high)))
                return "sampleTime: integer|Long expected";
        if (message.haveMore != null && message.hasOwnProperty("haveMore"))
            if (typeof message.haveMore !== "boolean")
                return "haveMore: boolean expected";
        return null;
    };

    /**
     * Creates an AudioReady message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AudioReady
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AudioReady} AudioReady
     */
    AudioReady.fromObject = function fromObject(object) {
        if (object instanceof $root.AudioReady)
            return object;
        var message = new $root.AudioReady();
        if (object.buffer != null)
            if (typeof object.buffer === "string")
                $util.base64.decode(object.buffer, message.buffer = $util.newBuffer($util.base64.length(object.buffer)), 0);
            else if (object.buffer.length)
                message.buffer = object.buffer;
        if (object.measurements) {
            if (!Array.isArray(object.measurements))
                throw TypeError(".AudioReady.measurements: array expected");
            message.measurements = [];
            for (var i = 0; i < object.measurements.length; ++i) {
                if (typeof object.measurements[i] !== "object")
                    throw TypeError(".AudioReady.measurements: object expected");
                message.measurements[i] = $root.Measurement.fromObject(object.measurements[i]);
            }
        }
        if (object.sequence != null)
            message.sequence = object.sequence | 0;
        if (object.sampleTime != null)
            if ($util.Long)
                (message.sampleTime = $util.Long.fromValue(object.sampleTime)).unsigned = true;
            else if (typeof object.sampleTime === "string")
                message.sampleTime = parseInt(object.sampleTime, 10);
            else if (typeof object.sampleTime === "number")
                message.sampleTime = object.sampleTime;
            else if (typeof object.sampleTime === "object")
                message.sampleTime = new $util.LongBits(object.sampleTime.low >>> 0, object.sampleTime.high >>> 0).toNumber(true);
        if (object.haveMore != null)
            message.haveMore = Boolean(object.haveMore);
        return message;
    };

    /**
     * Creates a plain object from an AudioReady message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AudioReady
     * @static
     * @param {AudioReady} message AudioReady
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AudioReady.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.measurements = [];
        if (options.defaults) {
            object.buffer = options.bytes === String ? "" : [];
            object.sequence = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.sampleTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sampleTime = options.longs === String ? "0" : 0;
            object.haveMore = false;
        }
        if (message.buffer != null && message.hasOwnProperty("buffer"))
            object.buffer = options.bytes === String ? $util.base64.encode(message.buffer, 0, message.buffer.length) : options.bytes === Array ? Array.prototype.slice.call(message.buffer) : message.buffer;
        if (message.measurements && message.measurements.length) {
            object.measurements = [];
            for (var j = 0; j < message.measurements.length; ++j)
                object.measurements[j] = $root.Measurement.toObject(message.measurements[j], options);
        }
        if (message.sequence != null && message.hasOwnProperty("sequence"))
            object.sequence = message.sequence;
        if (message.sampleTime != null && message.hasOwnProperty("sampleTime"))
            if (typeof message.sampleTime === "number")
                object.sampleTime = options.longs === String ? String(message.sampleTime) : message.sampleTime;
            else
                object.sampleTime = options.longs === String ? $util.Long.prototype.toString.call(message.sampleTime) : options.longs === Number ? new $util.LongBits(message.sampleTime.low >>> 0, message.sampleTime.high >>> 0).toNumber(true) : message.sampleTime;
        if (message.haveMore != null && message.hasOwnProperty("haveMore"))
            object.haveMore = message.haveMore;
        return object;
    };

    /**
     * Converts this AudioReady to JSON.
     * @function toJSON
     * @memberof AudioReady
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AudioReady.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AudioReady;
})();

$root.SettingValue = (function() {

    /**
     * Properties of a SettingValue.
     * @exports ISettingValue
     * @interface ISettingValue
     * @property {string|null} [processor] SettingValue processor
     * @property {string|null} [parameter] SettingValue parameter
     * @property {number|null} [value] SettingValue value
     */

    /**
     * Constructs a new SettingValue.
     * @exports SettingValue
     * @classdesc A Setting value that needs to be applied to a processor.
     * @implements ISettingValue
     * @constructor
     * @param {ISettingValue=} [properties] Properties to set
     */
    function SettingValue(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SettingValue processor.
     * @member {string} processor
     * @memberof SettingValue
     * @instance
     */
    SettingValue.prototype.processor = "";

    /**
     * SettingValue parameter.
     * @member {string} parameter
     * @memberof SettingValue
     * @instance
     */
    SettingValue.prototype.parameter = "";

    /**
     * SettingValue value.
     * @member {number} value
     * @memberof SettingValue
     * @instance
     */
    SettingValue.prototype.value = 0;

    /**
     * Creates a new SettingValue instance using the specified properties.
     * @function create
     * @memberof SettingValue
     * @static
     * @param {ISettingValue=} [properties] Properties to set
     * @returns {SettingValue} SettingValue instance
     */
    SettingValue.create = function create(properties) {
        return new SettingValue(properties);
    };

    /**
     * Encodes the specified SettingValue message. Does not implicitly {@link SettingValue.verify|verify} messages.
     * @function encode
     * @memberof SettingValue
     * @static
     * @param {ISettingValue} message SettingValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SettingValue.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.processor != null && message.hasOwnProperty("processor"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.processor);
        if (message.parameter != null && message.hasOwnProperty("parameter"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.parameter);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.value);
        return writer;
    };

    /**
     * Encodes the specified SettingValue message, length delimited. Does not implicitly {@link SettingValue.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SettingValue
     * @static
     * @param {ISettingValue} message SettingValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SettingValue.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SettingValue message from the specified reader or buffer.
     * @function decode
     * @memberof SettingValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SettingValue} SettingValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SettingValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SettingValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.processor = reader.string();
                break;
            case 2:
                message.parameter = reader.string();
                break;
            case 3:
                message.value = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SettingValue message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SettingValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SettingValue} SettingValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SettingValue.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SettingValue message.
     * @function verify
     * @memberof SettingValue
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SettingValue.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.processor != null && message.hasOwnProperty("processor"))
            if (!$util.isString(message.processor))
                return "processor: string expected";
        if (message.parameter != null && message.hasOwnProperty("parameter"))
            if (!$util.isString(message.parameter))
                return "parameter: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value !== "number")
                return "value: number expected";
        return null;
    };

    /**
     * Creates a SettingValue message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SettingValue
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SettingValue} SettingValue
     */
    SettingValue.fromObject = function fromObject(object) {
        if (object instanceof $root.SettingValue)
            return object;
        var message = new $root.SettingValue();
        if (object.processor != null)
            message.processor = String(object.processor);
        if (object.parameter != null)
            message.parameter = String(object.parameter);
        if (object.value != null)
            message.value = Number(object.value);
        return message;
    };

    /**
     * Creates a plain object from a SettingValue message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SettingValue
     * @static
     * @param {SettingValue} message SettingValue
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SettingValue.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.processor = "";
            object.parameter = "";
            object.value = 0;
        }
        if (message.processor != null && message.hasOwnProperty("processor"))
            object.processor = message.processor;
        if (message.parameter != null && message.hasOwnProperty("parameter"))
            object.parameter = message.parameter;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
        return object;
    };

    /**
     * Converts this SettingValue to JSON.
     * @function toJSON
     * @memberof SettingValue
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SettingValue.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SettingValue;
})();

$root.SetSettings = (function() {

    /**
     * Properties of a SetSettings.
     * @exports ISetSettings
     * @interface ISetSettings
     * @property {Array.<ISettingValue>|null} [settings] Settings, keyed by compound key - name of the processor and name of the
     * setting, seperated by a dot. For example
     * limiter.0, insert3.in_gain, ...
     */

    /**
     * Constructs a new SetSettings.
     * @exports SetSettings
     * @classdesc Sent by the controller to the engine
     * @implements ISetSettings
     * @constructor
     * @param {ISetSettings=} [properties] Properties to set
     */
    function SetSettings(properties) {
        this.settings = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Settings, keyed by compound key - name of the processor and name of the
     * setting, seperated by a dot. For example
     * limiter.0, insert3.in_gain, ...
     * @member {Array.<ISettingValue>} settings
     * @memberof SetSettings
     * @instance
     */
    SetSettings.prototype.settings = $util.emptyArray;

    /**
     * Creates a new SetSettings instance using the specified properties.
     * @function create
     * @memberof SetSettings
     * @static
     * @param {ISetSettings=} [properties] Properties to set
     * @returns {SetSettings} SetSettings instance
     */
    SetSettings.create = function create(properties) {
        return new SetSettings(properties);
    };

    /**
     * Encodes the specified SetSettings message. Does not implicitly {@link SetSettings.verify|verify} messages.
     * @function encode
     * @memberof SetSettings
     * @static
     * @param {ISetSettings} message SetSettings message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetSettings.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.settings != null && message.settings.length)
            for (var i = 0; i < message.settings.length; ++i)
                $root.SettingValue.encode(message.settings[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SetSettings message, length delimited. Does not implicitly {@link SetSettings.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetSettings
     * @static
     * @param {ISetSettings} message SetSettings message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetSettings.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetSettings message from the specified reader or buffer.
     * @function decode
     * @memberof SetSettings
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetSettings} SetSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetSettings.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetSettings();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.settings && message.settings.length))
                    message.settings = [];
                message.settings.push($root.SettingValue.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetSettings message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetSettings
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetSettings} SetSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetSettings.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetSettings message.
     * @function verify
     * @memberof SetSettings
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetSettings.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.settings != null && message.hasOwnProperty("settings")) {
            if (!Array.isArray(message.settings))
                return "settings: array expected";
            for (var i = 0; i < message.settings.length; ++i) {
                var error = $root.SettingValue.verify(message.settings[i]);
                if (error)
                    return "settings." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SetSettings message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetSettings
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetSettings} SetSettings
     */
    SetSettings.fromObject = function fromObject(object) {
        if (object instanceof $root.SetSettings)
            return object;
        var message = new $root.SetSettings();
        if (object.settings) {
            if (!Array.isArray(object.settings))
                throw TypeError(".SetSettings.settings: array expected");
            message.settings = [];
            for (var i = 0; i < object.settings.length; ++i) {
                if (typeof object.settings[i] !== "object")
                    throw TypeError(".SetSettings.settings: object expected");
                message.settings[i] = $root.SettingValue.fromObject(object.settings[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SetSettings message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetSettings
     * @static
     * @param {SetSettings} message SetSettings
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetSettings.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.settings = [];
        if (message.settings && message.settings.length) {
            object.settings = [];
            for (var j = 0; j < message.settings.length; ++j)
                object.settings[j] = $root.SettingValue.toObject(message.settings[j], options);
        }
        return object;
    };

    /**
     * Converts this SetSettings to JSON.
     * @function toJSON
     * @memberof SetSettings
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetSettings.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetSettings;
})();

$root.Terminate = (function() {

    /**
     * Properties of a Terminate.
     * @exports ITerminate
     * @interface ITerminate
     */

    /**
     * Constructs a new Terminate.
     * @exports Terminate
     * @classdesc Sent by the Controller to the Engine when it should shut down!
     * No buts no questions, just terminate
     * @implements ITerminate
     * @constructor
     * @param {ITerminate=} [properties] Properties to set
     */
    function Terminate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Terminate instance using the specified properties.
     * @function create
     * @memberof Terminate
     * @static
     * @param {ITerminate=} [properties] Properties to set
     * @returns {Terminate} Terminate instance
     */
    Terminate.create = function create(properties) {
        return new Terminate(properties);
    };

    /**
     * Encodes the specified Terminate message. Does not implicitly {@link Terminate.verify|verify} messages.
     * @function encode
     * @memberof Terminate
     * @static
     * @param {ITerminate} message Terminate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Terminate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Terminate message, length delimited. Does not implicitly {@link Terminate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Terminate
     * @static
     * @param {ITerminate} message Terminate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Terminate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Terminate message from the specified reader or buffer.
     * @function decode
     * @memberof Terminate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Terminate} Terminate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Terminate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Terminate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Terminate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Terminate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Terminate} Terminate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Terminate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Terminate message.
     * @function verify
     * @memberof Terminate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Terminate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Terminate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Terminate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Terminate} Terminate
     */
    Terminate.fromObject = function fromObject(object) {
        if (object instanceof $root.Terminate)
            return object;
        return new $root.Terminate();
    };

    /**
     * Creates a plain object from a Terminate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Terminate
     * @static
     * @param {Terminate} message Terminate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Terminate.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Terminate to JSON.
     * @function toJSON
     * @memberof Terminate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Terminate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Terminate;
})();

$root.Terminated = (function() {

    /**
     * Properties of a Terminated.
     * @exports ITerminated
     * @interface ITerminated
     * @property {string|null} [reason] Terminated reason
     */

    /**
     * Constructs a new Terminated.
     * @exports Terminated
     * @classdesc Sent by the Engine to the Controller when it is about to exit.
     * @implements ITerminated
     * @constructor
     * @param {ITerminated=} [properties] Properties to set
     */
    function Terminated(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Terminated reason.
     * @member {string} reason
     * @memberof Terminated
     * @instance
     */
    Terminated.prototype.reason = "";

    /**
     * Creates a new Terminated instance using the specified properties.
     * @function create
     * @memberof Terminated
     * @static
     * @param {ITerminated=} [properties] Properties to set
     * @returns {Terminated} Terminated instance
     */
    Terminated.create = function create(properties) {
        return new Terminated(properties);
    };

    /**
     * Encodes the specified Terminated message. Does not implicitly {@link Terminated.verify|verify} messages.
     * @function encode
     * @memberof Terminated
     * @static
     * @param {ITerminated} message Terminated message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Terminated.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
        return writer;
    };

    /**
     * Encodes the specified Terminated message, length delimited. Does not implicitly {@link Terminated.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Terminated
     * @static
     * @param {ITerminated} message Terminated message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Terminated.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Terminated message from the specified reader or buffer.
     * @function decode
     * @memberof Terminated
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Terminated} Terminated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Terminated.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Terminated();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.reason = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Terminated message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Terminated
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Terminated} Terminated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Terminated.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Terminated message.
     * @function verify
     * @memberof Terminated
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Terminated.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        return null;
    };

    /**
     * Creates a Terminated message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Terminated
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Terminated} Terminated
     */
    Terminated.fromObject = function fromObject(object) {
        if (object instanceof $root.Terminated)
            return object;
        var message = new $root.Terminated();
        if (object.reason != null)
            message.reason = String(object.reason);
        return message;
    };

    /**
     * Creates a plain object from a Terminated message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Terminated
     * @static
     * @param {Terminated} message Terminated
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Terminated.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.reason = "";
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        return object;
    };

    /**
     * Converts this Terminated to JSON.
     * @function toJSON
     * @memberof Terminated
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Terminated.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Terminated;
})();

$root.Connection = (function() {

    /**
     * Properties of a Connection.
     * @exports IConnection
     * @interface IConnection
     * @property {string|null} [fromNode] Connection fromNode
     * @property {string|null} [fromPad] Connection fromPad
     * @property {string|null} [toNode] Connection toNode
     * @property {string|null} [toPad] Connection toPad
     */

    /**
     * Constructs a new Connection.
     * @exports Connection
     * @classdesc Represents a Connection.
     * @implements IConnection
     * @constructor
     * @param {IConnection=} [properties] Properties to set
     */
    function Connection(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Connection fromNode.
     * @member {string} fromNode
     * @memberof Connection
     * @instance
     */
    Connection.prototype.fromNode = "";

    /**
     * Connection fromPad.
     * @member {string} fromPad
     * @memberof Connection
     * @instance
     */
    Connection.prototype.fromPad = "";

    /**
     * Connection toNode.
     * @member {string} toNode
     * @memberof Connection
     * @instance
     */
    Connection.prototype.toNode = "";

    /**
     * Connection toPad.
     * @member {string} toPad
     * @memberof Connection
     * @instance
     */
    Connection.prototype.toPad = "";

    /**
     * Creates a new Connection instance using the specified properties.
     * @function create
     * @memberof Connection
     * @static
     * @param {IConnection=} [properties] Properties to set
     * @returns {Connection} Connection instance
     */
    Connection.create = function create(properties) {
        return new Connection(properties);
    };

    /**
     * Encodes the specified Connection message. Does not implicitly {@link Connection.verify|verify} messages.
     * @function encode
     * @memberof Connection
     * @static
     * @param {IConnection} message Connection message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Connection.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.fromNode != null && message.hasOwnProperty("fromNode"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.fromNode);
        if (message.fromPad != null && message.hasOwnProperty("fromPad"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.fromPad);
        if (message.toNode != null && message.hasOwnProperty("toNode"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.toNode);
        if (message.toPad != null && message.hasOwnProperty("toPad"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.toPad);
        return writer;
    };

    /**
     * Encodes the specified Connection message, length delimited. Does not implicitly {@link Connection.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Connection
     * @static
     * @param {IConnection} message Connection message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Connection.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Connection message from the specified reader or buffer.
     * @function decode
     * @memberof Connection
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Connection} Connection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Connection.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Connection();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.fromNode = reader.string();
                break;
            case 2:
                message.fromPad = reader.string();
                break;
            case 3:
                message.toNode = reader.string();
                break;
            case 4:
                message.toPad = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Connection message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Connection
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Connection} Connection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Connection.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Connection message.
     * @function verify
     * @memberof Connection
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Connection.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.fromNode != null && message.hasOwnProperty("fromNode"))
            if (!$util.isString(message.fromNode))
                return "fromNode: string expected";
        if (message.fromPad != null && message.hasOwnProperty("fromPad"))
            if (!$util.isString(message.fromPad))
                return "fromPad: string expected";
        if (message.toNode != null && message.hasOwnProperty("toNode"))
            if (!$util.isString(message.toNode))
                return "toNode: string expected";
        if (message.toPad != null && message.hasOwnProperty("toPad"))
            if (!$util.isString(message.toPad))
                return "toPad: string expected";
        return null;
    };

    /**
     * Creates a Connection message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Connection
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Connection} Connection
     */
    Connection.fromObject = function fromObject(object) {
        if (object instanceof $root.Connection)
            return object;
        var message = new $root.Connection();
        if (object.fromNode != null)
            message.fromNode = String(object.fromNode);
        if (object.fromPad != null)
            message.fromPad = String(object.fromPad);
        if (object.toNode != null)
            message.toNode = String(object.toNode);
        if (object.toPad != null)
            message.toPad = String(object.toPad);
        return message;
    };

    /**
     * Creates a plain object from a Connection message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Connection
     * @static
     * @param {Connection} message Connection
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Connection.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.fromNode = "";
            object.fromPad = "";
            object.toNode = "";
            object.toPad = "";
        }
        if (message.fromNode != null && message.hasOwnProperty("fromNode"))
            object.fromNode = message.fromNode;
        if (message.fromPad != null && message.hasOwnProperty("fromPad"))
            object.fromPad = message.fromPad;
        if (message.toNode != null && message.hasOwnProperty("toNode"))
            object.toNode = message.toNode;
        if (message.toPad != null && message.hasOwnProperty("toPad"))
            object.toPad = message.toPad;
        return object;
    };

    /**
     * Converts this Connection to JSON.
     * @function toJSON
     * @memberof Connection
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Connection.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Connection;
})();

$root.Play = (function() {

    /**
     * Properties of a Play.
     * @exports IPlay
     * @interface IPlay
     * @property {Object.<string,IInput>|null} [inputs] Play inputs
     * @property {Object.<string,IProcessorSpec>|null} [processors] Play processors
     * @property {IOutputCoding|null} [output] Play output
     * @property {Array.<IConnection>|null} [flow] Play flow
     * @property {ISetSettings|null} [settings] Play settings
     */

    /**
     * Constructs a new Play.
     * @exports Play
     * @classdesc Represents a Play.
     * @implements IPlay
     * @constructor
     * @param {IPlay=} [properties] Properties to set
     */
    function Play(properties) {
        this.inputs = {};
        this.processors = {};
        this.flow = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Play inputs.
     * @member {Object.<string,IInput>} inputs
     * @memberof Play
     * @instance
     */
    Play.prototype.inputs = $util.emptyObject;

    /**
     * Play processors.
     * @member {Object.<string,IProcessorSpec>} processors
     * @memberof Play
     * @instance
     */
    Play.prototype.processors = $util.emptyObject;

    /**
     * Play output.
     * @member {IOutputCoding|null|undefined} output
     * @memberof Play
     * @instance
     */
    Play.prototype.output = null;

    /**
     * Play flow.
     * @member {Array.<IConnection>} flow
     * @memberof Play
     * @instance
     */
    Play.prototype.flow = $util.emptyArray;

    /**
     * Play settings.
     * @member {ISetSettings|null|undefined} settings
     * @memberof Play
     * @instance
     */
    Play.prototype.settings = null;

    /**
     * Creates a new Play instance using the specified properties.
     * @function create
     * @memberof Play
     * @static
     * @param {IPlay=} [properties] Properties to set
     * @returns {Play} Play instance
     */
    Play.create = function create(properties) {
        return new Play(properties);
    };

    /**
     * Encodes the specified Play message. Does not implicitly {@link Play.verify|verify} messages.
     * @function encode
     * @memberof Play
     * @static
     * @param {IPlay} message Play message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Play.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.inputs != null && message.hasOwnProperty("inputs"))
            for (var keys = Object.keys(message.inputs), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.Input.encode(message.inputs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.output != null && message.hasOwnProperty("output"))
            $root.OutputCoding.encode(message.output, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.processors != null && message.hasOwnProperty("processors"))
            for (var keys = Object.keys(message.processors), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.ProcessorSpec.encode(message.processors[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.flow != null && message.flow.length)
            for (var i = 0; i < message.flow.length; ++i)
                $root.Connection.encode(message.flow[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.settings != null && message.hasOwnProperty("settings"))
            $root.SetSettings.encode(message.settings, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Play message, length delimited. Does not implicitly {@link Play.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Play
     * @static
     * @param {IPlay} message Play message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Play.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Play message from the specified reader or buffer.
     * @function decode
     * @memberof Play
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Play} Play
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Play.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Play(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                reader.skip().pos++;
                if (message.inputs === $util.emptyObject)
                    message.inputs = {};
                key = reader.string();
                reader.pos++;
                message.inputs[key] = $root.Input.decode(reader, reader.uint32());
                break;
            case 3:
                reader.skip().pos++;
                if (message.processors === $util.emptyObject)
                    message.processors = {};
                key = reader.string();
                reader.pos++;
                message.processors[key] = $root.ProcessorSpec.decode(reader, reader.uint32());
                break;
            case 2:
                message.output = $root.OutputCoding.decode(reader, reader.uint32());
                break;
            case 4:
                if (!(message.flow && message.flow.length))
                    message.flow = [];
                message.flow.push($root.Connection.decode(reader, reader.uint32()));
                break;
            case 5:
                message.settings = $root.SetSettings.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Play message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Play
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Play} Play
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Play.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Play message.
     * @function verify
     * @memberof Play
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Play.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.inputs != null && message.hasOwnProperty("inputs")) {
            if (!$util.isObject(message.inputs))
                return "inputs: object expected";
            var key = Object.keys(message.inputs);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.Input.verify(message.inputs[key[i]]);
                if (error)
                    return "inputs." + error;
            }
        }
        if (message.processors != null && message.hasOwnProperty("processors")) {
            if (!$util.isObject(message.processors))
                return "processors: object expected";
            var key = Object.keys(message.processors);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.ProcessorSpec.verify(message.processors[key[i]]);
                if (error)
                    return "processors." + error;
            }
        }
        if (message.output != null && message.hasOwnProperty("output")) {
            var error = $root.OutputCoding.verify(message.output);
            if (error)
                return "output." + error;
        }
        if (message.flow != null && message.hasOwnProperty("flow")) {
            if (!Array.isArray(message.flow))
                return "flow: array expected";
            for (var i = 0; i < message.flow.length; ++i) {
                var error = $root.Connection.verify(message.flow[i]);
                if (error)
                    return "flow." + error;
            }
        }
        if (message.settings != null && message.hasOwnProperty("settings")) {
            var error = $root.SetSettings.verify(message.settings);
            if (error)
                return "settings." + error;
        }
        return null;
    };

    /**
     * Creates a Play message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Play
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Play} Play
     */
    Play.fromObject = function fromObject(object) {
        if (object instanceof $root.Play)
            return object;
        var message = new $root.Play();
        if (object.inputs) {
            if (typeof object.inputs !== "object")
                throw TypeError(".Play.inputs: object expected");
            message.inputs = {};
            for (var keys = Object.keys(object.inputs), i = 0; i < keys.length; ++i) {
                if (typeof object.inputs[keys[i]] !== "object")
                    throw TypeError(".Play.inputs: object expected");
                message.inputs[keys[i]] = $root.Input.fromObject(object.inputs[keys[i]]);
            }
        }
        if (object.processors) {
            if (typeof object.processors !== "object")
                throw TypeError(".Play.processors: object expected");
            message.processors = {};
            for (var keys = Object.keys(object.processors), i = 0; i < keys.length; ++i) {
                if (typeof object.processors[keys[i]] !== "object")
                    throw TypeError(".Play.processors: object expected");
                message.processors[keys[i]] = $root.ProcessorSpec.fromObject(object.processors[keys[i]]);
            }
        }
        if (object.output != null) {
            if (typeof object.output !== "object")
                throw TypeError(".Play.output: object expected");
            message.output = $root.OutputCoding.fromObject(object.output);
        }
        if (object.flow) {
            if (!Array.isArray(object.flow))
                throw TypeError(".Play.flow: array expected");
            message.flow = [];
            for (var i = 0; i < object.flow.length; ++i) {
                if (typeof object.flow[i] !== "object")
                    throw TypeError(".Play.flow: object expected");
                message.flow[i] = $root.Connection.fromObject(object.flow[i]);
            }
        }
        if (object.settings != null) {
            if (typeof object.settings !== "object")
                throw TypeError(".Play.settings: object expected");
            message.settings = $root.SetSettings.fromObject(object.settings);
        }
        return message;
    };

    /**
     * Creates a plain object from a Play message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Play
     * @static
     * @param {Play} message Play
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Play.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.flow = [];
        if (options.objects || options.defaults) {
            object.inputs = {};
            object.processors = {};
        }
        if (options.defaults) {
            object.output = null;
            object.settings = null;
        }
        var keys2;
        if (message.inputs && (keys2 = Object.keys(message.inputs)).length) {
            object.inputs = {};
            for (var j = 0; j < keys2.length; ++j)
                object.inputs[keys2[j]] = $root.Input.toObject(message.inputs[keys2[j]], options);
        }
        if (message.output != null && message.hasOwnProperty("output"))
            object.output = $root.OutputCoding.toObject(message.output, options);
        if (message.processors && (keys2 = Object.keys(message.processors)).length) {
            object.processors = {};
            for (var j = 0; j < keys2.length; ++j)
                object.processors[keys2[j]] = $root.ProcessorSpec.toObject(message.processors[keys2[j]], options);
        }
        if (message.flow && message.flow.length) {
            object.flow = [];
            for (var j = 0; j < message.flow.length; ++j)
                object.flow[j] = $root.Connection.toObject(message.flow[j], options);
        }
        if (message.settings != null && message.hasOwnProperty("settings"))
            object.settings = $root.SetSettings.toObject(message.settings, options);
        return object;
    };

    /**
     * Converts this Play to JSON.
     * @function toJSON
     * @memberof Play
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Play.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Play;
})();

$root.ErrorOrWarning = (function() {

    /**
     * Properties of an ErrorOrWarning.
     * @exports IErrorOrWarning
     * @interface IErrorOrWarning
     * @property {string|null} [warning] ErrorOrWarning warning
     * @property {string|null} [error] ErrorOrWarning error
     */

    /**
     * Constructs a new ErrorOrWarning.
     * @exports ErrorOrWarning
     * @classdesc Represents an ErrorOrWarning.
     * @implements IErrorOrWarning
     * @constructor
     * @param {IErrorOrWarning=} [properties] Properties to set
     */
    function ErrorOrWarning(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ErrorOrWarning warning.
     * @member {string} warning
     * @memberof ErrorOrWarning
     * @instance
     */
    ErrorOrWarning.prototype.warning = "";

    /**
     * ErrorOrWarning error.
     * @member {string} error
     * @memberof ErrorOrWarning
     * @instance
     */
    ErrorOrWarning.prototype.error = "";

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ErrorOrWarning message.
     * @member {"warning"|"error"|undefined} message
     * @memberof ErrorOrWarning
     * @instance
     */
    Object.defineProperty(ErrorOrWarning.prototype, "message", {
        get: $util.oneOfGetter($oneOfFields = ["warning", "error"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ErrorOrWarning instance using the specified properties.
     * @function create
     * @memberof ErrorOrWarning
     * @static
     * @param {IErrorOrWarning=} [properties] Properties to set
     * @returns {ErrorOrWarning} ErrorOrWarning instance
     */
    ErrorOrWarning.create = function create(properties) {
        return new ErrorOrWarning(properties);
    };

    /**
     * Encodes the specified ErrorOrWarning message. Does not implicitly {@link ErrorOrWarning.verify|verify} messages.
     * @function encode
     * @memberof ErrorOrWarning
     * @static
     * @param {IErrorOrWarning} message ErrorOrWarning message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ErrorOrWarning.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.warning != null && message.hasOwnProperty("warning"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.warning);
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
        return writer;
    };

    /**
     * Encodes the specified ErrorOrWarning message, length delimited. Does not implicitly {@link ErrorOrWarning.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ErrorOrWarning
     * @static
     * @param {IErrorOrWarning} message ErrorOrWarning message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ErrorOrWarning.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ErrorOrWarning message from the specified reader or buffer.
     * @function decode
     * @memberof ErrorOrWarning
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ErrorOrWarning} ErrorOrWarning
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ErrorOrWarning.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ErrorOrWarning();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.warning = reader.string();
                break;
            case 2:
                message.error = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ErrorOrWarning message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ErrorOrWarning
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ErrorOrWarning} ErrorOrWarning
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ErrorOrWarning.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ErrorOrWarning message.
     * @function verify
     * @memberof ErrorOrWarning
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ErrorOrWarning.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.warning != null && message.hasOwnProperty("warning")) {
            properties.message = 1;
            if (!$util.isString(message.warning))
                return "warning: string expected";
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            if (!$util.isString(message.error))
                return "error: string expected";
        }
        return null;
    };

    /**
     * Creates an ErrorOrWarning message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ErrorOrWarning
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ErrorOrWarning} ErrorOrWarning
     */
    ErrorOrWarning.fromObject = function fromObject(object) {
        if (object instanceof $root.ErrorOrWarning)
            return object;
        var message = new $root.ErrorOrWarning();
        if (object.warning != null)
            message.warning = String(object.warning);
        if (object.error != null)
            message.error = String(object.error);
        return message;
    };

    /**
     * Creates a plain object from an ErrorOrWarning message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ErrorOrWarning
     * @static
     * @param {ErrorOrWarning} message ErrorOrWarning
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ErrorOrWarning.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.warning != null && message.hasOwnProperty("warning")) {
            object.warning = message.warning;
            if (options.oneofs)
                object.message = "warning";
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            object.error = message.error;
            if (options.oneofs)
                object.message = "error";
        }
        return object;
    };

    /**
     * Converts this ErrorOrWarning to JSON.
     * @function toJSON
     * @memberof ErrorOrWarning
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ErrorOrWarning.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ErrorOrWarning;
})();

$root.Event = (function() {

    /**
     * Properties of an Event.
     * @exports IEvent
     * @interface IEvent
     * @property {IReady|null} [ready] Event ready
     * @property {IAudioReady|null} [audioReady] Event audioReady
     * @property {ITerminated|null} [terminated] Event terminated
     * @property {IErrorOrWarning|null} [errorOrWarning] Event errorOrWarning
     */

    /**
     * Constructs a new Event.
     * @exports Event
     * @classdesc Represents an Event.
     * @implements IEvent
     * @constructor
     * @param {IEvent=} [properties] Properties to set
     */
    function Event(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Event ready.
     * @member {IReady|null|undefined} ready
     * @memberof Event
     * @instance
     */
    Event.prototype.ready = null;

    /**
     * Event audioReady.
     * @member {IAudioReady|null|undefined} audioReady
     * @memberof Event
     * @instance
     */
    Event.prototype.audioReady = null;

    /**
     * Event terminated.
     * @member {ITerminated|null|undefined} terminated
     * @memberof Event
     * @instance
     */
    Event.prototype.terminated = null;

    /**
     * Event errorOrWarning.
     * @member {IErrorOrWarning|null|undefined} errorOrWarning
     * @memberof Event
     * @instance
     */
    Event.prototype.errorOrWarning = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Event message.
     * @member {"ready"|"audioReady"|"terminated"|"errorOrWarning"|undefined} message
     * @memberof Event
     * @instance
     */
    Object.defineProperty(Event.prototype, "message", {
        get: $util.oneOfGetter($oneOfFields = ["ready", "audioReady", "terminated", "errorOrWarning"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Event instance using the specified properties.
     * @function create
     * @memberof Event
     * @static
     * @param {IEvent=} [properties] Properties to set
     * @returns {Event} Event instance
     */
    Event.create = function create(properties) {
        return new Event(properties);
    };

    /**
     * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
     * @function encode
     * @memberof Event
     * @static
     * @param {IEvent} message Event message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Event.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ready != null && message.hasOwnProperty("ready"))
            $root.Ready.encode(message.ready, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.audioReady != null && message.hasOwnProperty("audioReady"))
            $root.AudioReady.encode(message.audioReady, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.terminated != null && message.hasOwnProperty("terminated"))
            $root.Terminated.encode(message.terminated, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.errorOrWarning != null && message.hasOwnProperty("errorOrWarning"))
            $root.ErrorOrWarning.encode(message.errorOrWarning, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Event
     * @static
     * @param {IEvent} message Event message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Event.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Event message from the specified reader or buffer.
     * @function decode
     * @memberof Event
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Event} Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Event.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Event();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ready = $root.Ready.decode(reader, reader.uint32());
                break;
            case 2:
                message.audioReady = $root.AudioReady.decode(reader, reader.uint32());
                break;
            case 3:
                message.terminated = $root.Terminated.decode(reader, reader.uint32());
                break;
            case 4:
                message.errorOrWarning = $root.ErrorOrWarning.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Event message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Event
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Event} Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Event.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Event message.
     * @function verify
     * @memberof Event
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Event.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.ready != null && message.hasOwnProperty("ready")) {
            properties.message = 1;
            {
                var error = $root.Ready.verify(message.ready);
                if (error)
                    return "ready." + error;
            }
        }
        if (message.audioReady != null && message.hasOwnProperty("audioReady")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.AudioReady.verify(message.audioReady);
                if (error)
                    return "audioReady." + error;
            }
        }
        if (message.terminated != null && message.hasOwnProperty("terminated")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.Terminated.verify(message.terminated);
                if (error)
                    return "terminated." + error;
            }
        }
        if (message.errorOrWarning != null && message.hasOwnProperty("errorOrWarning")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.ErrorOrWarning.verify(message.errorOrWarning);
                if (error)
                    return "errorOrWarning." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Event message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Event
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Event} Event
     */
    Event.fromObject = function fromObject(object) {
        if (object instanceof $root.Event)
            return object;
        var message = new $root.Event();
        if (object.ready != null) {
            if (typeof object.ready !== "object")
                throw TypeError(".Event.ready: object expected");
            message.ready = $root.Ready.fromObject(object.ready);
        }
        if (object.audioReady != null) {
            if (typeof object.audioReady !== "object")
                throw TypeError(".Event.audioReady: object expected");
            message.audioReady = $root.AudioReady.fromObject(object.audioReady);
        }
        if (object.terminated != null) {
            if (typeof object.terminated !== "object")
                throw TypeError(".Event.terminated: object expected");
            message.terminated = $root.Terminated.fromObject(object.terminated);
        }
        if (object.errorOrWarning != null) {
            if (typeof object.errorOrWarning !== "object")
                throw TypeError(".Event.errorOrWarning: object expected");
            message.errorOrWarning = $root.ErrorOrWarning.fromObject(object.errorOrWarning);
        }
        return message;
    };

    /**
     * Creates a plain object from an Event message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Event
     * @static
     * @param {Event} message Event
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Event.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.ready != null && message.hasOwnProperty("ready")) {
            object.ready = $root.Ready.toObject(message.ready, options);
            if (options.oneofs)
                object.message = "ready";
        }
        if (message.audioReady != null && message.hasOwnProperty("audioReady")) {
            object.audioReady = $root.AudioReady.toObject(message.audioReady, options);
            if (options.oneofs)
                object.message = "audioReady";
        }
        if (message.terminated != null && message.hasOwnProperty("terminated")) {
            object.terminated = $root.Terminated.toObject(message.terminated, options);
            if (options.oneofs)
                object.message = "terminated";
        }
        if (message.errorOrWarning != null && message.hasOwnProperty("errorOrWarning")) {
            object.errorOrWarning = $root.ErrorOrWarning.toObject(message.errorOrWarning, options);
            if (options.oneofs)
                object.message = "errorOrWarning";
        }
        return object;
    };

    /**
     * Converts this Event to JSON.
     * @function toJSON
     * @memberof Event
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Event.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Event;
})();

$root.Request = (function() {

    /**
     * Properties of a Request.
     * @exports IRequest
     * @interface IRequest
     * @property {string|null} [requestId] Request requestId
     * @property {IPlay|null} [play] Request play
     * @property {ITerminate|null} [terminate] Request terminate
     * @property {ISetSettings|null} [setSettings] Request setSettings
     */

    /**
     * Constructs a new Request.
     * @exports Request
     * @classdesc Represents a Request.
     * @implements IRequest
     * @constructor
     * @param {IRequest=} [properties] Properties to set
     */
    function Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Request requestId.
     * @member {string} requestId
     * @memberof Request
     * @instance
     */
    Request.prototype.requestId = "";

    /**
     * Request play.
     * @member {IPlay|null|undefined} play
     * @memberof Request
     * @instance
     */
    Request.prototype.play = null;

    /**
     * Request terminate.
     * @member {ITerminate|null|undefined} terminate
     * @memberof Request
     * @instance
     */
    Request.prototype.terminate = null;

    /**
     * Request setSettings.
     * @member {ISetSettings|null|undefined} setSettings
     * @memberof Request
     * @instance
     */
    Request.prototype.setSettings = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Request command.
     * @member {"play"|"terminate"|"setSettings"|undefined} command
     * @memberof Request
     * @instance
     */
    Object.defineProperty(Request.prototype, "command", {
        get: $util.oneOfGetter($oneOfFields = ["play", "terminate", "setSettings"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Request instance using the specified properties.
     * @function create
     * @memberof Request
     * @static
     * @param {IRequest=} [properties] Properties to set
     * @returns {Request} Request instance
     */
    Request.create = function create(properties) {
        return new Request(properties);
    };

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @function encode
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.play != null && message.hasOwnProperty("play"))
            $root.Play.encode(message.play, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.terminate != null && message.hasOwnProperty("terminate"))
            $root.Terminate.encode(message.terminate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.setSettings != null && message.hasOwnProperty("setSettings"))
            $root.SetSettings.encode(message.setSettings, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @function decode
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.requestId = reader.string();
                break;
            case 2:
                message.play = $root.Play.decode(reader, reader.uint32());
                break;
            case 3:
                message.terminate = $root.Terminate.decode(reader, reader.uint32());
                break;
            case 4:
                message.setSettings = $root.SetSettings.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Request message.
     * @function verify
     * @memberof Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isString(message.requestId))
                return "requestId: string expected";
        if (message.play != null && message.hasOwnProperty("play")) {
            properties.command = 1;
            {
                var error = $root.Play.verify(message.play);
                if (error)
                    return "play." + error;
            }
        }
        if (message.terminate != null && message.hasOwnProperty("terminate")) {
            if (properties.command === 1)
                return "command: multiple values";
            properties.command = 1;
            {
                var error = $root.Terminate.verify(message.terminate);
                if (error)
                    return "terminate." + error;
            }
        }
        if (message.setSettings != null && message.hasOwnProperty("setSettings")) {
            if (properties.command === 1)
                return "command: multiple values";
            properties.command = 1;
            {
                var error = $root.SetSettings.verify(message.setSettings);
                if (error)
                    return "setSettings." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Request} Request
     */
    Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Request)
            return object;
        var message = new $root.Request();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.play != null) {
            if (typeof object.play !== "object")
                throw TypeError(".Request.play: object expected");
            message.play = $root.Play.fromObject(object.play);
        }
        if (object.terminate != null) {
            if (typeof object.terminate !== "object")
                throw TypeError(".Request.terminate: object expected");
            message.terminate = $root.Terminate.fromObject(object.terminate);
        }
        if (object.setSettings != null) {
            if (typeof object.setSettings !== "object")
                throw TypeError(".Request.setSettings: object expected");
            message.setSettings = $root.SetSettings.fromObject(object.setSettings);
        }
        return message;
    };

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Request
     * @static
     * @param {Request} message Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.play != null && message.hasOwnProperty("play")) {
            object.play = $root.Play.toObject(message.play, options);
            if (options.oneofs)
                object.command = "play";
        }
        if (message.terminate != null && message.hasOwnProperty("terminate")) {
            object.terminate = $root.Terminate.toObject(message.terminate, options);
            if (options.oneofs)
                object.command = "terminate";
        }
        if (message.setSettings != null && message.hasOwnProperty("setSettings")) {
            object.setSettings = $root.SetSettings.toObject(message.setSettings, options);
            if (options.oneofs)
                object.command = "setSettings";
        }
        return object;
    };

    /**
     * Converts this Request to JSON.
     * @function toJSON
     * @memberof Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Request;
})();

$root.Response = (function() {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {string|null} [requestId] Response requestId
     * @property {string|null} [error] Response error
     */

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @implements IResponse
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response requestId.
     * @member {string} requestId
     * @memberof Response
     * @instance
     */
    Response.prototype.requestId = "";

    /**
     * Response error.
     * @member {string} error
     * @memberof Response
     * @instance
     */
    Response.prototype.error = "";

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
        return writer;
    };

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.requestId = reader.string();
                break;
            case 2:
                message.error = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isString(message.requestId))
                return "requestId: string expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isString(message.error))
                return "error: string expected";
        return null;
    };

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        var message = new $root.Response();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.error != null)
            message.error = String(object.error);
        return message;
    };

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.requestId = "";
            object.error = "";
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Response;
})();

$root.AudioRuntimeStatus = (function() {

    /**
     * Properties of an AudioRuntimeStatus.
     * @exports IAudioRuntimeStatus
     * @interface IAudioRuntimeStatus
     */

    /**
     * Constructs a new AudioRuntimeStatus.
     * @exports AudioRuntimeStatus
     * @classdesc Represents an AudioRuntimeStatus.
     * @implements IAudioRuntimeStatus
     * @constructor
     * @param {IAudioRuntimeStatus=} [properties] Properties to set
     */
    function AudioRuntimeStatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new AudioRuntimeStatus instance using the specified properties.
     * @function create
     * @memberof AudioRuntimeStatus
     * @static
     * @param {IAudioRuntimeStatus=} [properties] Properties to set
     * @returns {AudioRuntimeStatus} AudioRuntimeStatus instance
     */
    AudioRuntimeStatus.create = function create(properties) {
        return new AudioRuntimeStatus(properties);
    };

    /**
     * Encodes the specified AudioRuntimeStatus message. Does not implicitly {@link AudioRuntimeStatus.verify|verify} messages.
     * @function encode
     * @memberof AudioRuntimeStatus
     * @static
     * @param {IAudioRuntimeStatus} message AudioRuntimeStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AudioRuntimeStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified AudioRuntimeStatus message, length delimited. Does not implicitly {@link AudioRuntimeStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AudioRuntimeStatus
     * @static
     * @param {IAudioRuntimeStatus} message AudioRuntimeStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AudioRuntimeStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AudioRuntimeStatus message from the specified reader or buffer.
     * @function decode
     * @memberof AudioRuntimeStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AudioRuntimeStatus} AudioRuntimeStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AudioRuntimeStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AudioRuntimeStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AudioRuntimeStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AudioRuntimeStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AudioRuntimeStatus} AudioRuntimeStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AudioRuntimeStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AudioRuntimeStatus message.
     * @function verify
     * @memberof AudioRuntimeStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AudioRuntimeStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an AudioRuntimeStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AudioRuntimeStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AudioRuntimeStatus} AudioRuntimeStatus
     */
    AudioRuntimeStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.AudioRuntimeStatus)
            return object;
        return new $root.AudioRuntimeStatus();
    };

    /**
     * Creates a plain object from an AudioRuntimeStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AudioRuntimeStatus
     * @static
     * @param {AudioRuntimeStatus} message AudioRuntimeStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AudioRuntimeStatus.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this AudioRuntimeStatus to JSON.
     * @function toJSON
     * @memberof AudioRuntimeStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AudioRuntimeStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AudioRuntimeStatus;
})();

$root.NoParameters = (function() {

    /**
     * Properties of a NoParameters.
     * @exports INoParameters
     * @interface INoParameters
     */

    /**
     * Constructs a new NoParameters.
     * @exports NoParameters
     * @classdesc Represents a NoParameters.
     * @implements INoParameters
     * @constructor
     * @param {INoParameters=} [properties] Properties to set
     */
    function NoParameters(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new NoParameters instance using the specified properties.
     * @function create
     * @memberof NoParameters
     * @static
     * @param {INoParameters=} [properties] Properties to set
     * @returns {NoParameters} NoParameters instance
     */
    NoParameters.create = function create(properties) {
        return new NoParameters(properties);
    };

    /**
     * Encodes the specified NoParameters message. Does not implicitly {@link NoParameters.verify|verify} messages.
     * @function encode
     * @memberof NoParameters
     * @static
     * @param {INoParameters} message NoParameters message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NoParameters.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified NoParameters message, length delimited. Does not implicitly {@link NoParameters.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NoParameters
     * @static
     * @param {INoParameters} message NoParameters message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NoParameters.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NoParameters message from the specified reader or buffer.
     * @function decode
     * @memberof NoParameters
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NoParameters} NoParameters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NoParameters.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NoParameters();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NoParameters message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NoParameters
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NoParameters} NoParameters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NoParameters.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NoParameters message.
     * @function verify
     * @memberof NoParameters
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NoParameters.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a NoParameters message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NoParameters
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NoParameters} NoParameters
     */
    NoParameters.fromObject = function fromObject(object) {
        if (object instanceof $root.NoParameters)
            return object;
        return new $root.NoParameters();
    };

    /**
     * Creates a plain object from a NoParameters message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NoParameters
     * @static
     * @param {NoParameters} message NoParameters
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NoParameters.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this NoParameters to JSON.
     * @function toJSON
     * @memberof NoParameters
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NoParameters.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NoParameters;
})();

$root.AudioRuntime = (function() {

    /**
     * Constructs a new AudioRuntime service.
     * @exports AudioRuntime
     * @classdesc Represents an AudioRuntime
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function AudioRuntime(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (AudioRuntime.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AudioRuntime;

    /**
     * Creates new AudioRuntime service using the specified rpc implementation.
     * @function create
     * @memberof AudioRuntime
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {AudioRuntime} RPC service. Useful where requests and/or responses are streamed.
     */
    AudioRuntime.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link AudioRuntime#updateSettings}.
     * @memberof AudioRuntime
     * @typedef UpdateSettingsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {AudioRuntimeStatus} [response] AudioRuntimeStatus
     */

    /**
     * Calls UpdateSettings.
     * @function updateSettings
     * @memberof AudioRuntime
     * @instance
     * @param {ISetSettings} request SetSettings message or plain object
     * @param {AudioRuntime.UpdateSettingsCallback} callback Node-style callback called with the error, if any, and AudioRuntimeStatus
     * @returns {undefined}
     * @variation 1
     */
    AudioRuntime.prototype.updateSettings = function updateSettings(request, callback) {
        return this.rpcCall(updateSettings, $root.SetSettings, $root.AudioRuntimeStatus, request, callback);
    };

    /**
     * Calls UpdateSettings.
     * @function updateSettings
     * @memberof AudioRuntime
     * @instance
     * @param {ISetSettings} request SetSettings message or plain object
     * @returns {Promise<AudioRuntimeStatus>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link AudioRuntime#play}.
     * @memberof AudioRuntime
     * @typedef PlayCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Event} [response] Event
     */

    /**
     * Calls Play.
     * @function play
     * @memberof AudioRuntime
     * @instance
     * @param {INoParameters} request NoParameters message or plain object
     * @param {AudioRuntime.PlayCallback} callback Node-style callback called with the error, if any, and Event
     * @returns {undefined}
     * @variation 1
     */
    AudioRuntime.prototype.play = function play(request, callback) {
        return this.rpcCall(play, $root.NoParameters, $root.Event, request, callback);
    };

    /**
     * Calls Play.
     * @function play
     * @memberof AudioRuntime
     * @instance
     * @param {INoParameters} request NoParameters message or plain object
     * @returns {Promise<Event>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link AudioRuntime#doTerminate}.
     * @memberof AudioRuntime
     * @typedef DoTerminateCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {AudioRuntimeStatus} [response] AudioRuntimeStatus
     */

    /**
     * Calls DoTerminate.
     * @function doTerminate
     * @memberof AudioRuntime
     * @instance
     * @param {ITerminate} request Terminate message or plain object
     * @param {AudioRuntime.DoTerminateCallback} callback Node-style callback called with the error, if any, and AudioRuntimeStatus
     * @returns {undefined}
     * @variation 1
     */
    AudioRuntime.prototype.doTerminate = function doTerminate(request, callback) {
        return this.rpcCall(doTerminate, $root.Terminate, $root.AudioRuntimeStatus, request, callback);
    };

    /**
     * Calls DoTerminate.
     * @function doTerminate
     * @memberof AudioRuntime
     * @instance
     * @param {ITerminate} request Terminate message or plain object
     * @returns {Promise<AudioRuntimeStatus>} Promise
     * @variation 2
     */

    return AudioRuntime;
})();

$root.ChannelData = (function() {

    /**
     * Properties of a ChannelData.
     * @exports IChannelData
     * @interface IChannelData
     * @property {number|null} [index] ChannelData index
     * @property {Uint8Array|null} [data] ChannelData data
     */

    /**
     * Constructs a new ChannelData.
     * @exports ChannelData
     * @classdesc Represents a ChannelData.
     * @implements IChannelData
     * @constructor
     * @param {IChannelData=} [properties] Properties to set
     */
    function ChannelData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChannelData index.
     * @member {number} index
     * @memberof ChannelData
     * @instance
     */
    ChannelData.prototype.index = 0;

    /**
     * ChannelData data.
     * @member {Uint8Array} data
     * @memberof ChannelData
     * @instance
     */
    ChannelData.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new ChannelData instance using the specified properties.
     * @function create
     * @memberof ChannelData
     * @static
     * @param {IChannelData=} [properties] Properties to set
     * @returns {ChannelData} ChannelData instance
     */
    ChannelData.create = function create(properties) {
        return new ChannelData(properties);
    };

    /**
     * Encodes the specified ChannelData message. Does not implicitly {@link ChannelData.verify|verify} messages.
     * @function encode
     * @memberof ChannelData
     * @static
     * @param {IChannelData} message ChannelData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChannelData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && message.hasOwnProperty("index"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified ChannelData message, length delimited. Does not implicitly {@link ChannelData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChannelData
     * @static
     * @param {IChannelData} message ChannelData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChannelData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChannelData message from the specified reader or buffer.
     * @function decode
     * @memberof ChannelData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChannelData} ChannelData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChannelData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChannelData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.index = reader.uint32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChannelData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChannelData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChannelData} ChannelData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChannelData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChannelData message.
     * @function verify
     * @memberof ChannelData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChannelData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a ChannelData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChannelData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChannelData} ChannelData
     */
    ChannelData.fromObject = function fromObject(object) {
        if (object instanceof $root.ChannelData)
            return object;
        var message = new $root.ChannelData();
        if (object.index != null)
            message.index = object.index >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a ChannelData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChannelData
     * @static
     * @param {ChannelData} message ChannelData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChannelData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.index = 0;
            object.data = options.bytes === String ? "" : [];
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this ChannelData to JSON.
     * @function toJSON
     * @memberof ChannelData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChannelData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChannelData;
})();

$root.ExchangeChannels = (function() {

    /**
     * Properties of an ExchangeChannels.
     * @exports IExchangeChannels
     * @interface IExchangeChannels
     * @property {Array.<IChannelData>|null} [channels] ExchangeChannels channels
     * @property {Array.<number>|null} [requestChannels] ExchangeChannels requestChannels
     */

    /**
     * Constructs a new ExchangeChannels.
     * @exports ExchangeChannels
     * @classdesc Represents an ExchangeChannels.
     * @implements IExchangeChannels
     * @constructor
     * @param {IExchangeChannels=} [properties] Properties to set
     */
    function ExchangeChannels(properties) {
        this.channels = [];
        this.requestChannels = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ExchangeChannels channels.
     * @member {Array.<IChannelData>} channels
     * @memberof ExchangeChannels
     * @instance
     */
    ExchangeChannels.prototype.channels = $util.emptyArray;

    /**
     * ExchangeChannels requestChannels.
     * @member {Array.<number>} requestChannels
     * @memberof ExchangeChannels
     * @instance
     */
    ExchangeChannels.prototype.requestChannels = $util.emptyArray;

    /**
     * Creates a new ExchangeChannels instance using the specified properties.
     * @function create
     * @memberof ExchangeChannels
     * @static
     * @param {IExchangeChannels=} [properties] Properties to set
     * @returns {ExchangeChannels} ExchangeChannels instance
     */
    ExchangeChannels.create = function create(properties) {
        return new ExchangeChannels(properties);
    };

    /**
     * Encodes the specified ExchangeChannels message. Does not implicitly {@link ExchangeChannels.verify|verify} messages.
     * @function encode
     * @memberof ExchangeChannels
     * @static
     * @param {IExchangeChannels} message ExchangeChannels message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExchangeChannels.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.channels != null && message.channels.length)
            for (var i = 0; i < message.channels.length; ++i)
                $root.ChannelData.encode(message.channels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.requestChannels != null && message.requestChannels.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.requestChannels.length; ++i)
                writer.uint32(message.requestChannels[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified ExchangeChannels message, length delimited. Does not implicitly {@link ExchangeChannels.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ExchangeChannels
     * @static
     * @param {IExchangeChannels} message ExchangeChannels message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExchangeChannels.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ExchangeChannels message from the specified reader or buffer.
     * @function decode
     * @memberof ExchangeChannels
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ExchangeChannels} ExchangeChannels
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExchangeChannels.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ExchangeChannels();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.channels && message.channels.length))
                    message.channels = [];
                message.channels.push($root.ChannelData.decode(reader, reader.uint32()));
                break;
            case 2:
                if (!(message.requestChannels && message.requestChannels.length))
                    message.requestChannels = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.requestChannels.push(reader.uint32());
                } else
                    message.requestChannels.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ExchangeChannels message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ExchangeChannels
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ExchangeChannels} ExchangeChannels
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExchangeChannels.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ExchangeChannels message.
     * @function verify
     * @memberof ExchangeChannels
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ExchangeChannels.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.channels != null && message.hasOwnProperty("channels")) {
            if (!Array.isArray(message.channels))
                return "channels: array expected";
            for (var i = 0; i < message.channels.length; ++i) {
                var error = $root.ChannelData.verify(message.channels[i]);
                if (error)
                    return "channels." + error;
            }
        }
        if (message.requestChannels != null && message.hasOwnProperty("requestChannels")) {
            if (!Array.isArray(message.requestChannels))
                return "requestChannels: array expected";
            for (var i = 0; i < message.requestChannels.length; ++i)
                if (!$util.isInteger(message.requestChannels[i]))
                    return "requestChannels: integer[] expected";
        }
        return null;
    };

    /**
     * Creates an ExchangeChannels message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ExchangeChannels
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ExchangeChannels} ExchangeChannels
     */
    ExchangeChannels.fromObject = function fromObject(object) {
        if (object instanceof $root.ExchangeChannels)
            return object;
        var message = new $root.ExchangeChannels();
        if (object.channels) {
            if (!Array.isArray(object.channels))
                throw TypeError(".ExchangeChannels.channels: array expected");
            message.channels = [];
            for (var i = 0; i < object.channels.length; ++i) {
                if (typeof object.channels[i] !== "object")
                    throw TypeError(".ExchangeChannels.channels: object expected");
                message.channels[i] = $root.ChannelData.fromObject(object.channels[i]);
            }
        }
        if (object.requestChannels) {
            if (!Array.isArray(object.requestChannels))
                throw TypeError(".ExchangeChannels.requestChannels: array expected");
            message.requestChannels = [];
            for (var i = 0; i < object.requestChannels.length; ++i)
                message.requestChannels[i] = object.requestChannels[i] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from an ExchangeChannels message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ExchangeChannels
     * @static
     * @param {ExchangeChannels} message ExchangeChannels
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ExchangeChannels.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.channels = [];
            object.requestChannels = [];
        }
        if (message.channels && message.channels.length) {
            object.channels = [];
            for (var j = 0; j < message.channels.length; ++j)
                object.channels[j] = $root.ChannelData.toObject(message.channels[j], options);
        }
        if (message.requestChannels && message.requestChannels.length) {
            object.requestChannels = [];
            for (var j = 0; j < message.requestChannels.length; ++j)
                object.requestChannels[j] = message.requestChannels[j];
        }
        return object;
    };

    /**
     * Converts this ExchangeChannels to JSON.
     * @function toJSON
     * @memberof ExchangeChannels
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ExchangeChannels.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ExchangeChannels;
})();

$root.ProvideChannels = (function() {

    /**
     * Properties of a ProvideChannels.
     * @exports IProvideChannels
     * @interface IProvideChannels
     * @property {Array.<IChannelData>|null} [channels] ProvideChannels channels
     */

    /**
     * Constructs a new ProvideChannels.
     * @exports ProvideChannels
     * @classdesc Represents a ProvideChannels.
     * @implements IProvideChannels
     * @constructor
     * @param {IProvideChannels=} [properties] Properties to set
     */
    function ProvideChannels(properties) {
        this.channels = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProvideChannels channels.
     * @member {Array.<IChannelData>} channels
     * @memberof ProvideChannels
     * @instance
     */
    ProvideChannels.prototype.channels = $util.emptyArray;

    /**
     * Creates a new ProvideChannels instance using the specified properties.
     * @function create
     * @memberof ProvideChannels
     * @static
     * @param {IProvideChannels=} [properties] Properties to set
     * @returns {ProvideChannels} ProvideChannels instance
     */
    ProvideChannels.create = function create(properties) {
        return new ProvideChannels(properties);
    };

    /**
     * Encodes the specified ProvideChannels message. Does not implicitly {@link ProvideChannels.verify|verify} messages.
     * @function encode
     * @memberof ProvideChannels
     * @static
     * @param {IProvideChannels} message ProvideChannels message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProvideChannels.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.channels != null && message.channels.length)
            for (var i = 0; i < message.channels.length; ++i)
                $root.ChannelData.encode(message.channels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ProvideChannels message, length delimited. Does not implicitly {@link ProvideChannels.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProvideChannels
     * @static
     * @param {IProvideChannels} message ProvideChannels message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProvideChannels.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProvideChannels message from the specified reader or buffer.
     * @function decode
     * @memberof ProvideChannels
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProvideChannels} ProvideChannels
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProvideChannels.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProvideChannels();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.channels && message.channels.length))
                    message.channels = [];
                message.channels.push($root.ChannelData.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ProvideChannels message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProvideChannels
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProvideChannels} ProvideChannels
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProvideChannels.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProvideChannels message.
     * @function verify
     * @memberof ProvideChannels
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProvideChannels.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.channels != null && message.hasOwnProperty("channels")) {
            if (!Array.isArray(message.channels))
                return "channels: array expected";
            for (var i = 0; i < message.channels.length; ++i) {
                var error = $root.ChannelData.verify(message.channels[i]);
                if (error)
                    return "channels." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ProvideChannels message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProvideChannels
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProvideChannels} ProvideChannels
     */
    ProvideChannels.fromObject = function fromObject(object) {
        if (object instanceof $root.ProvideChannels)
            return object;
        var message = new $root.ProvideChannels();
        if (object.channels) {
            if (!Array.isArray(object.channels))
                throw TypeError(".ProvideChannels.channels: array expected");
            message.channels = [];
            for (var i = 0; i < object.channels.length; ++i) {
                if (typeof object.channels[i] !== "object")
                    throw TypeError(".ProvideChannels.channels: object expected");
                message.channels[i] = $root.ChannelData.fromObject(object.channels[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ProvideChannels message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProvideChannels
     * @static
     * @param {ProvideChannels} message ProvideChannels
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProvideChannels.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.channels = [];
        if (message.channels && message.channels.length) {
            object.channels = [];
            for (var j = 0; j < message.channels.length; ++j)
                object.channels[j] = $root.ChannelData.toObject(message.channels[j], options);
        }
        return object;
    };

    /**
     * Converts this ProvideChannels to JSON.
     * @function toJSON
     * @memberof ProvideChannels
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProvideChannels.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ProvideChannels;
})();

$root.AudioServer = (function() {

    /**
     * Constructs a new AudioServer service.
     * @exports AudioServer
     * @classdesc Represents an AudioServer
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function AudioServer(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (AudioServer.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AudioServer;

    /**
     * Creates new AudioServer service using the specified rpc implementation.
     * @function create
     * @memberof AudioServer
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {AudioServer} RPC service. Useful where requests and/or responses are streamed.
     */
    AudioServer.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link AudioServer#exchange}.
     * @memberof AudioServer
     * @typedef exchangeCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ProvideChannels} [response] ProvideChannels
     */

    /**
     * Calls exchange.
     * @function exchange
     * @memberof AudioServer
     * @instance
     * @param {IExchangeChannels} request ExchangeChannels message or plain object
     * @param {AudioServer.exchangeCallback} callback Node-style callback called with the error, if any, and ProvideChannels
     * @returns {undefined}
     * @variation 1
     */
    AudioServer.prototype.exchange = function exchange(request, callback) {
        return this.rpcCall(exchange, $root.ExchangeChannels, $root.ProvideChannels, request, callback);
    };

    /**
     * Calls exchange.
     * @function exchange
     * @memberof AudioServer
     * @instance
     * @param {IExchangeChannels} request ExchangeChannels message or plain object
     * @returns {Promise<ProvideChannels>} Promise
     * @variation 2
     */

    return AudioServer;
})();

$root.PublicRequest = (function() {

    /**
     * Properties of a PublicRequest.
     * @exports IPublicRequest
     * @interface IPublicRequest
     * @property {string|null} [requestId] PublicRequest requestId
     * @property {IPublicPlay|null} [play] PublicRequest play
     * @property {IPublicStop|null} [stop] PublicRequest stop
     * @property {ISetSettings|null} [setSettings] PublicRequest setSettings
     * @property {IPublicDownload|null} [download] PublicRequest download
     */

    /**
     * Constructs a new PublicRequest.
     * @exports PublicRequest
     * @classdesc Represents a PublicRequest.
     * @implements IPublicRequest
     * @constructor
     * @param {IPublicRequest=} [properties] Properties to set
     */
    function PublicRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PublicRequest requestId.
     * @member {string} requestId
     * @memberof PublicRequest
     * @instance
     */
    PublicRequest.prototype.requestId = "";

    /**
     * PublicRequest play.
     * @member {IPublicPlay|null|undefined} play
     * @memberof PublicRequest
     * @instance
     */
    PublicRequest.prototype.play = null;

    /**
     * PublicRequest stop.
     * @member {IPublicStop|null|undefined} stop
     * @memberof PublicRequest
     * @instance
     */
    PublicRequest.prototype.stop = null;

    /**
     * PublicRequest setSettings.
     * @member {ISetSettings|null|undefined} setSettings
     * @memberof PublicRequest
     * @instance
     */
    PublicRequest.prototype.setSettings = null;

    /**
     * PublicRequest download.
     * @member {IPublicDownload|null|undefined} download
     * @memberof PublicRequest
     * @instance
     */
    PublicRequest.prototype.download = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * PublicRequest message.
     * @member {"play"|"stop"|"setSettings"|"download"|undefined} message
     * @memberof PublicRequest
     * @instance
     */
    Object.defineProperty(PublicRequest.prototype, "message", {
        get: $util.oneOfGetter($oneOfFields = ["play", "stop", "setSettings", "download"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new PublicRequest instance using the specified properties.
     * @function create
     * @memberof PublicRequest
     * @static
     * @param {IPublicRequest=} [properties] Properties to set
     * @returns {PublicRequest} PublicRequest instance
     */
    PublicRequest.create = function create(properties) {
        return new PublicRequest(properties);
    };

    /**
     * Encodes the specified PublicRequest message. Does not implicitly {@link PublicRequest.verify|verify} messages.
     * @function encode
     * @memberof PublicRequest
     * @static
     * @param {IPublicRequest} message PublicRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.play != null && message.hasOwnProperty("play"))
            $root.PublicPlay.encode(message.play, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.stop != null && message.hasOwnProperty("stop"))
            $root.PublicStop.encode(message.stop, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.setSettings != null && message.hasOwnProperty("setSettings"))
            $root.SetSettings.encode(message.setSettings, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.download != null && message.hasOwnProperty("download"))
            $root.PublicDownload.encode(message.download, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PublicRequest message, length delimited. Does not implicitly {@link PublicRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PublicRequest
     * @static
     * @param {IPublicRequest} message PublicRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PublicRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PublicRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PublicRequest} PublicRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublicRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.requestId = reader.string();
                break;
            case 2:
                message.play = $root.PublicPlay.decode(reader, reader.uint32());
                break;
            case 3:
                message.stop = $root.PublicStop.decode(reader, reader.uint32());
                break;
            case 4:
                message.setSettings = $root.SetSettings.decode(reader, reader.uint32());
                break;
            case 5:
                message.download = $root.PublicDownload.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PublicRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PublicRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PublicRequest} PublicRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PublicRequest message.
     * @function verify
     * @memberof PublicRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PublicRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isString(message.requestId))
                return "requestId: string expected";
        if (message.play != null && message.hasOwnProperty("play")) {
            properties.message = 1;
            {
                var error = $root.PublicPlay.verify(message.play);
                if (error)
                    return "play." + error;
            }
        }
        if (message.stop != null && message.hasOwnProperty("stop")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.PublicStop.verify(message.stop);
                if (error)
                    return "stop." + error;
            }
        }
        if (message.setSettings != null && message.hasOwnProperty("setSettings")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.SetSettings.verify(message.setSettings);
                if (error)
                    return "setSettings." + error;
            }
        }
        if (message.download != null && message.hasOwnProperty("download")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.PublicDownload.verify(message.download);
                if (error)
                    return "download." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PublicRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PublicRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PublicRequest} PublicRequest
     */
    PublicRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PublicRequest)
            return object;
        var message = new $root.PublicRequest();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.play != null) {
            if (typeof object.play !== "object")
                throw TypeError(".PublicRequest.play: object expected");
            message.play = $root.PublicPlay.fromObject(object.play);
        }
        if (object.stop != null) {
            if (typeof object.stop !== "object")
                throw TypeError(".PublicRequest.stop: object expected");
            message.stop = $root.PublicStop.fromObject(object.stop);
        }
        if (object.setSettings != null) {
            if (typeof object.setSettings !== "object")
                throw TypeError(".PublicRequest.setSettings: object expected");
            message.setSettings = $root.SetSettings.fromObject(object.setSettings);
        }
        if (object.download != null) {
            if (typeof object.download !== "object")
                throw TypeError(".PublicRequest.download: object expected");
            message.download = $root.PublicDownload.fromObject(object.download);
        }
        return message;
    };

    /**
     * Creates a plain object from a PublicRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PublicRequest
     * @static
     * @param {PublicRequest} message PublicRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PublicRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.play != null && message.hasOwnProperty("play")) {
            object.play = $root.PublicPlay.toObject(message.play, options);
            if (options.oneofs)
                object.message = "play";
        }
        if (message.stop != null && message.hasOwnProperty("stop")) {
            object.stop = $root.PublicStop.toObject(message.stop, options);
            if (options.oneofs)
                object.message = "stop";
        }
        if (message.setSettings != null && message.hasOwnProperty("setSettings")) {
            object.setSettings = $root.SetSettings.toObject(message.setSettings, options);
            if (options.oneofs)
                object.message = "setSettings";
        }
        if (message.download != null && message.hasOwnProperty("download")) {
            object.download = $root.PublicDownload.toObject(message.download, options);
            if (options.oneofs)
                object.message = "download";
        }
        return object;
    };

    /**
     * Converts this PublicRequest to JSON.
     * @function toJSON
     * @memberof PublicRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PublicRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PublicRequest;
})();

$root.PublicStop = (function() {

    /**
     * Properties of a PublicStop.
     * @exports IPublicStop
     * @interface IPublicStop
     */

    /**
     * Constructs a new PublicStop.
     * @exports PublicStop
     * @classdesc Represents a PublicStop.
     * @implements IPublicStop
     * @constructor
     * @param {IPublicStop=} [properties] Properties to set
     */
    function PublicStop(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new PublicStop instance using the specified properties.
     * @function create
     * @memberof PublicStop
     * @static
     * @param {IPublicStop=} [properties] Properties to set
     * @returns {PublicStop} PublicStop instance
     */
    PublicStop.create = function create(properties) {
        return new PublicStop(properties);
    };

    /**
     * Encodes the specified PublicStop message. Does not implicitly {@link PublicStop.verify|verify} messages.
     * @function encode
     * @memberof PublicStop
     * @static
     * @param {IPublicStop} message PublicStop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicStop.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified PublicStop message, length delimited. Does not implicitly {@link PublicStop.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PublicStop
     * @static
     * @param {IPublicStop} message PublicStop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicStop.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PublicStop message from the specified reader or buffer.
     * @function decode
     * @memberof PublicStop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PublicStop} PublicStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicStop.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublicStop();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PublicStop message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PublicStop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PublicStop} PublicStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicStop.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PublicStop message.
     * @function verify
     * @memberof PublicStop
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PublicStop.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a PublicStop message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PublicStop
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PublicStop} PublicStop
     */
    PublicStop.fromObject = function fromObject(object) {
        if (object instanceof $root.PublicStop)
            return object;
        return new $root.PublicStop();
    };

    /**
     * Creates a plain object from a PublicStop message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PublicStop
     * @static
     * @param {PublicStop} message PublicStop
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PublicStop.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this PublicStop to JSON.
     * @function toJSON
     * @memberof PublicStop
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PublicStop.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PublicStop;
})();

$root.PublicPlay = (function() {

    /**
     * Properties of a PublicPlay.
     * @exports IPublicPlay
     * @interface IPublicPlay
     * @property {Object.<string,IPublicInput>|null} [inputs] PublicPlay inputs
     * @property {string|null} [outputCodingPreset] PublicPlay outputCodingPreset
     * @property {ISetSettings|null} [settings] PublicPlay settings
     * @property {number|null} [sampleRate] PublicPlay sampleRate
     * @property {number|null} [latencyMultiplier] PublicPlay latencyMultiplier
     */

    /**
     * Constructs a new PublicPlay.
     * @exports PublicPlay
     * @classdesc Represents a PublicPlay.
     * @implements IPublicPlay
     * @constructor
     * @param {IPublicPlay=} [properties] Properties to set
     */
    function PublicPlay(properties) {
        this.inputs = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PublicPlay inputs.
     * @member {Object.<string,IPublicInput>} inputs
     * @memberof PublicPlay
     * @instance
     */
    PublicPlay.prototype.inputs = $util.emptyObject;

    /**
     * PublicPlay outputCodingPreset.
     * @member {string} outputCodingPreset
     * @memberof PublicPlay
     * @instance
     */
    PublicPlay.prototype.outputCodingPreset = "";

    /**
     * PublicPlay settings.
     * @member {ISetSettings|null|undefined} settings
     * @memberof PublicPlay
     * @instance
     */
    PublicPlay.prototype.settings = null;

    /**
     * PublicPlay sampleRate.
     * @member {number} sampleRate
     * @memberof PublicPlay
     * @instance
     */
    PublicPlay.prototype.sampleRate = 0;

    /**
     * PublicPlay latencyMultiplier.
     * @member {number} latencyMultiplier
     * @memberof PublicPlay
     * @instance
     */
    PublicPlay.prototype.latencyMultiplier = 0;

    /**
     * Creates a new PublicPlay instance using the specified properties.
     * @function create
     * @memberof PublicPlay
     * @static
     * @param {IPublicPlay=} [properties] Properties to set
     * @returns {PublicPlay} PublicPlay instance
     */
    PublicPlay.create = function create(properties) {
        return new PublicPlay(properties);
    };

    /**
     * Encodes the specified PublicPlay message. Does not implicitly {@link PublicPlay.verify|verify} messages.
     * @function encode
     * @memberof PublicPlay
     * @static
     * @param {IPublicPlay} message PublicPlay message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicPlay.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.inputs != null && message.hasOwnProperty("inputs"))
            for (var keys = Object.keys(message.inputs), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.PublicInput.encode(message.inputs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.outputCodingPreset != null && message.hasOwnProperty("outputCodingPreset"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.outputCodingPreset);
        if (message.settings != null && message.hasOwnProperty("settings"))
            $root.SetSettings.encode(message.settings, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.sampleRate);
        if (message.latencyMultiplier != null && message.hasOwnProperty("latencyMultiplier"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.latencyMultiplier);
        return writer;
    };

    /**
     * Encodes the specified PublicPlay message, length delimited. Does not implicitly {@link PublicPlay.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PublicPlay
     * @static
     * @param {IPublicPlay} message PublicPlay message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicPlay.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PublicPlay message from the specified reader or buffer.
     * @function decode
     * @memberof PublicPlay
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PublicPlay} PublicPlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicPlay.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublicPlay(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                reader.skip().pos++;
                if (message.inputs === $util.emptyObject)
                    message.inputs = {};
                key = reader.string();
                reader.pos++;
                message.inputs[key] = $root.PublicInput.decode(reader, reader.uint32());
                break;
            case 2:
                message.outputCodingPreset = reader.string();
                break;
            case 3:
                message.settings = $root.SetSettings.decode(reader, reader.uint32());
                break;
            case 4:
                message.sampleRate = reader.uint32();
                break;
            case 5:
                message.latencyMultiplier = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PublicPlay message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PublicPlay
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PublicPlay} PublicPlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicPlay.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PublicPlay message.
     * @function verify
     * @memberof PublicPlay
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PublicPlay.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.inputs != null && message.hasOwnProperty("inputs")) {
            if (!$util.isObject(message.inputs))
                return "inputs: object expected";
            var key = Object.keys(message.inputs);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.PublicInput.verify(message.inputs[key[i]]);
                if (error)
                    return "inputs." + error;
            }
        }
        if (message.outputCodingPreset != null && message.hasOwnProperty("outputCodingPreset"))
            if (!$util.isString(message.outputCodingPreset))
                return "outputCodingPreset: string expected";
        if (message.settings != null && message.hasOwnProperty("settings")) {
            var error = $root.SetSettings.verify(message.settings);
            if (error)
                return "settings." + error;
        }
        if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
            if (!$util.isInteger(message.sampleRate))
                return "sampleRate: integer expected";
        if (message.latencyMultiplier != null && message.hasOwnProperty("latencyMultiplier"))
            if (!$util.isInteger(message.latencyMultiplier))
                return "latencyMultiplier: integer expected";
        return null;
    };

    /**
     * Creates a PublicPlay message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PublicPlay
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PublicPlay} PublicPlay
     */
    PublicPlay.fromObject = function fromObject(object) {
        if (object instanceof $root.PublicPlay)
            return object;
        var message = new $root.PublicPlay();
        if (object.inputs) {
            if (typeof object.inputs !== "object")
                throw TypeError(".PublicPlay.inputs: object expected");
            message.inputs = {};
            for (var keys = Object.keys(object.inputs), i = 0; i < keys.length; ++i) {
                if (typeof object.inputs[keys[i]] !== "object")
                    throw TypeError(".PublicPlay.inputs: object expected");
                message.inputs[keys[i]] = $root.PublicInput.fromObject(object.inputs[keys[i]]);
            }
        }
        if (object.outputCodingPreset != null)
            message.outputCodingPreset = String(object.outputCodingPreset);
        if (object.settings != null) {
            if (typeof object.settings !== "object")
                throw TypeError(".PublicPlay.settings: object expected");
            message.settings = $root.SetSettings.fromObject(object.settings);
        }
        if (object.sampleRate != null)
            message.sampleRate = object.sampleRate >>> 0;
        if (object.latencyMultiplier != null)
            message.latencyMultiplier = object.latencyMultiplier >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a PublicPlay message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PublicPlay
     * @static
     * @param {PublicPlay} message PublicPlay
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PublicPlay.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.inputs = {};
        if (options.defaults) {
            object.outputCodingPreset = "";
            object.settings = null;
            object.sampleRate = 0;
            object.latencyMultiplier = 0;
        }
        var keys2;
        if (message.inputs && (keys2 = Object.keys(message.inputs)).length) {
            object.inputs = {};
            for (var j = 0; j < keys2.length; ++j)
                object.inputs[keys2[j]] = $root.PublicInput.toObject(message.inputs[keys2[j]], options);
        }
        if (message.outputCodingPreset != null && message.hasOwnProperty("outputCodingPreset"))
            object.outputCodingPreset = message.outputCodingPreset;
        if (message.settings != null && message.hasOwnProperty("settings"))
            object.settings = $root.SetSettings.toObject(message.settings, options);
        if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
            object.sampleRate = message.sampleRate;
        if (message.latencyMultiplier != null && message.hasOwnProperty("latencyMultiplier"))
            object.latencyMultiplier = message.latencyMultiplier;
        return object;
    };

    /**
     * Converts this PublicPlay to JSON.
     * @function toJSON
     * @memberof PublicPlay
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PublicPlay.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PublicPlay;
})();

$root.PublicInput = (function() {

    /**
     * Properties of a PublicInput.
     * @exports IPublicInput
     * @interface IPublicInput
     * @property {string|null} [mediaId] Media ID
     * @property {number|null} [startPos] Where to start playing?
     * @property {number|null} [endPos] Where to end playing?
     */

    /**
     * Constructs a new PublicInput.
     * @exports PublicInput
     * @classdesc Represents a PublicInput.
     * @implements IPublicInput
     * @constructor
     * @param {IPublicInput=} [properties] Properties to set
     */
    function PublicInput(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Media ID
     * @member {string} mediaId
     * @memberof PublicInput
     * @instance
     */
    PublicInput.prototype.mediaId = "";

    /**
     * Where to start playing?
     * @member {number} startPos
     * @memberof PublicInput
     * @instance
     */
    PublicInput.prototype.startPos = 0;

    /**
     * Where to end playing?
     * @member {number} endPos
     * @memberof PublicInput
     * @instance
     */
    PublicInput.prototype.endPos = 0;

    /**
     * Creates a new PublicInput instance using the specified properties.
     * @function create
     * @memberof PublicInput
     * @static
     * @param {IPublicInput=} [properties] Properties to set
     * @returns {PublicInput} PublicInput instance
     */
    PublicInput.create = function create(properties) {
        return new PublicInput(properties);
    };

    /**
     * Encodes the specified PublicInput message. Does not implicitly {@link PublicInput.verify|verify} messages.
     * @function encode
     * @memberof PublicInput
     * @static
     * @param {IPublicInput} message PublicInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mediaId != null && message.hasOwnProperty("mediaId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.mediaId);
        if (message.startPos != null && message.hasOwnProperty("startPos"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.startPos);
        if (message.endPos != null && message.hasOwnProperty("endPos"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.endPos);
        return writer;
    };

    /**
     * Encodes the specified PublicInput message, length delimited. Does not implicitly {@link PublicInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PublicInput
     * @static
     * @param {IPublicInput} message PublicInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PublicInput message from the specified reader or buffer.
     * @function decode
     * @memberof PublicInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PublicInput} PublicInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublicInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mediaId = reader.string();
                break;
            case 2:
                message.startPos = reader.double();
                break;
            case 3:
                message.endPos = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PublicInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PublicInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PublicInput} PublicInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PublicInput message.
     * @function verify
     * @memberof PublicInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PublicInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mediaId != null && message.hasOwnProperty("mediaId"))
            if (!$util.isString(message.mediaId))
                return "mediaId: string expected";
        if (message.startPos != null && message.hasOwnProperty("startPos"))
            if (typeof message.startPos !== "number")
                return "startPos: number expected";
        if (message.endPos != null && message.hasOwnProperty("endPos"))
            if (typeof message.endPos !== "number")
                return "endPos: number expected";
        return null;
    };

    /**
     * Creates a PublicInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PublicInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PublicInput} PublicInput
     */
    PublicInput.fromObject = function fromObject(object) {
        if (object instanceof $root.PublicInput)
            return object;
        var message = new $root.PublicInput();
        if (object.mediaId != null)
            message.mediaId = String(object.mediaId);
        if (object.startPos != null)
            message.startPos = Number(object.startPos);
        if (object.endPos != null)
            message.endPos = Number(object.endPos);
        return message;
    };

    /**
     * Creates a plain object from a PublicInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PublicInput
     * @static
     * @param {PublicInput} message PublicInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PublicInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mediaId = "";
            object.startPos = 0;
            object.endPos = 0;
        }
        if (message.mediaId != null && message.hasOwnProperty("mediaId"))
            object.mediaId = message.mediaId;
        if (message.startPos != null && message.hasOwnProperty("startPos"))
            object.startPos = options.json && !isFinite(message.startPos) ? String(message.startPos) : message.startPos;
        if (message.endPos != null && message.hasOwnProperty("endPos"))
            object.endPos = options.json && !isFinite(message.endPos) ? String(message.endPos) : message.endPos;
        return object;
    };

    /**
     * Converts this PublicInput to JSON.
     * @function toJSON
     * @memberof PublicInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PublicInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PublicInput;
})();

$root.PublicDownload = (function() {

    /**
     * Properties of a PublicDownload.
     * @exports IPublicDownload
     * @interface IPublicDownload
     * @property {Object.<string,IPublicInput>|null} [inputs] PublicDownload inputs
     * @property {string|null} [downloadCodingPreset] PublicDownload downloadCodingPreset
     * @property {ISetSettings|null} [settings] PublicDownload settings
     */

    /**
     * Constructs a new PublicDownload.
     * @exports PublicDownload
     * @classdesc Represents a PublicDownload.
     * @implements IPublicDownload
     * @constructor
     * @param {IPublicDownload=} [properties] Properties to set
     */
    function PublicDownload(properties) {
        this.inputs = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PublicDownload inputs.
     * @member {Object.<string,IPublicInput>} inputs
     * @memberof PublicDownload
     * @instance
     */
    PublicDownload.prototype.inputs = $util.emptyObject;

    /**
     * PublicDownload downloadCodingPreset.
     * @member {string} downloadCodingPreset
     * @memberof PublicDownload
     * @instance
     */
    PublicDownload.prototype.downloadCodingPreset = "";

    /**
     * PublicDownload settings.
     * @member {ISetSettings|null|undefined} settings
     * @memberof PublicDownload
     * @instance
     */
    PublicDownload.prototype.settings = null;

    /**
     * Creates a new PublicDownload instance using the specified properties.
     * @function create
     * @memberof PublicDownload
     * @static
     * @param {IPublicDownload=} [properties] Properties to set
     * @returns {PublicDownload} PublicDownload instance
     */
    PublicDownload.create = function create(properties) {
        return new PublicDownload(properties);
    };

    /**
     * Encodes the specified PublicDownload message. Does not implicitly {@link PublicDownload.verify|verify} messages.
     * @function encode
     * @memberof PublicDownload
     * @static
     * @param {IPublicDownload} message PublicDownload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicDownload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.inputs != null && message.hasOwnProperty("inputs"))
            for (var keys = Object.keys(message.inputs), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.PublicInput.encode(message.inputs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.downloadCodingPreset != null && message.hasOwnProperty("downloadCodingPreset"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.downloadCodingPreset);
        if (message.settings != null && message.hasOwnProperty("settings"))
            $root.SetSettings.encode(message.settings, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PublicDownload message, length delimited. Does not implicitly {@link PublicDownload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PublicDownload
     * @static
     * @param {IPublicDownload} message PublicDownload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicDownload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PublicDownload message from the specified reader or buffer.
     * @function decode
     * @memberof PublicDownload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PublicDownload} PublicDownload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicDownload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublicDownload(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                reader.skip().pos++;
                if (message.inputs === $util.emptyObject)
                    message.inputs = {};
                key = reader.string();
                reader.pos++;
                message.inputs[key] = $root.PublicInput.decode(reader, reader.uint32());
                break;
            case 2:
                message.downloadCodingPreset = reader.string();
                break;
            case 3:
                message.settings = $root.SetSettings.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PublicDownload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PublicDownload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PublicDownload} PublicDownload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicDownload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PublicDownload message.
     * @function verify
     * @memberof PublicDownload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PublicDownload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.inputs != null && message.hasOwnProperty("inputs")) {
            if (!$util.isObject(message.inputs))
                return "inputs: object expected";
            var key = Object.keys(message.inputs);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.PublicInput.verify(message.inputs[key[i]]);
                if (error)
                    return "inputs." + error;
            }
        }
        if (message.downloadCodingPreset != null && message.hasOwnProperty("downloadCodingPreset"))
            if (!$util.isString(message.downloadCodingPreset))
                return "downloadCodingPreset: string expected";
        if (message.settings != null && message.hasOwnProperty("settings")) {
            var error = $root.SetSettings.verify(message.settings);
            if (error)
                return "settings." + error;
        }
        return null;
    };

    /**
     * Creates a PublicDownload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PublicDownload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PublicDownload} PublicDownload
     */
    PublicDownload.fromObject = function fromObject(object) {
        if (object instanceof $root.PublicDownload)
            return object;
        var message = new $root.PublicDownload();
        if (object.inputs) {
            if (typeof object.inputs !== "object")
                throw TypeError(".PublicDownload.inputs: object expected");
            message.inputs = {};
            for (var keys = Object.keys(object.inputs), i = 0; i < keys.length; ++i) {
                if (typeof object.inputs[keys[i]] !== "object")
                    throw TypeError(".PublicDownload.inputs: object expected");
                message.inputs[keys[i]] = $root.PublicInput.fromObject(object.inputs[keys[i]]);
            }
        }
        if (object.downloadCodingPreset != null)
            message.downloadCodingPreset = String(object.downloadCodingPreset);
        if (object.settings != null) {
            if (typeof object.settings !== "object")
                throw TypeError(".PublicDownload.settings: object expected");
            message.settings = $root.SetSettings.fromObject(object.settings);
        }
        return message;
    };

    /**
     * Creates a plain object from a PublicDownload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PublicDownload
     * @static
     * @param {PublicDownload} message PublicDownload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PublicDownload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.inputs = {};
        if (options.defaults) {
            object.downloadCodingPreset = "";
            object.settings = null;
        }
        var keys2;
        if (message.inputs && (keys2 = Object.keys(message.inputs)).length) {
            object.inputs = {};
            for (var j = 0; j < keys2.length; ++j)
                object.inputs[keys2[j]] = $root.PublicInput.toObject(message.inputs[keys2[j]], options);
        }
        if (message.downloadCodingPreset != null && message.hasOwnProperty("downloadCodingPreset"))
            object.downloadCodingPreset = message.downloadCodingPreset;
        if (message.settings != null && message.hasOwnProperty("settings"))
            object.settings = $root.SetSettings.toObject(message.settings, options);
        return object;
    };

    /**
     * Converts this PublicDownload to JSON.
     * @function toJSON
     * @memberof PublicDownload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PublicDownload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PublicDownload;
})();

$root.PublicFrame = (function() {

    /**
     * Properties of a PublicFrame.
     * @exports IPublicFrame
     * @interface IPublicFrame
     * @property {IEvent|null} [event] PublicFrame event
     * @property {IResponse|null} [response] PublicFrame response
     */

    /**
     * Constructs a new PublicFrame.
     * @exports PublicFrame
     * @classdesc Represents a PublicFrame.
     * @implements IPublicFrame
     * @constructor
     * @param {IPublicFrame=} [properties] Properties to set
     */
    function PublicFrame(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PublicFrame event.
     * @member {IEvent|null|undefined} event
     * @memberof PublicFrame
     * @instance
     */
    PublicFrame.prototype.event = null;

    /**
     * PublicFrame response.
     * @member {IResponse|null|undefined} response
     * @memberof PublicFrame
     * @instance
     */
    PublicFrame.prototype.response = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * PublicFrame frame.
     * @member {"event"|"response"|undefined} frame
     * @memberof PublicFrame
     * @instance
     */
    Object.defineProperty(PublicFrame.prototype, "frame", {
        get: $util.oneOfGetter($oneOfFields = ["event", "response"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new PublicFrame instance using the specified properties.
     * @function create
     * @memberof PublicFrame
     * @static
     * @param {IPublicFrame=} [properties] Properties to set
     * @returns {PublicFrame} PublicFrame instance
     */
    PublicFrame.create = function create(properties) {
        return new PublicFrame(properties);
    };

    /**
     * Encodes the specified PublicFrame message. Does not implicitly {@link PublicFrame.verify|verify} messages.
     * @function encode
     * @memberof PublicFrame
     * @static
     * @param {IPublicFrame} message PublicFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicFrame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.event != null && message.hasOwnProperty("event"))
            $root.Event.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.response != null && message.hasOwnProperty("response"))
            $root.Response.encode(message.response, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PublicFrame message, length delimited. Does not implicitly {@link PublicFrame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PublicFrame
     * @static
     * @param {IPublicFrame} message PublicFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicFrame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PublicFrame message from the specified reader or buffer.
     * @function decode
     * @memberof PublicFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PublicFrame} PublicFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicFrame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublicFrame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.event = $root.Event.decode(reader, reader.uint32());
                break;
            case 2:
                message.response = $root.Response.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PublicFrame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PublicFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PublicFrame} PublicFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicFrame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PublicFrame message.
     * @function verify
     * @memberof PublicFrame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PublicFrame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.event != null && message.hasOwnProperty("event")) {
            properties.frame = 1;
            {
                var error = $root.Event.verify(message.event);
                if (error)
                    return "event." + error;
            }
        }
        if (message.response != null && message.hasOwnProperty("response")) {
            if (properties.frame === 1)
                return "frame: multiple values";
            properties.frame = 1;
            {
                var error = $root.Response.verify(message.response);
                if (error)
                    return "response." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PublicFrame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PublicFrame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PublicFrame} PublicFrame
     */
    PublicFrame.fromObject = function fromObject(object) {
        if (object instanceof $root.PublicFrame)
            return object;
        var message = new $root.PublicFrame();
        if (object.event != null) {
            if (typeof object.event !== "object")
                throw TypeError(".PublicFrame.event: object expected");
            message.event = $root.Event.fromObject(object.event);
        }
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".PublicFrame.response: object expected");
            message.response = $root.Response.fromObject(object.response);
        }
        return message;
    };

    /**
     * Creates a plain object from a PublicFrame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PublicFrame
     * @static
     * @param {PublicFrame} message PublicFrame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PublicFrame.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.event != null && message.hasOwnProperty("event")) {
            object.event = $root.Event.toObject(message.event, options);
            if (options.oneofs)
                object.frame = "event";
        }
        if (message.response != null && message.hasOwnProperty("response")) {
            object.response = $root.Response.toObject(message.response, options);
            if (options.oneofs)
                object.frame = "response";
        }
        return object;
    };

    /**
     * Converts this PublicFrame to JSON.
     * @function toJSON
     * @memberof PublicFrame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PublicFrame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PublicFrame;
})();

module.exports = $root;
