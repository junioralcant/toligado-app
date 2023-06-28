import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react';
import { Button, Input } from '@presentation/components';
import { ContextForm } from '@presentation/context/form';
import theme from '@presentation/styles/theme';
import { ISelectImage } from '@data/repositories/select-image';
import { ICreateRecord } from '@domain/usecases';

import {
  BoxButton,
  BoxCameraOrGallery,
  BoxInput,
  ButtonCameraOrGallery,
  Container,
  Form,
  SelectPhoto,
  SelectText,
  Title,
} from './styles';

type Props = {
  selectImage: ISelectImage;
  createRecord: ICreateRecord;
};

type ImageData = {
  name: string;
  type: string;
  uri: string;
};

export function RecordCapture({ selectImage, createRecord }: Props) {
  const [state, setState] = useState({
    activeCaptureImage: false,
    place: '',
    description: '',
    riskCategory: '',
    errorResponse: '',
    dataImage: {
      fileName: '',
      type: '',
      uri: '',
    },
  });

  function handleActiveCaptureImage() {
    setState({ ...state, activeCaptureImage: !state.activeCaptureImage });
  }

  function selectImageData(data: ImageData) {
    setState({
      ...state,
      dataImage: {
        fileName: data.name,
        type: data.type,
        uri: data.uri,
      },
    });
  }

  async function handleOpenaCamera() {
    const result = (await selectImage.openCamera()) as ImageData;
    selectImageData(result);
  }

  async function handleOpenaGallery() {
    const result = (await selectImage.openGallery()) as ImageData;
    selectImageData(result);
  }

  function selectRiskCategory(value: string) {
    setState({ ...state, riskCategory: value });
  }

  async function handleForm() {
    try {
      await createRecord.create({
        place: state.place,
        description: state.description,
        riskCategory: state.riskCategory,
        dataImage: state.dataImage,
      });
    } catch (error: any) {
      setState({ ...state, errorResponse: error.message });
    }
  }

  return (
    <Container>
      <Title>Registrar</Title>
      <ContextForm.Provider value={{ state, setState }}>
        <Form>
          <SelectPhoto onPress={handleActiveCaptureImage}>
            <SelectText>Foto</SelectText>
            <AntDesign name="camera" size={20} color={theme.colors.title} />
          </SelectPhoto>

          {state.activeCaptureImage && (
            <BoxCameraOrGallery>
              <ButtonCameraOrGallery onPress={handleOpenaCamera}>
                <AntDesign name="camera" size={28} color={theme.colors.title} />
              </ButtonCameraOrGallery>

              <ButtonCameraOrGallery onPress={handleOpenaGallery}>
                <FontAwesome5
                  name="images"
                  size={25}
                  color={theme.colors.title}
                />
              </ButtonCameraOrGallery>
            </BoxCameraOrGallery>
          )}

          <BoxInput>
            <Input
              label="Local"
              placeholder="Informe o Local"
              keyboardType="numeric"
              name="place"
              returnKeyType="next"
            />
          </BoxInput>

          <BoxInput>
            <Input
              label="Descrição"
              placeholder="Informe a Descrição"
              keyboardType="numeric"
              name="description"
              returnKeyType="next"
            />
          </BoxInput>

          <RNPickerSelect
            onValueChange={selectRiskCategory}
            placeholder={{ label: 'Selecione uma categoria', value: '' }}
            items={[
              { label: 'Trânsito', value: 'Trânsito' },
              { label: 'Choque ou incêndio', value: 'Choque ou incêndio' },
              { label: 'Queda', value: 'Queda' },
              { label: 'Corte ou fratura', value: 'Corte ou fratura' },
              { label: 'EPI ou EPC', value: 'EPI ou EPC' },
              {
                label: 'Equipamento ou ferramenta',
                value: 'Equipamento ou ferramenta',
              },
              { label: 'Documentação', value: 'Documentação' },
              { label: 'Pessoas', value: 'Pessoas' },
              { label: 'Outros', value: 'Outros' },
            ]}
          />
        </Form>

        <BoxButton>
          <Button title="Enviar" onPress={handleForm} />
        </BoxButton>
      </ContextForm.Provider>
    </Container>
  );
}
