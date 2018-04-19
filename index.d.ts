import * as $protobuf from "protobufjs";

/** Properties of an OutputCoding. */
export interface IOutputCoding {

    /** The mux container used. For example "wav", "mp4" or "ogg" or "webm" or "raw" */
    container?: (string|null);

    /** The codec used. For example "pcm_s24le" or "flac" or "opus" */
    codec?: (string|null);

    /**
     * The target sample rate that the engine should write to the result.
     * Sample rate conversion will occur if the engine is running a different
     * sample than this setting. For example 44100 vs. 192000
     */
    targetSampleRate?: (number|null);

    /** target bitrate when this is important */
    targetBitRate?: (number|null);

    /** how many packets per fragment (0 means do not fragmentize) */
    packetsPerFragment?: (number|null);

    /** how many samples per packet (0 means deduce automatically for codec) */
    samplesPerPacket?: (number|null);

    /** sample format (absent means use default) */
    sampleFormat?: (string|null);

    /** number of output channels (0 means use default as deduced by the graph) */
    numChannels?: (number|null);
}

/**
 * Sent to the engine by the controller. The output coding of the resulting
 * stream is set as specified here.
 */
export class OutputCoding implements IOutputCoding {

    /**
     * Constructs a new OutputCoding.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOutputCoding);

    /** The mux container used. For example "wav", "mp4" or "ogg" or "webm" or "raw" */
    public container: string;

    /** The codec used. For example "pcm_s24le" or "flac" or "opus" */
    public codec: string;

    /**
     * The target sample rate that the engine should write to the result.
     * Sample rate conversion will occur if the engine is running a different
     * sample than this setting. For example 44100 vs. 192000
     */
    public targetSampleRate: number;

    /** target bitrate when this is important */
    public targetBitRate: number;

    /** how many packets per fragment (0 means do not fragmentize) */
    public packetsPerFragment: number;

    /** how many samples per packet (0 means deduce automatically for codec) */
    public samplesPerPacket: number;

    /** sample format (absent means use default) */
    public sampleFormat: string;

    /** number of output channels (0 means use default as deduced by the graph) */
    public numChannels: number;

    /**
     * Creates a new OutputCoding instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OutputCoding instance
     */
    public static create(properties?: IOutputCoding): OutputCoding;

    /**
     * Encodes the specified OutputCoding message. Does not implicitly {@link OutputCoding.verify|verify} messages.
     * @param message OutputCoding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOutputCoding, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OutputCoding message, length delimited. Does not implicitly {@link OutputCoding.verify|verify} messages.
     * @param message OutputCoding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOutputCoding, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OutputCoding message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OutputCoding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OutputCoding;

    /**
     * Decodes an OutputCoding message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OutputCoding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OutputCoding;

    /**
     * Verifies an OutputCoding message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OutputCoding message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OutputCoding
     */
    public static fromObject(object: { [k: string]: any }): OutputCoding;

    /**
     * Creates a plain object from an OutputCoding message. Also converts values to other types if specified.
     * @param message OutputCoding
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OutputCoding, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OutputCoding to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an InsertSpec. */
export interface IInsertSpec {

    /** name of the device which we will be using to perform our insert */
    endpoint?: (string|null);

    /** array of input channel indices to be used as the insert */
    inputChannels?: (number[]|null);

    /** array of output channel indices to be used as the insert */
    outputChannels?: (number[]|null);

    /**
     * Additional latency exhibited by the file. For example, by a tape machine.
     * Expressed in **ENGINE SAMPLE RATE SAMPLES**
     */
    additionalLatency?: (number|null);

    /** When true, support dry/wet mixing */
    enableDryWet?: (boolean|null);

    /** When true, enable FFT analysis */
    enableFFT?: (boolean|null);

    /** Sample rate of the device stream */
    sampleRate?: (number|null);

    /** Buffer size of the device stream */
    bufferSize?: (number|null);
}

/** Specification of an insert point processor. */
export class InsertSpec implements IInsertSpec {

    /**
     * Constructs a new InsertSpec.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInsertSpec);

    /** name of the device which we will be using to perform our insert */
    public endpoint: string;

    /** array of input channel indices to be used as the insert */
    public inputChannels: number[];

    /** array of output channel indices to be used as the insert */
    public outputChannels: number[];

    /**
     * Additional latency exhibited by the file. For example, by a tape machine.
     * Expressed in **ENGINE SAMPLE RATE SAMPLES**
     */
    public additionalLatency: number;

    /** When true, support dry/wet mixing */
    public enableDryWet: boolean;

    /** When true, enable FFT analysis */
    public enableFFT: boolean;

    /** Sample rate of the device stream */
    public sampleRate: number;

    /** Buffer size of the device stream */
    public bufferSize: number;

    /**
     * Creates a new InsertSpec instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InsertSpec instance
     */
    public static create(properties?: IInsertSpec): InsertSpec;

    /**
     * Encodes the specified InsertSpec message. Does not implicitly {@link InsertSpec.verify|verify} messages.
     * @param message InsertSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInsertSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InsertSpec message, length delimited. Does not implicitly {@link InsertSpec.verify|verify} messages.
     * @param message InsertSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInsertSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InsertSpec message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InsertSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InsertSpec;

    /**
     * Decodes an InsertSpec message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InsertSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InsertSpec;

    /**
     * Verifies an InsertSpec message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InsertSpec message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InsertSpec
     */
    public static fromObject(object: { [k: string]: any }): InsertSpec;

    /**
     * Creates a plain object from an InsertSpec message. Also converts values to other types if specified.
     * @param message InsertSpec
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InsertSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InsertSpec to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PluginSpec. */
export interface IPluginSpec {

