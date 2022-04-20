// @generated by protobuf-ts 2.3.0
// @generated from protobuf file "parca/metastore/v1alpha1/metastore.proto" (package "parca.metastore.v1alpha1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Sample is a stack trace with optional labels.
 *
 * @generated from protobuf message parca.metastore.v1alpha1.Sample
 */
export interface Sample {
    /**
     * location_ids are locations that define the stack trace.
     *
     * @generated from protobuf field: repeated bytes location_ids = 1;
     */
    locationIds: Uint8Array[];
    /**
     * labels are extra labels for a stack trace.
     *
     * @generated from protobuf field: map<string, parca.metastore.v1alpha1.SampleLabel> labels = 2;
     */
    labels: {
        [key: string]: SampleLabel;
    };
    /**
     * num_labels are the num of labels.
     *
     * @generated from protobuf field: map<string, parca.metastore.v1alpha1.SampleNumLabel> num_labels = 3;
     */
    numLabels: {
        [key: string]: SampleNumLabel;
    };
    /**
     * num_units are the units for the labels.
     *
     * @generated from protobuf field: map<string, parca.metastore.v1alpha1.SampleNumUnit> num_units = 4;
     */
    numUnits: {
        [key: string]: SampleNumUnit;
    };
}
/**
 * SampleLabel are the labels added to a Sample.
 *
 * @generated from protobuf message parca.metastore.v1alpha1.SampleLabel
 */
export interface SampleLabel {
    /**
     * labels for a label in a Sample.
     *
     * @generated from protobuf field: repeated string labels = 1;
     */
    labels: string[];
}
/**
 * SampleNumLabel are the num of labels of a Sample.
 *
 * @generated from protobuf message parca.metastore.v1alpha1.SampleNumLabel
 */
export interface SampleNumLabel {
    /**
     * num_labels are the num_label of a Sample.
     *
     * @generated from protobuf field: repeated int64 num_labels = 1;
     */
    numLabels: bigint[];
}
/**
 * SampleNumUnit are the num units of a Sample.
 *
 * @generated from protobuf message parca.metastore.v1alpha1.SampleNumUnit
 */
export interface SampleNumUnit {
    /**
     * units of a labels of a Sample.
     *
     * @generated from protobuf field: repeated string units = 1;
     */
    units: string[];
}
/**
 * Location describes a single location of a stack traces.
 *
 * @generated from protobuf message parca.metastore.v1alpha1.Location
 */
export interface Location {
    /**
     * id is the unique identifier for the location.
     *
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
    /**
     * address is the memory address of the location if present.
     *
     * @generated from protobuf field: uint64 address = 2;
     */
    address: bigint;
    /**
     * mapping_id is the unique identifier for the mapping associated with the location.
     *
     * @generated from protobuf field: bytes mapping_id = 4;
     */
    mappingId: Uint8Array;
    /**
     * is_folded indicates whether the location is folded into the previous location.
     *
     * @generated from protobuf field: bool is_folded = 5;
     */
    isFolded: boolean;
}
/**
 * LocationLines describes a set of lines of a location.
 *
 * @generated from protobuf message parca.metastore.v1alpha1.LocationLines
 */
export interface LocationLines {
    /**
     * id is the unique identifier for the location.
     *
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
    /**
     * Lines is the list of lines associated with the location.
     *
     * @generated from protobuf field: repeated parca.metastore.v1alpha1.Line lines = 2;
     */
    lines: Line[];
}
/**
 * Line describes a source code function and its line number.
 *
 * @generated from protobuf message parca.metastore.v1alpha1.Line
 */
export interface Line {
    /**
     * function_id is the ID of the function.
     *
     * @generated from protobuf field: bytes function_id = 1;
     */
    functionId: Uint8Array;
    /**
     * line is the line number in the source file of the referenced function.
     *
     * @generated from protobuf field: int64 line = 2;
     */
    line: bigint;
}
/**
 * Function describes metadata of a source code function.
 *
 * @generated from protobuf message parca.metastore.v1alpha1.Function
 */
export interface Function {
    /**
     * id is the unique identifier for the function.
     *
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
    /**
     * start_line is the line number in the source file of the first line of the function.
     *
     * @generated from protobuf field: int64 start_line = 2;
     */
    startLine: bigint;
    /**
     * name is the name of the function.
     *
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * system_name describes the name of the function, as identified by the
     * system. For instance, it can be a C++ mangled name.
     *
     * @generated from protobuf field: string system_name = 4;
     */
    systemName: string;
    /**
     * filename is the name of the source file of the function.
     *
     * @generated from protobuf field: string filename = 5;
     */
    filename: string;
}
/**
 * Mapping describes a memory mapping.
 *
 * @generated from protobuf message parca.metastore.v1alpha1.Mapping
 */
