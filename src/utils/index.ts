export function validateBoolean(value: unknown): asserts value is boolean {
    if (typeof value !== 'boolean') {
        throw new TypeError('Value is not a number');
    }
}

export function validateNumber(value: unknown): asserts value is number {
    if (typeof value !== 'number') {
        throw new TypeError('Value is not a number');
    }
}

export function validateRange(value: number, min: number, max: number): asserts value is number {
    if (value < min || value > max) {
        throw new TypeError('Value is not in range');
    }
}

export function validateString(value: unknown): asserts value is string {
    if (typeof value !== 'string') {
        throw new TypeError('Value is not a string');
    }
}

export function validateArray(value: unknown): asserts value is Array<unknown> {
    if (!Array.isArray(value)) {
        throw new TypeError('Value is not an array');
    }
}

export function validateWithKey<Key extends PropertyKey, T>(
    key: Key,
    value: T
): asserts value is T & { [P in Key]: unknown } {
    if (!(key in value)) {
        throw new TypeError(`Missing key ${key}`);
    }
}

export function validateNotNil<T>(value: T | null | undefined): asserts value is T {
    if (value === null || value === undefined) {
        throw new TypeError('Value is nil');
    }
}