    /**
     * The identifier of the plugin. For example
     * "AudioUnit:Effects/aufx,LdMx,Mndt"
     */
    plugin?: (string|null);

    /**
     * Additional latency exhibited by the plugin, if it is reported incorrectly.
     * May be negative. Expressed in **ENGINE SAMPLE RATE SAMPLES**
     */
    additionalLatency?: (number|null);
}

/** Specification of a plugin processor */
export class PluginSpec implements IPluginSpec {

    /**
     * Constructs a new PluginSpec.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPluginSpec);

    /**
     * The identifier of the plugin. For example
     * "AudioUnit:Effects/aufx,LdMx,Mndt"
     */
    public plugin: string;

    /**
     * Additional latency exhibited by the plugin, if it is reported incorrectly.
     * May be negative. Expressed in **ENGINE SAMPLE RATE SAMPLES**
     */
    public additionalLatency: number;

    /**
     * Creates a new PluginSpec instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PluginSpec instance
     */
    public static create(properties?: IPluginSpec): PluginSpec;

    /**
     * Encodes the specified PluginSpec message. Does not implicitly {@link PluginSpec.verify|verify} messages.
     * @param message PluginSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPluginSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PluginSpec message, length delimited. Does not implicitly {@link PluginSpec.verify|verify} messages.
     * @param message PluginSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPluginSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PluginSpec message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PluginSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PluginSpec;

    /**
     * Decodes a PluginSpec message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PluginSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PluginSpec;

    /**
     * Verifies a PluginSpec message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PluginSpec message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PluginSpec
     */
    public static fromObject(object: { [k: string]: any }): PluginSpec;

    /**
     * Creates a plain object from a PluginSpec message. Also converts values to other types if specified.
     * @param message PluginSpec
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PluginSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PluginSpec to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ProcessorSpec. */
export interface IProcessorSpec {

    /** ProcessorSpec insert */
    insert?: (IInsertSpec|null);

    /** ProcessorSpec plugin */
    plugin?: (IPluginSpec|null);
}

/** A specification of a processor - maybe insert, maybe plugin */
export class ProcessorSpec implements IProcessorSpec {

    /**
     * Constructs a new ProcessorSpec.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProcessorSpec);

    /** ProcessorSpec insert. */
    public insert?: (IInsertSpec|null);

    /** ProcessorSpec plugin. */
    public plugin?: (IPluginSpec|null);

    /** ProcessorSpec spec. */
    public spec?: ("insert"|"plugin");

    /**
     * Creates a new ProcessorSpec instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProcessorSpec instance
     */
    public static create(properties?: IProcessorSpec): ProcessorSpec;

    /**
     * Encodes the specified ProcessorSpec message. Does not implicitly {@link ProcessorSpec.verify|verify} messages.
     * @param message ProcessorSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProcessorSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProcessorSpec message, length delimited. Does not implicitly {@link ProcessorSpec.verify|verify} messages.
     * @param message ProcessorSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProcessorSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProcessorSpec message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProcessorSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProcessorSpec;

    /**
     * Decodes a ProcessorSpec message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProcessorSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProcessorSpec;

    /**
     * Verifies a ProcessorSpec message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProcessorSpec message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProcessorSpec
     */
    public static fromObject(object: { [k: string]: any }): ProcessorSpec;

    /**
     * Creates a plain object from a ProcessorSpec message. Also converts values to other types if specified.
     * @param message ProcessorSpec
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProcessorSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProcessorSpec to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Input. */
export interface IInput {

    /** Path to the file on the local filesystem of the engine. */
    localPath?: (string|null);

    /** Where to start playing? */
    startPos?: (number|null);

    /** Where to end playing? */
    endPos?: (number|null);
}

/**
 * Sent by the controller to the engine. Sets the path to the file on the
 * local filesystem of the engine.
 */
export class Input implements IInput {

    /**
     * Constructs a new Input.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInput);

    /** Path to the file on the local filesystem of the engine. */
    public localPath: string;

    /** Where to start playing? */
    public startPos: number;

    /** Where to end playing? */
    public endPos: number;

    /**
     * Creates a new Input instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Input instance
     */
    public static create(properties?: IInput): Input;

    /**
     * Encodes the specified Input message. Does not implicitly {@link Input.verify|verify} messages.
     * @param message Input message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Input message, length delimited. Does not implicitly {@link Input.verify|verify} messages.
     * @param message Input message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Input message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Input
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Input;

    /**
     * Decodes an Input message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Input
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Input;

    /**
     * Verifies an Input message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Input message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Input
     */
    public static fromObject(object: { [k: string]: any }): Input;

    /**
     * Creates a plain object from an Input message. Also converts values to other types if specified.
     * @param message Input
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Input to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Measurement. */
export interface IMeasurement {

    /** When in time relative to the source has this happened? */
    sourceTime?: (number|null);

    /** name of the measurement */
    name?: (string|null);

    /** The actual measurement */
    measurement?: (number|null);
}

/**
 * Measurement taken by the engine, like RMS or Peak level, Gain Reduction,
 * overdrive, ...
 */
export class Measurement implements IMeasurement {

    /**
     * Constructs a new Measurement.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMeasurement);

    /** When in time relative to the source has this happened? */
    public sourceTime: number;

    /** name of the measurement */
    public name: string;

    /** The actual measurement */
    public measurement: number;

    /**
     * Creates a new Measurement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Measurement instance
     */
    public static create(properties?: IMeasurement): Measurement;

