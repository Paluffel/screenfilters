/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
	Actor,
	AnimationEaseCurves,
	AnimationKeyframe,
	AnimationWrapMode,
	ButtonBehavior,
	Collider,
	ColliderGeometry,
	CollisionLayer,
	Context,
	DegreesToRadians,
	Quaternion,
	TextAnchorLocation,
	User,
	Vector3
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';

export default class HelloWorld {
	public expectedResultDescription = "Different grabbable items.";

	constructor(private context: Context, private baseUrl: string) {
		this.context.onUserJoined((user) => this.userJoined(user));
	}

	// Create list to keep track of items attached to users.
	private attachedItems: {[id: string]: Actor} = {};

    private userJoined(user: User) {
        // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "Paluffel"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1117722902309897007",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'spine'
                    },
                    transform: {local: {
                        position: { x: 0, y: 0, z: 0 },
                        scale: { x: 4, y: 4, z: 4},
                        rotation: Quaternion.FromEulerAngles(270 * DegreesToRadians, 0 * DegreesToRadians, 0 * DegreesToRadians)
                    }}
                }
            });
        }
    }
}


