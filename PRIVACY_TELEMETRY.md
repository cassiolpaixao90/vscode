# Privacy & Telemetry

## Default Behavior

- Telemetry is OFF by default.
- No analytics data is sent without explicit user opt-in.

## How to Enable

- UI: Settings -> "Telemetry: Telemetry Level".
- Settings JSON: set `telemetry.telemetryLevel` to `all`, `error`, or `crash`.
- CLI: pass `--telemetry-level=<level>` when launching BillAI.

## How to Disable

- UI: Settings -> "Telemetry: Telemetry Level" -> `off`.
- Settings JSON: set `telemetry.telemetryLevel` to `off`.
- CLI: pass `--disable-telemetry` for the current session.

## Notes

- Product default is enforced via `product.json` with `enableTelemetry: false`.