    /**
     * Encodes the specified Measurement message. Does not implicitly {@link Measurement.verify|verify} messages.
     * @param message Measurement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMeasurement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Measurement message, length delimited. Does not implicitly {@link Measurement.verify|verify} messages.
     * @param message Measurement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMeasurement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Measurement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Measurement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Measurement;

    /**
     * Decodes a Measurement message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Measurement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Measurement;

    /**
     * Verifies a Measurement message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Measurement message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Measurement
     */
    public static fromObject(object: { [k: string]: any }): Measurement;

    /**
     * Creates a plain object from a Measurement message. Also converts values to other types if specified.
     * @param message Measurement
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Measurement, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Measurement to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Ready. */
export interface IReady {
}

/** Sent by the engine when it is ready. */
export class Ready implements IReady {

    /**
     * Constructs a new Ready.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReady);

    /**
     * Creates a new Ready instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Ready instance
     */
    public static create(properties?: IReady): Ready;

    /**
     * Encodes the specified Ready message. Does not implicitly {@link Ready.verify|verify} messages.
     * @param message Ready message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReady, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Ready message, length delimited. Does not implicitly {@link Ready.verify|verify} messages.
     * @param message Ready message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReady, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Ready message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Ready
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ready;

    /**
     * Decodes a Ready message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Ready
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ready;

    /**
     * Verifies a Ready message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Ready message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Ready
     */
    public static fromObject(object: { [k: string]: any }): Ready;

    /**
     * Creates a plain object from a Ready message. Also converts values to other types if specified.
     * @param message Ready
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Ready, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Ready to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AudioReady. */
export interface IAudioReady {

    /** Output data, in the muxer, codec, sample rate specified. */
    buffer?: (Uint8Array|null);

    /**
     * Measurements, keyed by a compound name. Usually, these will be keyed by
     * processor name and measurement name, seperated by a dot. For example
     * insert3.in_rms, limiter.gr, ...
     */
    measurements?: (IMeasurement[]|null);

    /**
     * The sequence number of this buffer, from the start of the last change of
     * output configuration SetOutputCoding.
     */
    sequence?: (number|null);

    /** Position in the media space */
    sampleTime?: (number|Long|null);

    /** true when there are more buffers to follow, false otherwise */
    haveMore?: (boolean|null);
}

/** Sent by the engine to the controller to offer a resulting buffer. */
export class AudioReady implements IAudioReady {

    /**
     * Constructs a new AudioReady.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAudioReady);

    /** Output data, in the muxer, codec, sample rate specified. */
    public buffer: Uint8Array;

    /**
     * Measurements, keyed by a compound name. Usually, these will be keyed by
     * processor name and measurement name, seperated by a dot. For example
     * insert3.in_rms, limiter.gr, ...
     */
    public measurements: IMeasurement[];

    /**
     * The sequence number of this buffer, from the start of the last change of
     * output configuration SetOutputCoding.
     */
    public sequence: number;

    /** Position in the media space */
    public sampleTime: (number|Long);

    /** true when there are more buffers to follow, false otherwise */
    public haveMore: boolean;

    /**
     * Creates a new AudioReady instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AudioReady instance
     */
    public static create(properties?: IAudioReady): AudioReady;

    /**
     * Encodes the specified AudioReady message. Does not implicitly {@link AudioReady.verify|verify} messages.
     * @param message AudioReady message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAudioReady, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AudioReady message, length delimited. Does not implicitly {@link AudioReady.verify|verify} messages.
     * @param message AudioReady message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAudioReady, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AudioReady message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AudioReady
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AudioReady;

    /**
     * Decodes an AudioReady message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AudioReady
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AudioReady;

    /**
     * Verifies an AudioReady message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AudioReady message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AudioReady
     */
    public static fromObject(object: { [k: string]: any }): AudioReady;

    /**
     * Creates a plain object from an AudioReady message. Also converts values to other types if specified.
     * @param message AudioReady
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AudioReady, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AudioReady to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SettingValue. */
export interface ISettingValue {

    /** SettingValue processor */
    processor?: (string|null);

    /** SettingValue parameter */
    parameter?: (string|null);

    /** SettingValue value */
    value?: (number|null);
}

/** A Setting value that needs to be applied to a processor. */
export class SettingValue implements ISettingValue {

    /**
     * Constructs a new SettingValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISettingValue);

    /** SettingValue processor. */
    public processor: string;

    /** SettingValue parameter. */
    public parameter: string;

    /** SettingValue value. */
    public value: number;

    /**
     * Creates a new SettingValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SettingValue instance
     */
    public static create(properties?: ISettingValue): SettingValue;

    /**
     * Encodes the specified SettingValue message. Does not implicitly {@link SettingValue.verify|verify} messages.
     * @param message SettingValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISettingValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SettingValue message, length delimited. Does not implicitly {@link SettingValue.verify|verify} messages.
     * @param message SettingValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISettingValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SettingValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SettingValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SettingValue;

    /**
     * Decodes a SettingValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SettingValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SettingValue;

    /**
     * Verifies a SettingValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SettingValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SettingValue
     */
    public static fromObject(object: { [k: string]: any }): SettingValue;

    /**
     * Creates a plain object from a SettingValue message. Also converts values to other types if specified.
     * @param message SettingValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SettingValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SettingValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetSettings. */
export interface ISetSettings {

    /**
     * Settings, keyed by compound key - name of the processor and name of the
     * setting, seperated by a dot. For example
     * limiter.0, insert3.in_gain, ...
     */
    settings?: (ISettingValue[]|null);
}

/** Sent by the controller to the engine */
export class SetSettings implements ISetSettings {

    /**
     * Constructs a new SetSettings.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetSettings);

    /**
     * Settings, keyed by compound key - name of the processor and name of the
     * setting, seperated by a dot. For example
     * limiter.0, insert3.in_gain, ...
     */
    public settings: ISettingValue[];

