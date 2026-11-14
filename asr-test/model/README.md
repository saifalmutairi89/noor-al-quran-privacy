# Model used by this trial page

Converted from [tarteel-ai/whisper-base-ar-quran](https://huggingface.co/tarteel-ai/whisper-base-ar-quran)
(Apache License 2.0, copy in `LICENSE`), itself fine-tuned from
[openai/whisper-base](https://huggingface.co/openai/whisper-base) (Apache License 2.0).

Changes made: exported to ONNX with Hugging Face Optimum, and the weights
quantized to 8-bit integers with ONNX Runtime so the model can run in a phone's
browser. `generation_config.json` is taken from openai/whisper-base, since the
fine-tune predates Whisper's language and task settings.

The page loads Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT)
from the jsDelivr CDN.

## For the phone apps (2026-11-14)

`onnx/decoder_model_merged_quantized_next.onnx` is `decoder_model_merged_quantized.onnx` with two outputs added
after `logits`: `next_token` (best token at the last position, leaving out `suppress_tokens`) and `first_token`
(also leaving out `begin_suppress_tokens`). Made by `backend/recitation-engine/add_argmax.py`; same weights, same
Apache-2.0 license. The iPhone and Android apps download it with the encoder and `vocab.json`.
