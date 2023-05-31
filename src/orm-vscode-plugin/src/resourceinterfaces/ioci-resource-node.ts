/**
 * Copyright (c) 2022, 2023, Oracle and/or its affiliates. All rights reserved.
 * This software is licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */
import { IOCIResource} from "../oci-api";

export interface IOCIResourceNode {
    getResourceId(): string;
    getResource(): IOCIResource;
    // Gets the full Console URL to the resource
    getConsoleUrl(region: string): Promise<string>;
}