    /**
     * Creates a new SetSettings instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetSettings instance
     */
    public static create(properties?: ISetSettings): SetSettings;

    /**
     * Encodes the specified SetSettings message. Does not implicitly {@link SetSettings.verify|verify} messages.
     * @param message SetSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetSettings message, length delimited. Does not implicitly {@link SetSettings.verify|verify} messages.
     * @param message SetSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetSettings message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetSettings;

    /**
     * Decodes a SetSettings message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetSettings;

    /**
     * Verifies a SetSettings message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetSettings message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetSettings
     */
    public static fromObject(object: { [k: string]: any }): SetSettings;

    /**
     * Creates a plain object from a SetSettings message. Also converts values to other types if specified.
     * @param message SetSettings
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetSettings to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Terminate. */
export interface ITerminate {
}

/**
 * Sent by the Controller to the Engine when it should shut down!
 * No buts no questions, just terminate
 */
export class Terminate implements ITerminate {

    /**
     * Constructs a new Terminate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITerminate);

    /**
     * Creates a new Terminate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Terminate instance
     */
    public static create(properties?: ITerminate): Terminate;

    /**
     * Encodes the specified Terminate message. Does not implicitly {@link Terminate.verify|verify} messages.
     * @param message Terminate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITerminate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Terminate message, length delimited. Does not implicitly {@link Terminate.verify|verify} messages.
     * @param message Terminate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITerminate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Terminate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Terminate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Terminate;

    /**
     * Decodes a Terminate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Terminate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Terminate;

    /**
     * Verifies a Terminate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Terminate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Terminate
     */
    public static fromObject(object: { [k: string]: any }): Terminate;

    /**
     * Creates a plain object from a Terminate message. Also converts values to other types if specified.
     * @param message Terminate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Terminate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Terminate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Terminated. */
export interface ITerminated {

    /** Terminated reason */
    reason?: (string|null);
}

/** Sent by the Engine to the Controller when it is about to exit. */
export class Terminated implements ITerminated {

    /**
     * Constructs a new Terminated.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITerminated);

    /** Terminated reason. */
    public reason: string;

    /**
     * Creates a new Terminated instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Terminated instance
     */
    public static create(properties?: ITerminated): Terminated;

    /**
     * Encodes the specified Terminated message. Does not implicitly {@link Terminated.verify|verify} messages.
     * @param message Terminated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITerminated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Terminated message, length delimited. Does not implicitly {@link Terminated.verify|verify} messages.
     * @param message Terminated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITerminated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Terminated message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Terminated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Terminated;

    /**
     * Decodes a Terminated message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Terminated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Terminated;

    /**
     * Verifies a Terminated message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Terminated message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Terminated
     */
    public static fromObject(object: { [k: string]: any }): Terminated;

    /**
     * Creates a plain object from a Terminated message. Also converts values to other types if specified.
     * @param message Terminated
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Terminated, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Terminated to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Connection. */
export interface IConnection {

    /** Connection fromNode */
    fromNode?: (string|null);

    /** Connection fromPad */
    fromPad?: (string|null);

    /** Connection toNode */
    toNode?: (string|null);

    /** Connection toPad */
    toPad?: (string|null);
}

/** Represents a Connection. */
export class Connection implements IConnection {

    /**
     * Constructs a new Connection.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConnection);

    /** Connection fromNode. */
    public fromNode: string;

    /** Connection fromPad. */
    public fromPad: string;

    /** Connection toNode. */
    public toNode: string;

    /** Connection toPad. */
    public toPad: string;

    /**
     * Creates a new Connection instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Connection instance
     */
    public static create(properties?: IConnection): Connection;

    /**
     * Encodes the specified Connection message. Does not implicitly {@link Connection.verify|verify} messages.
     * @param message Connection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConnection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Connection message, length delimited. Does not implicitly {@link Connection.verify|verify} messages.
     * @param message Connection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConnection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Connection message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Connection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Connection;

    /**
     * Decodes a Connection message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Connection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Connection;

    /**
     * Verifies a Connection message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Connection message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Connection
     */
    public static fromObject(object: { [k: string]: any }): Connection;

    /**
     * Creates a plain object from a Connection message. Also converts values to other types if specified.
     * @param message Connection
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Connection, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Connection to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Play. */
export interface IPlay {

    /** Play inputs */
    inputs?: ({ [k: string]: IInput }|null);

    /** Play processors */
    processors?: ({ [k: string]: IProcessorSpec }|null);

    /** Play output */
    output?: (IOutputCoding|null);

    /** Play flow */
    flow?: (IConnection[]|null);

    /** Play settings */
    settings?: (ISetSettings|null);
}

/** Represents a Play. */
export class Play implements IPlay {

    /**
     * Constructs a new Play.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlay);

    /** Play inputs. */
    public inputs: { [k: string]: IInput };

    /** Play processors. */
    public processors: { [k: string]: IProcessorSpec };

    /** Play output. */
    public output?: (IOutputCoding|null);

    /** Play flow. */
    public flow: IConnection[];

    /** Play settings. */
    public settings?: (ISetSettings|null);

    /**
     * Creates a new Play instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Play instance
     */
    public static create(properties?: IPlay): Play;

    /**
     * Encodes the specified Play message. Does not implicitly {@link Play.verify|verify} messages.
     * @param message Play message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Play message, length delimited. Does not implicitly {@link Play.verify|verify} messages.
     * @param message Play message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Play message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Play
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Play;

    /**
     * Decodes a Play message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Play
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Play;

    /**
     * Verifies a Play message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Play message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Play
     */
    public static fromObject(object: { [k: string]: any }): Play;

