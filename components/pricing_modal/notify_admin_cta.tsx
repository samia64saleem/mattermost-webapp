// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React, {useState} from 'react';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import {Client4} from 'mattermost-redux/client';
import {getCurrentTeamId} from 'mattermost-redux/selectors/entities/teams';
import {Message, t} from 'utils/i18n';

const Span = styled.span`
font-family: 'Open Sans';
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 16px;
`;

const StyledBtn = styled.button`
border: none;
background: none;
color: var(--denim-button-bg);
`;

export enum NotifyStatus {
    NotStarted = 'NOT_STARTED',
    Started = 'STARTED',
    Success = 'SUCCESS',
    Failed = 'FAILED',
    AlreadyComplete = 'COMPLETE'
}

const defaultTexts: Record<NotifyStatus, Message> = {
    [NotifyStatus.NotStarted]: {
        id: t('notify_admin_to_upgrade_cta.notify-admin.notify'),
        defaultMessage: 'Notify your admin',
    },
    [NotifyStatus.Started]: {
        id: t('notify_admin_to_upgrade_cta.notify-admin.notifying'),
        defaultMessage: 'Notifying...',
    },
    [NotifyStatus.Success]: {
        id: t('notify_admin_to_upgrade_cta.notify-admin.notified'),
        defaultMessage: 'Notified!',
    },
    [NotifyStatus.AlreadyComplete]: {
        id: t('notify_admin_to_upgrade_cta.notify-admin.already_notified'),
        defaultMessage: 'Already notified!',
    },
    [NotifyStatus.Failed]: {
        id: t('notify_admin_to_upgrade_cta.notify-admin.failed'),
        defaultMessage: 'Try again later!',
    },
};

export function useNotifyAdmin(alternateMappings?: Partial<Record<NotifyStatus, Message>>) {
    const [status, setStatus] = useState(NotifyStatus.NotStarted);
    const {formatMessage} = useIntl();

    const currentTeam = useSelector(getCurrentTeamId);

    const notify = async () => {
        try {
            setStatus(NotifyStatus.Started);
            const req = {
                current_team_id: currentTeam,
            };
            await Client4.notifyAdminToUpgrade(req);
            setStatus(NotifyStatus.Success);
        } catch (error) {
            if (error && error.status_code === 403) {
                setStatus(NotifyStatus.AlreadyComplete);
            } else {
                setStatus(NotifyStatus.Failed);
            }
        }
    };

    let message = defaultTexts[status];
    if (alternateMappings?.[status]) {
        message = alternateMappings?.[status] as Message;
    }
    if (!message) {
        message = defaultTexts[NotifyStatus.NotStarted];
    }
    return {
        message: formatMessage(message),
        notify,
        status,
    };
}

function NotifyAdminCTA() {
    const {notify, message} = useNotifyAdmin();
    const {formatMessage} = useIntl();

    return (
        <div>
            <Span>{formatMessage({id: 'pricing_modal.wantToUpgrade', defaultMessage: 'Want to upgrade?'})}
                <StyledBtn
                    id='notify_admin_cta'
                    onClick={notify}
                >
                    {message}
                </StyledBtn>
            </Span>
        </div>);
}

export default NotifyAdminCTA;