export interface Mapping {
    /**
     * id is the unique identifier for the mapping.
     *
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
    /**
     * start is the start address of the mapping.
     *
     * @generated from protobuf field: uint64 start = 2;
     */
    start: bigint;
    /**
     * limit is the length of the address space of the mapping.
     *
     * @generated from protobuf field: uint64 limit = 3;
     */
    limit: bigint;
    /**
     * offset is the offset of the mapping.
     *
     * @generated from protobuf field: uint64 offset = 4;
     */
    offset: bigint;
    /**
     * file is the name of the file associated with the mapping.
     *
     * @generated from protobuf field: string file = 5;
     */
    file: string;
    /**
     * build_id is the build ID of the mapping.
     *
     * @generated from protobuf field: string build_id = 6;
     */
    buildId: string;
    /**
     * has_functions indicates whether the mapping has associated functions.
     *
     * @generated from protobuf field: bool has_functions = 7;
     */
    hasFunctions: boolean;
    /**
     * has_filenames indicates whether the mapping has associated filenames.
     *
     * @generated from protobuf field: bool has_filenames = 8;
     */
    hasFilenames: boolean;
    /**
     * has_line_numbers indicates whether the mapping has associated line numbers.
     *
     * @generated from protobuf field: bool has_line_numbers = 9;
     */
    hasLineNumbers: boolean;
    /**
     * has_inline_frames indicates whether the mapping has associated inline frames.
     *
     * @generated from protobuf field: bool has_inline_frames = 10;
     */
    hasInlineFrames: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class Sample$Type extends MessageType<Sample> {
    constructor() {
        super("parca.metastore.v1alpha1.Sample", [
            { no: 1, name: "location_ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "labels", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => SampleLabel } },
            { no: 3, name: "num_labels", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => SampleNumLabel } },
            { no: 4, name: "num_units", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => SampleNumUnit } }
        ]);
    }
    create(value?: PartialMessage<Sample>): Sample {
        const message = { locationIds: [], labels: {}, numLabels: {}, numUnits: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Sample>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Sample): Sample {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated bytes location_ids */ 1:
                    message.locationIds.push(reader.bytes());
                    break;
                case /* map<string, parca.metastore.v1alpha1.SampleLabel> labels */ 2:
                    this.binaryReadMap2(message.labels, reader, options);
                    break;
                case /* map<string, parca.metastore.v1alpha1.SampleNumLabel> num_labels */ 3:
                    this.binaryReadMap3(message.numLabels, reader, options);
                    break;
                case /* map<string, parca.metastore.v1alpha1.SampleNumUnit> num_units */ 4:
                    this.binaryReadMap4(message.numUnits, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    private binaryReadMap2(map: Sample["labels"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof Sample["labels"] | undefined, val: Sample["labels"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = SampleLabel.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field parca.metastore.v1alpha1.Sample.labels");
            }
        }
        map[key ?? ""] = val ?? SampleLabel.create();
    }
    private binaryReadMap3(map: Sample["numLabels"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof Sample["numLabels"] | undefined, val: Sample["numLabels"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = SampleNumLabel.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field parca.metastore.v1alpha1.Sample.num_labels");
            }
        }
        map[key ?? ""] = val ?? SampleNumLabel.create();
    }
    private binaryReadMap4(map: Sample["numUnits"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof Sample["numUnits"] | undefined, val: Sample["numUnits"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = SampleNumUnit.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field parca.metastore.v1alpha1.Sample.num_units");
            }
        }
        map[key ?? ""] = val ?? SampleNumUnit.create();
    }
    internalBinaryWrite(message: Sample, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated bytes location_ids = 1; */
        for (let i = 0; i < message.locationIds.length; i++)
            writer.tag(1, WireType.LengthDelimited).bytes(message.locationIds[i]);
        /* map<string, parca.metastore.v1alpha1.SampleLabel> labels = 2; */
        for (let k of Object.keys(message.labels)) {
            writer.tag(2, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            SampleLabel.internalBinaryWrite(message.labels[k], writer, options);
            writer.join().join();
        }
        /* map<string, parca.metastore.v1alpha1.SampleNumLabel> num_labels = 3; */
        for (let k of Object.keys(message.numLabels)) {
            writer.tag(3, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            SampleNumLabel.internalBinaryWrite(message.numLabels[k], writer, options);
            writer.join().join();
        }
        /* map<string, parca.metastore.v1alpha1.SampleNumUnit> num_units = 4; */
        for (let k of Object.keys(message.numUnits)) {
            writer.tag(4, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            SampleNumUnit.internalBinaryWrite(message.numUnits[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.metastore.v1alpha1.Sample
 */
export const Sample = new Sample$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SampleLabel$Type extends MessageType<SampleLabel> {
    constructor() {
        super("parca.metastore.v1alpha1.SampleLabel", [
            { no: 1, name: "labels", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<SampleLabel>): SampleLabel {
        const message = { labels: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SampleLabel>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SampleLabel): SampleLabel {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string labels */ 1:
                    message.labels.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SampleLabel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string labels = 1; */
        for (let i = 0; i < message.labels.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.labels[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.metastore.v1alpha1.SampleLabel
 */
export const SampleLabel = new SampleLabel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SampleNumLabel$Type extends MessageType<SampleNumLabel> {
    constructor() {
        super("parca.metastore.v1alpha1.SampleNumLabel", [
            { no: 1, name: "num_labels", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<SampleNumLabel>): SampleNumLabel {
        const message = { numLabels: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SampleNumLabel>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SampleNumLabel): SampleNumLabel {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int64 num_labels */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.numLabels.push(reader.int64().toBigInt());
                    else
                        message.numLabels.push(reader.int64().toBigInt());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SampleNumLabel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated int64 num_labels = 1; */
        if (message.numLabels.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.numLabels.length; i++)
                writer.int64(message.numLabels[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.metastore.v1alpha1.SampleNumLabel
 */
export const SampleNumLabel = new SampleNumLabel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SampleNumUnit$Type extends MessageType<SampleNumUnit> {
    constructor() {
        super("parca.metastore.v1alpha1.SampleNumUnit", [
            { no: 1, name: "units", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<SampleNumUnit>): SampleNumUnit {
        const message = { units: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SampleNumUnit>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SampleNumUnit): SampleNumUnit {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string units */ 1:
                    message.units.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SampleNumUnit, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string units = 1; */
        for (let i = 0; i < message.units.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.units[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.metastore.v1alpha1.SampleNumUnit
 */
export const SampleNumUnit = new SampleNumUnit$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Location$Type extends MessageType<Location> {
    constructor() {
        super("parca.metastore.v1alpha1.Location", [
            { no: 1, name: "id", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "address", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "mapping_id", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 5, name: "is_folded", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<Location>): Location {
        const message = { id: new Uint8Array(0), address: 0n, mappingId: new Uint8Array(0), isFolded: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Location>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Location): Location {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes id */ 1:
                    message.id = reader.bytes();
                    break;
                case /* uint64 address */ 2:
                    message.address = reader.uint64().toBigInt();
                    break;
                case /* bytes mapping_id */ 4:
                    message.mappingId = reader.bytes();
                    break;
                case /* bool is_folded */ 5:
                    message.isFolded = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Location, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes id = 1; */
        if (message.id.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.id);
        /* uint64 address = 2; */
        if (message.address !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.address);
        /* bytes mapping_id = 4; */
        if (message.mappingId.length)
            writer.tag(4, WireType.LengthDelimited).bytes(message.mappingId);
        /* bool is_folded = 5; */
        if (message.isFolded !== false)
            writer.tag(5, WireType.Varint).bool(message.isFolded);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.metastore.v1alpha1.Location
 */
export const Location = new Location$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LocationLines$Type extends MessageType<LocationLines> {
    constructor() {
        super("parca.metastore.v1alpha1.LocationLines", [
            { no: 1, name: "id", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "lines", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Line }
        ]);
    }
    create(value?: PartialMessage<LocationLines>): LocationLines {
        const message = { id: new Uint8Array(0), lines: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LocationLines>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LocationLines): LocationLines {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes id */ 1:
                    message.id = reader.bytes();
                    break;
                case /* repeated parca.metastore.v1alpha1.Line lines */ 2:
                    message.lines.push(Line.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LocationLines, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes id = 1; */
        if (message.id.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.id);
        /* repeated parca.metastore.v1alpha1.Line lines = 2; */
        for (let i = 0; i < message.lines.length; i++)
            Line.internalBinaryWrite(message.lines[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.metastore.v1alpha1.LocationLines
 */
export const LocationLines = new LocationLines$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Line$Type extends MessageType<Line> {
    constructor() {
        super("parca.metastore.v1alpha1.Line", [
            { no: 1, name: "function_id", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "line", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<Line>): Line {
        const message = { functionId: new Uint8Array(0), line: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Line>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Line): Line {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes function_id */ 1:
                    message.functionId = reader.bytes();
                    break;
                case /* int64 line */ 2:
                    message.line = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Line, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes function_id = 1; */
        if (message.functionId.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.functionId);
        /* int64 line = 2; */
        if (message.line !== 0n)
            writer.tag(2, WireType.Varint).int64(message.line);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.metastore.v1alpha1.Line
 */
export const Line = new Line$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Function$Type extends MessageType<Function> {
    constructor() {
        super("parca.metastore.v1alpha1.Function", [
            { no: 1, name: "id", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "start_line", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "system_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "filename", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Function>): Function {
        const message = { id: new Uint8Array(0), startLine: 0n, name: "", systemName: "", filename: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Function>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Function): Function {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes id */ 1:
                    message.id = reader.bytes();
                    break;
                case /* int64 start_line */ 2:
                    message.startLine = reader.int64().toBigInt();
                    break;
                case /* string name */ 3:
                    message.name = reader.string();
                    break;
                case /* string system_name */ 4:
                    message.systemName = reader.string();
                    break;
                case /* string filename */ 5:
                    message.filename = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Function, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes id = 1; */
        if (message.id.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.id);
        /* int64 start_line = 2; */
        if (message.startLine !== 0n)
            writer.tag(2, WireType.Varint).int64(message.startLine);
        /* string name = 3; */
        if (message.name !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.name);
        /* string system_name = 4; */
        if (message.systemName !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.systemName);
        /* string filename = 5; */
        if (message.filename !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.filename);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.metastore.v1alpha1.Function
 */
export const Function = new Function$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Mapping$Type extends MessageType<Mapping> {
    constructor() {
        super("parca.metastore.v1alpha1.Mapping", [
            { no: 1, name: "id", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "start", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "limit", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "offset", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "file", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "build_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "has_functions", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "has_filenames", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "has_line_numbers", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "has_inline_frames", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<Mapping>): Mapping {
        const message = { id: new Uint8Array(0), start: 0n, limit: 0n, offset: 0n, file: "", buildId: "", hasFunctions: false, hasFilenames: false, hasLineNumbers: false, hasInlineFrames: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Mapping>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Mapping): Mapping {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes id */ 1:
                    message.id = reader.bytes();
                    break;
                case /* uint64 start */ 2:
                    message.start = reader.uint64().toBigInt();
                    break;
                case /* uint64 limit */ 3:
                    message.limit = reader.uint64().toBigInt();
                    break;
                case /* uint64 offset */ 4:
                    message.offset = reader.uint64().toBigInt();
                    break;
                case /* string file */ 5:
                    message.file = reader.string();
                    break;
                case /* string build_id */ 6:
                    message.buildId = reader.string();
                    break;
                case /* bool has_functions */ 7:
                    message.hasFunctions = reader.bool();
                    break;
                case /* bool has_filenames */ 8:
                    message.hasFilenames = reader.bool();
                    break;
                case /* bool has_line_numbers */ 9:
                    message.hasLineNumbers = reader.bool();
                    break;
                case /* bool has_inline_frames */ 10:
                    message.hasInlineFrames = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Mapping, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes id = 1; */
        if (message.id.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.id);
        /* uint64 start = 2; */
        if (message.start !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.start);
        /* uint64 limit = 3; */
        if (message.limit !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.limit);
        /* uint64 offset = 4; */
        if (message.offset !== 0n)
            writer.tag(4, WireType.Varint).uint64(message.offset);
        /* string file = 5; */
        if (message.file !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.file);
        /* string build_id = 6; */
        if (message.buildId !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.buildId);
        /* bool has_functions = 7; */
        if (message.hasFunctions !== false)
            writer.tag(7, WireType.Varint).bool(message.hasFunctions);
        /* bool has_filenames = 8; */
        if (message.hasFilenames !== false)
            writer.tag(8, WireType.Varint).bool(message.hasFilenames);
        /* bool has_line_numbers = 9; */
        if (message.hasLineNumbers !== false)
            writer.tag(9, WireType.Varint).bool(message.hasLineNumbers);
        /* bool has_inline_frames = 10; */
        if (message.hasInlineFrames !== false)
            writer.tag(10, WireType.Varint).bool(message.hasInlineFrames);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.metastore.v1alpha1.Mapping
 */
export const Mapping = new Mapping$Type();