    /**
     * Creates a plain object from a Play message. Also converts values to other types if specified.
     * @param message Play
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Play, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Play to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ErrorOrWarning. */
export interface IErrorOrWarning {

    /** ErrorOrWarning warning */
    warning?: (string|null);

    /** ErrorOrWarning error */
    error?: (string|null);
}

/** Represents an ErrorOrWarning. */
export class ErrorOrWarning implements IErrorOrWarning {

    /**
     * Constructs a new ErrorOrWarning.
     * @param [properties] Properties to set
     */
    constructor(properties?: IErrorOrWarning);

    /** ErrorOrWarning warning. */
    public warning: string;

    /** ErrorOrWarning error. */
    public error: string;

    /** ErrorOrWarning message. */
    public message?: ("warning"|"error");

    /**
     * Creates a new ErrorOrWarning instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ErrorOrWarning instance
     */
    public static create(properties?: IErrorOrWarning): ErrorOrWarning;

    /**
     * Encodes the specified ErrorOrWarning message. Does not implicitly {@link ErrorOrWarning.verify|verify} messages.
     * @param message ErrorOrWarning message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IErrorOrWarning, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ErrorOrWarning message, length delimited. Does not implicitly {@link ErrorOrWarning.verify|verify} messages.
     * @param message ErrorOrWarning message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IErrorOrWarning, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ErrorOrWarning message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ErrorOrWarning
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ErrorOrWarning;

    /**
     * Decodes an ErrorOrWarning message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ErrorOrWarning
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ErrorOrWarning;

    /**
     * Verifies an ErrorOrWarning message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ErrorOrWarning message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ErrorOrWarning
     */
    public static fromObject(object: { [k: string]: any }): ErrorOrWarning;

    /**
     * Creates a plain object from an ErrorOrWarning message. Also converts values to other types if specified.
     * @param message ErrorOrWarning
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ErrorOrWarning, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ErrorOrWarning to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Event. */
export interface IEvent {

    /** Event ready */
    ready?: (IReady|null);

    /** Event audioReady */
    audioReady?: (IAudioReady|null);

    /** Event terminated */
    terminated?: (ITerminated|null);

    /** Event errorOrWarning */
    errorOrWarning?: (IErrorOrWarning|null);
}

/** Represents an Event. */
export class Event implements IEvent {

    /**
     * Constructs a new Event.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEvent);

    /** Event ready. */
    public ready?: (IReady|null);

    /** Event audioReady. */
    public audioReady?: (IAudioReady|null);

    /** Event terminated. */
    public terminated?: (ITerminated|null);

    /** Event errorOrWarning. */
    public errorOrWarning?: (IErrorOrWarning|null);

    /** Event message. */
    public message?: ("ready"|"audioReady"|"terminated"|"errorOrWarning");

    /**
     * Creates a new Event instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Event instance
     */
    public static create(properties?: IEvent): Event;

    /**
     * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
     * @param message Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
     * @param message Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Event message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Event;

    /**
     * Decodes an Event message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Event;

    /**
     * Verifies an Event message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Event message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Event
     */
    public static fromObject(object: { [k: string]: any }): Event;

    /**
     * Creates a plain object from an Event message. Also converts values to other types if specified.
     * @param message Event
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Event to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AudioRuntimeStatus. */
export interface IAudioRuntimeStatus {
}

/** Represents an AudioRuntimeStatus. */
export class AudioRuntimeStatus implements IAudioRuntimeStatus {

    /**
     * Constructs a new AudioRuntimeStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAudioRuntimeStatus);

    /**
     * Creates a new AudioRuntimeStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AudioRuntimeStatus instance
     */
    public static create(properties?: IAudioRuntimeStatus): AudioRuntimeStatus;

    /**
     * Encodes the specified AudioRuntimeStatus message. Does not implicitly {@link AudioRuntimeStatus.verify|verify} messages.
     * @param message AudioRuntimeStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAudioRuntimeStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AudioRuntimeStatus message, length delimited. Does not implicitly {@link AudioRuntimeStatus.verify|verify} messages.
     * @param message AudioRuntimeStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAudioRuntimeStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AudioRuntimeStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AudioRuntimeStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AudioRuntimeStatus;

    /**
     * Decodes an AudioRuntimeStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AudioRuntimeStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AudioRuntimeStatus;

    /**
     * Verifies an AudioRuntimeStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AudioRuntimeStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AudioRuntimeStatus
     */
    public static fromObject(object: { [k: string]: any }): AudioRuntimeStatus;

    /**
     * Creates a plain object from an AudioRuntimeStatus message. Also converts values to other types if specified.
     * @param message AudioRuntimeStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AudioRuntimeStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AudioRuntimeStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NoParameters. */
export interface INoParameters {
}

/** Represents a NoParameters. */
export class NoParameters implements INoParameters {

    /**
     * Constructs a new NoParameters.
     * @param [properties] Properties to set
     */
    constructor(properties?: INoParameters);

    /**
     * Creates a new NoParameters instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NoParameters instance
     */
    public static create(properties?: INoParameters): NoParameters;

    /**
     * Encodes the specified NoParameters message. Does not implicitly {@link NoParameters.verify|verify} messages.
     * @param message NoParameters message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INoParameters, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NoParameters message, length delimited. Does not implicitly {@link NoParameters.verify|verify} messages.
     * @param message NoParameters message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INoParameters, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NoParameters message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NoParameters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NoParameters;

    /**
     * Decodes a NoParameters message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NoParameters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NoParameters;

    /**
     * Verifies a NoParameters message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NoParameters message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NoParameters
     */
    public static fromObject(object: { [k: string]: any }): NoParameters;

