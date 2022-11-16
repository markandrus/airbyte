#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#


from unittest import mock

from airbyte_cdk.models.airbyte_protocol import ConnectorSpecification
from airbyte_cdk.sources import Source
from airbyte_cdk.sources.utils.schema_helpers import check_config_against_spec_or_exit, filter_internal_keywords


def command_check(source: Source, config):
    logger = mock.MagicMock()
    connector_config, _ = filter_internal_keywords(config)
    if source.check_config_against_spec:
        source_spec: ConnectorSpecification = source.spec(logger)
        check_config_against_spec_or_exit(connector_config, source_spec)
    return source.check(logger, config)
