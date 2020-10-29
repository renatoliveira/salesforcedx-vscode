/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { ChannelService } from './channelService';
export const channelService = ChannelService.getInstance();
export { DEFAULT_SFDX_CHANNEL } from './channelService';
export { ChannelService } from './channelService';

import { NotificationService } from './notificationService';
export const notificationService = NotificationService.getInstance();
export { NotificationService };
export { ProgressNotification } from './progressNotification';