    /**
     * Creates a plain object from a NoParameters message. Also converts values to other types if specified.
     * @param message NoParameters
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NoParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NoParameters to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an AudioRuntime */
export class AudioRuntime extends $protobuf.rpc.Service {

    /**
     * Constructs a new AudioRuntime service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new AudioRuntime service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AudioRuntime;

    /**
     * Calls UpdateSettings.
     * @param request SetSettings message or plain object
     * @param callback Node-style callback called with the error, if any, and AudioRuntimeStatus
     */
    public updateSettings(request: ISetSettings, callback: AudioRuntime.UpdateSettingsCallback): void;

    /**
     * Calls UpdateSettings.
     * @param request SetSettings message or plain object
     * @returns Promise
     */
    public updateSettings(request: ISetSettings): Promise<AudioRuntimeStatus>;

    /**
     * Calls Play.
     * @param request NoParameters message or plain object
     * @param callback Node-style callback called with the error, if any, and Event
     */
    public play(request: INoParameters, callback: AudioRuntime.PlayCallback): void;

    /**
     * Calls Play.
     * @param request NoParameters message or plain object
     * @returns Promise
     */
    public play(request: INoParameters): Promise<Event>;

    /**
     * Calls DoTerminate.
     * @param request Terminate message or plain object
     * @param callback Node-style callback called with the error, if any, and AudioRuntimeStatus
     */
    public doTerminate(request: ITerminate, callback: AudioRuntime.DoTerminateCallback): void;

    /**
     * Calls DoTerminate.
     * @param request Terminate message or plain object
     * @returns Promise
     */
    public doTerminate(request: ITerminate): Promise<AudioRuntimeStatus>;
}

export namespace AudioRuntime {

    /**
     * Callback as used by {@link AudioRuntime#updateSettings}.
     * @param error Error, if any
     * @param [response] AudioRuntimeStatus
     */
    type UpdateSettingsCallback = (error: (Error|null), response?: AudioRuntimeStatus) => void;

    /**
     * Callback as used by {@link AudioRuntime#play}.
     * @param error Error, if any
     * @param [response] Event
     */
    type PlayCallback = (error: (Error|null), response?: Event) => void;

    /**
     * Callback as used by {@link AudioRuntime#doTerminate}.
     * @param error Error, if any
     * @param [response] AudioRuntimeStatus
     */
    type DoTerminateCallback = (error: (Error|null), response?: AudioRuntimeStatus) => void;
}

/** Properties of a ChannelData. */
export interface IChannelData {

    /** ChannelData index */
    index?: (number|null);

    /** ChannelData data */
    data?: (Uint8Array|null);
}

/** Represents a ChannelData. */
export class ChannelData implements IChannelData {

    /**
     * Constructs a new ChannelData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChannelData);

    /** ChannelData index. */
    public index: number;

    /** ChannelData data. */
    public data: Uint8Array;

    /**
     * Creates a new ChannelData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChannelData instance
     */
    public static create(properties?: IChannelData): ChannelData;

    /**
     * Encodes the specified ChannelData message. Does not implicitly {@link ChannelData.verify|verify} messages.
     * @param message ChannelData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChannelData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChannelData message, length delimited. Does not implicitly {@link ChannelData.verify|verify} messages.
     * @param message ChannelData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChannelData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChannelData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChannelData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChannelData;

    /**
     * Decodes a ChannelData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChannelData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChannelData;

    /**
     * Verifies a ChannelData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChannelData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChannelData
     */
    public static fromObject(object: { [k: string]: any }): ChannelData;

    /**
     * Creates a plain object from a ChannelData message. Also converts values to other types if specified.
     * @param message ChannelData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChannelData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChannelData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ExchangeChannels. */
export interface IExchangeChannels {

    /** ExchangeChannels channels */
    channels?: (IChannelData[]|null);

    /** ExchangeChannels requestChannels */
    requestChannels?: (number[]|null);
}

/** Represents an ExchangeChannels. */
export class ExchangeChannels implements IExchangeChannels {

    /**
     * Constructs a new ExchangeChannels.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExchangeChannels);

    /** ExchangeChannels channels. */
    public channels: IChannelData[];

    /** ExchangeChannels requestChannels. */
    public requestChannels: number[];

    /**
     * Creates a new ExchangeChannels instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExchangeChannels instance
     */
    public static create(properties?: IExchangeChannels): ExchangeChannels;

    /**
     * Encodes the specified ExchangeChannels message. Does not implicitly {@link ExchangeChannels.verify|verify} messages.
     * @param message ExchangeChannels message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExchangeChannels, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ExchangeChannels message, length delimited. Does not implicitly {@link ExchangeChannels.verify|verify} messages.
     * @param message ExchangeChannels message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IExchangeChannels, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExchangeChannels message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExchangeChannels
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExchangeChannels;

    /**
     * Decodes an ExchangeChannels message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ExchangeChannels
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExchangeChannels;

    /**
     * Verifies an ExchangeChannels message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ExchangeChannels message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ExchangeChannels
     */
    public static fromObject(object: { [k: string]: any }): ExchangeChannels;

    /**
     * Creates a plain object from an ExchangeChannels message. Also converts values to other types if specified.
     * @param message ExchangeChannels
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ExchangeChannels, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ExchangeChannels to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ProvideChannels. */
export interface IProvideChannels {

    /** ProvideChannels channels */
    channels?: (IChannelData[]|null);
}

/** Represents a ProvideChannels. */
export class ProvideChannels implements IProvideChannels {

