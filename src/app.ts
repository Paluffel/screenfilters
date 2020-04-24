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
        if (user.name === "Jarrod"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1431570448931357165",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'head'
                    },
                    transform: {local: {
                        position: { x: 0, y: 0.2, z: 0 },
                        scale: { x: 1, y: 1, z: 1},
                        rotation: Quaternion.FromEulerAngles(270 * DegreesToRadians, 0 * DegreesToRadians, 0 * DegreesToRadians)
                    }}
                }
            });
        }
    }
}