    /**
     * Constructs a new ProvideChannels.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProvideChannels);

    /** ProvideChannels channels. */
    public channels: IChannelData[];

    /**
     * Creates a new ProvideChannels instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProvideChannels instance
     */
    public static create(properties?: IProvideChannels): ProvideChannels;

    /**
     * Encodes the specified ProvideChannels message. Does not implicitly {@link ProvideChannels.verify|verify} messages.
     * @param message ProvideChannels message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProvideChannels, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProvideChannels message, length delimited. Does not implicitly {@link ProvideChannels.verify|verify} messages.
     * @param message ProvideChannels message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProvideChannels, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProvideChannels message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProvideChannels
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProvideChannels;

    /**
     * Decodes a ProvideChannels message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProvideChannels
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProvideChannels;

    /**
     * Verifies a ProvideChannels message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProvideChannels message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProvideChannels
     */
    public static fromObject(object: { [k: string]: any }): ProvideChannels;

    /**
     * Creates a plain object from a ProvideChannels message. Also converts values to other types if specified.
     * @param message ProvideChannels
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProvideChannels, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProvideChannels to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an AudioServer */
export class AudioServer extends $protobuf.rpc.Service {

    /**
     * Constructs a new AudioServer service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new AudioServer service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AudioServer;

    /**
     * Calls exchange.
     * @param request ExchangeChannels message or plain object
     * @param callback Node-style callback called with the error, if any, and ProvideChannels
     */
    public exchange(request: IExchangeChannels, callback: AudioServer.exchangeCallback): void;

    /**
     * Calls exchange.
     * @param request ExchangeChannels message or plain object
     * @returns Promise
     */
    public exchange(request: IExchangeChannels): Promise<ProvideChannels>;
}

export namespace AudioServer {

    /**
     * Callback as used by {@link AudioServer#exchange}.
     * @param error Error, if any
     * @param [response] ProvideChannels
     */
    type exchangeCallback = (error: (Error|null), response?: ProvideChannels) => void;
}

/** Properties of a PublicRequest. */
export interface IPublicRequest {

    /** PublicRequest requestId */
    requestId?: (number|null);

    /** PublicRequest play */
    play?: (IPublicPlay|null);

    /** PublicRequest stop */
    stop?: (IPublicStop|null);

    /** PublicRequest setSettings */
    setSettings?: (ISetSettings|null);

    /** PublicRequest download */
    download?: (IPublicDownload|null);
}

/** Represents a PublicRequest. */
export class PublicRequest implements IPublicRequest {

    /**
     * Constructs a new PublicRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicRequest);

    /** PublicRequest requestId. */
    public requestId: number;

    /** PublicRequest play. */
    public play?: (IPublicPlay|null);

    /** PublicRequest stop. */
    public stop?: (IPublicStop|null);

    /** PublicRequest setSettings. */
    public setSettings?: (ISetSettings|null);

    /** PublicRequest download. */
    public download?: (IPublicDownload|null);

    /** PublicRequest message. */
    public message?: ("play"|"stop"|"setSettings"|"download");

    /**
     * Creates a new PublicRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicRequest instance
     */
    public static create(properties?: IPublicRequest): PublicRequest;

    /**
     * Encodes the specified PublicRequest message. Does not implicitly {@link PublicRequest.verify|verify} messages.
     * @param message PublicRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicRequest message, length delimited. Does not implicitly {@link PublicRequest.verify|verify} messages.
     * @param message PublicRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicRequest;

    /**
     * Decodes a PublicRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicRequest;

    /**
     * Verifies a PublicRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicRequest
     */
    public static fromObject(object: { [k: string]: any }): PublicRequest;

    /**
     * Creates a plain object from a PublicRequest message. Also converts values to other types if specified.
     * @param message PublicRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PublicStop. */
export interface IPublicStop {
}

/** Represents a PublicStop. */
export class PublicStop implements IPublicStop {

    /**
     * Constructs a new PublicStop.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicStop);

    /**
     * Creates a new PublicStop instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicStop instance
     */
    public static create(properties?: IPublicStop): PublicStop;

    /**
     * Encodes the specified PublicStop message. Does not implicitly {@link PublicStop.verify|verify} messages.
     * @param message PublicStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicStop message, length delimited. Does not implicitly {@link PublicStop.verify|verify} messages.
     * @param message PublicStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicStop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicStop;

    /**
     * Decodes a PublicStop message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicStop;

    /**
     * Verifies a PublicStop message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicStop message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicStop
     */
    public static fromObject(object: { [k: string]: any }): PublicStop;

    /**
     * Creates a plain object from a PublicStop message. Also converts values to other types if specified.
     * @param message PublicStop
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicStop to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PublicPlay. */
export interface IPublicPlay {

    /** PublicPlay inputs */
    inputs?: ({ [k: string]: IPublicInput }|null);

    /** PublicPlay outputCodingPreset */
    outputCodingPreset?: (string|null);

    /** PublicPlay settings */
    settings?: (ISetSettings|null);

    /** PublicPlay sampleRate */
    sampleRate?: (number|null);

    /** PublicPlay latencyMultiplier */
    latencyMultiplier?: (number|null);
}

/** Represents a PublicPlay. */
export class PublicPlay implements IPublicPlay {

    /**
     * Constructs a new PublicPlay.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicPlay);

    /** PublicPlay inputs. */
    public inputs: { [k: string]: IPublicInput };

    /** PublicPlay outputCodingPreset. */
    public outputCodingPreset: string;

    /** PublicPlay settings. */
    public settings?: (ISetSettings|null);

    /** PublicPlay sampleRate. */
    public sampleRate: number;

    /** PublicPlay latencyMultiplier. */
    public latencyMultiplier: number;

    /**
     * Creates a new PublicPlay instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicPlay instance
     */
    public static create(properties?: IPublicPlay): PublicPlay;

    /**
     * Encodes the specified PublicPlay message. Does not implicitly {@link PublicPlay.verify|verify} messages.
     * @param message PublicPlay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicPlay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicPlay message, length delimited. Does not implicitly {@link PublicPlay.verify|verify} messages.
     * @param message PublicPlay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicPlay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicPlay message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicPlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicPlay;

    /**
     * Decodes a PublicPlay message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicPlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicPlay;

    /**
     * Verifies a PublicPlay message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicPlay message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicPlay
     */
    public static fromObject(object: { [k: string]: any }): PublicPlay;

    /**
     * Creates a plain object from a PublicPlay message. Also converts values to other types if specified.
     * @param message PublicPlay
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicPlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicPlay to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PublicInput. */
export interface IPublicInput {

    /** Media ID */
    mediaId?: (string|null);

    /** Where to start playing? */
    startPos?: (number|null);

    /** Where to end playing? */
    endPos?: (number|null);
}

/** Represents a PublicInput. */
export class PublicInput implements IPublicInput {

    /**
     * Constructs a new PublicInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicInput);

    /** Media ID */
    public mediaId: string;

    /** Where to start playing? */
    public startPos: number;

    /** Where to end playing? */
    public endPos: number;

    /**
     * Creates a new PublicInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicInput instance
     */
    public static create(properties?: IPublicInput): PublicInput;

    /**
     * Encodes the specified PublicInput message. Does not implicitly {@link PublicInput.verify|verify} messages.
     * @param message PublicInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicInput message, length delimited. Does not implicitly {@link PublicInput.verify|verify} messages.
     * @param message PublicInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicInput;

    /**
     * Decodes a PublicInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicInput;

    /**
     * Verifies a PublicInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicInput
     */
    public static fromObject(object: { [k: string]: any }): PublicInput;

    /**
     * Creates a plain object from a PublicInput message. Also converts values to other types if specified.
     * @param message PublicInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PublicDownload. */
export interface IPublicDownload {

    /** PublicDownload inputs */
    inputs?: ({ [k: string]: IPublicInput }|null);

    /** PublicDownload downloadCodingPreset */
    downloadCodingPreset?: (string|null);

    /** PublicDownload settings */
    settings?: (ISetSettings|null);
}

/** Represents a PublicDownload. */
export class PublicDownload implements IPublicDownload {

    /**
     * Constructs a new PublicDownload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicDownload);

    /** PublicDownload inputs. */
    public inputs: { [k: string]: IPublicInput };

    /** PublicDownload downloadCodingPreset. */
    public downloadCodingPreset: string;

    /** PublicDownload settings. */
    public settings?: (ISetSettings|null);

    /**
     * Creates a new PublicDownload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicDownload instance
     */
    public static create(properties?: IPublicDownload): PublicDownload;

    /**
     * Encodes the specified PublicDownload message. Does not implicitly {@link PublicDownload.verify|verify} messages.
     * @param message PublicDownload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicDownload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicDownload message, length delimited. Does not implicitly {@link PublicDownload.verify|verify} messages.
     * @param message PublicDownload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicDownload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicDownload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicDownload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicDownload;

    /**
     * Decodes a PublicDownload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicDownload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicDownload;

    /**
     * Verifies a PublicDownload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicDownload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicDownload
     */
    public static fromObject(object: { [k: string]: any }): PublicDownload;

    /**
     * Creates a plain object from a PublicDownload message. Also converts values to other types if specified.
     * @param message PublicDownload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicDownload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicDownload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Response. */
export interface IResponse {

    /** Response requestId */
    requestId?: (number|null);

    /** Response error */
    error?: (string|null);
}

/** Represents a Response. */
export class Response implements IResponse {

    /**
     * Constructs a new Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponse);

    /** Response requestId. */
    public requestId: number;

    /** Response error. */
    public error: string;

    /**
     * Creates a new Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Response instance
     */
    public static create(properties?: IResponse): Response;

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Response;

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Response;

    /**
     * Verifies a Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Response
     */
    public static fromObject(object: { [k: string]: any }): Response;

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @param message Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PublicFrame. */
export interface IPublicFrame {

    /** PublicFrame event */
    event?: (IEvent|null);

    /** PublicFrame response */
    response?: (IResponse|null);
}

/** Represents a PublicFrame. */
export class PublicFrame implements IPublicFrame {

    /**
     * Constructs a new PublicFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublicFrame);

    /** PublicFrame event. */
    public event?: (IEvent|null);

    /** PublicFrame response. */
    public response?: (IResponse|null);

    /** PublicFrame frame. */
    public frame?: ("event"|"response");

    /**
     * Creates a new PublicFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublicFrame instance
     */
    public static create(properties?: IPublicFrame): PublicFrame;

    /**
     * Encodes the specified PublicFrame message. Does not implicitly {@link PublicFrame.verify|verify} messages.
     * @param message PublicFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublicFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublicFrame message, length delimited. Does not implicitly {@link PublicFrame.verify|verify} messages.
     * @param message PublicFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublicFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublicFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublicFrame;

    /**
     * Decodes a PublicFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublicFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublicFrame;

    /**
     * Verifies a PublicFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublicFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublicFrame
     */
    public static fromObject(object: { [k: string]: any }): PublicFrame;

    /**
     * Creates a plain object from a PublicFrame message. Also converts values to other types if specified.
     * @param message PublicFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublicFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublicFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
