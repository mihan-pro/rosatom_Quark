let bpmn = (function()
{
//var diagramUrl = 'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';

      // modeler instance
      var bpmnModeler = new BpmnJS({
        container: '#canvas',
        keyboard: {
          bindTo: window
        }
      });

      /**
       * Save diagram contents and print them to the console.
       */
      async function exportDiagram() {

        try {

          var result = await bpmnModeler.saveXML({ format: true });

          // alert('Diagram exported. Check the developer tools!');

          console.log('DIAGRAM', result.xml);
        } catch (err) {

          console.error('could not save BPMN 2.0 diagram', err);
        }
      }

      /**
       * Open diagram in our modeler instance.
       *
       * @param {String} bpmnXML diagram to display
       */
      let v_diagram = `<?xml version="1.0" encoding="UTF-8"?>
      <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_06hhwdm" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="7.4.1">
        <bpmn:collaboration id="Collaboration_1nnbvw6">
          <bpmn:participant id="Participant_1ypi8mk" name="Технологический процесс для ответственного за производством" processRef="Process_0ascxfl" />
        </bpmn:collaboration>
        <bpmn:process id="Process_0ascxfl" isExecutable="false">
          <bpmn:laneSet id="LaneSet_1b61yiu">
            <bpmn:lane id="Lane_1o55h40">
              <bpmn:flowNodeRef>StartEvent_1s76t6e</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Activity_0joany6</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Activity_0hrt32i</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Gateway_09bo9yo</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Activity_1j0eeky</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Activity_18975yi</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Activity_16yto4w</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Gateway_09aff9u</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Activity_0hsrzur</bpmn:flowNodeRef>
            </bpmn:lane>
            <bpmn:lane id="Lane_1hixfvi">
              <bpmn:flowNodeRef>Event_105tn2q</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Activity_0w8wb0s</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Activity_1u2euno</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Gateway_1rrql66</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Event_0et2kvw</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Event_0x4lmg2</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Gateway_08mcuaf</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Activity_12hhrtd</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Activity_1ywdpnb</bpmn:flowNodeRef>
              <bpmn:flowNodeRef>Activity_0r1qf46</bpmn:flowNodeRef>
            </bpmn:lane>
          </bpmn:laneSet>
          <bpmn:startEvent id="Event_105tn2q">
            <bpmn:outgoing>Flow_037zn5p</bpmn:outgoing>
          </bpmn:startEvent>
          <bpmn:serviceTask id="Activity_0w8wb0s" name="Неисправность">
            <bpmn:incoming>Flow_01h0arp</bpmn:incoming>
            <bpmn:outgoing>Flow_1kxgsd7</bpmn:outgoing>
          </bpmn:serviceTask>
          <bpmn:serviceTask id="Activity_1u2euno" name="Опрос датчиков производства">
            <bpmn:incoming>Flow_037zn5p</bpmn:incoming>
            <bpmn:incoming>Flow_0204vr3</bpmn:incoming>
            <bpmn:incoming>Flow_02fpn0l</bpmn:incoming>
            <bpmn:outgoing>Flow_08k068z</bpmn:outgoing>
          </bpmn:serviceTask>
          <bpmn:exclusiveGateway id="Gateway_1rrql66">
            <bpmn:incoming>Flow_08k068z</bpmn:incoming>
            <bpmn:outgoing>Flow_01h0arp</bpmn:outgoing>
            <bpmn:outgoing>Flow_0a3h72x</bpmn:outgoing>
          </bpmn:exclusiveGateway>
          <bpmn:intermediateCatchEvent id="Event_0et2kvw" name="Ожидание 5 минут">
            <bpmn:incoming>Flow_1ryxlh1</bpmn:incoming>
            <bpmn:outgoing>Flow_0204vr3</bpmn:outgoing>
            <bpmn:timerEventDefinition id="TimerEventDefinition_0t64m1c" />
          </bpmn:intermediateCatchEvent>
          <bpmn:intermediateCatchEvent id="Event_0x4lmg2" name="Ожидание 5 минут">
            <bpmn:incoming>Flow_1wxduu6</bpmn:incoming>
            <bpmn:outgoing>Flow_02fpn0l</bpmn:outgoing>
            <bpmn:timerEventDefinition id="TimerEventDefinition_0aexl8d" />
          </bpmn:intermediateCatchEvent>
          <bpmn:exclusiveGateway id="Gateway_08mcuaf">
            <bpmn:incoming>Flow_01ty2da</bpmn:incoming>
            <bpmn:incoming>Flow_03h3ik8</bpmn:incoming>
            <bpmn:outgoing>Flow_06ebbk6</bpmn:outgoing>
          </bpmn:exclusiveGateway>
          <bpmn:serviceTask id="Activity_12hhrtd" name="Логирование процесса">
            <bpmn:incoming>Flow_06ebbk6</bpmn:incoming>
          </bpmn:serviceTask>
          <bpmn:sendTask id="Activity_1ywdpnb" name="Оповещение ответственных">
            <bpmn:incoming>Flow_1kxgsd7</bpmn:incoming>
            <bpmn:outgoing>Flow_1wxduu6</bpmn:outgoing>
            <bpmn:outgoing>Flow_03h3ik8</bpmn:outgoing>
          </bpmn:sendTask>
          <bpmn:serviceTask id="Activity_0r1qf46" name="Ошибок нет">
            <bpmn:incoming>Flow_0a3h72x</bpmn:incoming>
            <bpmn:outgoing>Flow_1ryxlh1</bpmn:outgoing>
            <bpmn:outgoing>Flow_01ty2da</bpmn:outgoing>
          </bpmn:serviceTask>
          <bpmn:startEvent id="StartEvent_1s76t6e">
            <bpmn:outgoing>Flow_0lwejat</bpmn:outgoing>
          </bpmn:startEvent>
          <bpmn:serviceTask id="Activity_0joany6" name="Контроль состояния производства">
            <bpmn:incoming>Flow_0lwejat</bpmn:incoming>
            <bpmn:outgoing>Flow_0xzgkil</bpmn:outgoing>
          </bpmn:serviceTask>
          <bpmn:serviceTask id="Activity_0hrt32i" name="Создание задач ответственным">
            <bpmn:incoming>Flow_0xzgkil</bpmn:incoming>
            <bpmn:outgoing>Flow_0zfa1u5</bpmn:outgoing>
          </bpmn:serviceTask>
          <bpmn:inclusiveGateway id="Gateway_09bo9yo">
            <bpmn:incoming>Flow_0zfa1u5</bpmn:incoming>
            <bpmn:outgoing>Flow_086stcy</bpmn:outgoing>
            <bpmn:outgoing>Flow_0oxnirj</bpmn:outgoing>
          </bpmn:inclusiveGateway>
          <bpmn:userTask id="Activity_1j0eeky" name="Задача не выполнена">
            <bpmn:incoming>Flow_0oxnirj</bpmn:incoming>
            <bpmn:outgoing>Flow_1rfuyiq</bpmn:outgoing>
          </bpmn:userTask>
          <bpmn:userTask id="Activity_18975yi" name="Задача выполнена">
            <bpmn:incoming>Flow_086stcy</bpmn:incoming>
            <bpmn:outgoing>Flow_1ct18xn</bpmn:outgoing>
          </bpmn:userTask>
          <bpmn:serviceTask id="Activity_16yto4w" name="Логирование процесса">
            <bpmn:incoming>Flow_04dzghr</bpmn:incoming>
          </bpmn:serviceTask>
          <bpmn:exclusiveGateway id="Gateway_09aff9u">
            <bpmn:incoming>Flow_1ct18xn</bpmn:incoming>
            <bpmn:incoming>Flow_09v504f</bpmn:incoming>
            <bpmn:outgoing>Flow_04dzghr</bpmn:outgoing>
          </bpmn:exclusiveGateway>
          <bpmn:sendTask id="Activity_0hsrzur" name="Оповещение ответственных">
            <bpmn:incoming>Flow_1rfuyiq</bpmn:incoming>
            <bpmn:outgoing>Flow_09v504f</bpmn:outgoing>
          </bpmn:sendTask>
          <bpmn:sequenceFlow id="Flow_037zn5p" sourceRef="Event_105tn2q" targetRef="Activity_1u2euno" />
          <bpmn:sequenceFlow id="Flow_08k068z" sourceRef="Activity_1u2euno" targetRef="Gateway_1rrql66" />
          <bpmn:sequenceFlow id="Flow_01h0arp" sourceRef="Gateway_1rrql66" targetRef="Activity_0w8wb0s" />
          <bpmn:sequenceFlow id="Flow_0a3h72x" sourceRef="Gateway_1rrql66" targetRef="Activity_0r1qf46" />
          <bpmn:sequenceFlow id="Flow_1ryxlh1" sourceRef="Activity_0r1qf46" targetRef="Event_0et2kvw" />
          <bpmn:sequenceFlow id="Flow_0204vr3" sourceRef="Event_0et2kvw" targetRef="Activity_1u2euno" />
          <bpmn:sequenceFlow id="Flow_1kxgsd7" sourceRef="Activity_0w8wb0s" targetRef="Activity_1ywdpnb" />
          <bpmn:sequenceFlow id="Flow_1wxduu6" sourceRef="Activity_1ywdpnb" targetRef="Event_0x4lmg2" />
          <bpmn:sequenceFlow id="Flow_02fpn0l" sourceRef="Event_0x4lmg2" targetRef="Activity_1u2euno" />
          <bpmn:sequenceFlow id="Flow_01ty2da" sourceRef="Activity_0r1qf46" targetRef="Gateway_08mcuaf" />
          <bpmn:sequenceFlow id="Flow_03h3ik8" sourceRef="Activity_1ywdpnb" targetRef="Gateway_08mcuaf" />
          <bpmn:sequenceFlow id="Flow_06ebbk6" sourceRef="Gateway_08mcuaf" targetRef="Activity_12hhrtd" />
          <bpmn:sequenceFlow id="Flow_0lwejat" sourceRef="StartEvent_1s76t6e" targetRef="Activity_0joany6" />
          <bpmn:sequenceFlow id="Flow_0xzgkil" sourceRef="Activity_0joany6" targetRef="Activity_0hrt32i" />
          <bpmn:sequenceFlow id="Flow_0zfa1u5" sourceRef="Activity_0hrt32i" targetRef="Gateway_09bo9yo" />
          <bpmn:sequenceFlow id="Flow_086stcy" sourceRef="Gateway_09bo9yo" targetRef="Activity_18975yi" />
          <bpmn:sequenceFlow id="Flow_0oxnirj" sourceRef="Gateway_09bo9yo" targetRef="Activity_1j0eeky" />
          <bpmn:sequenceFlow id="Flow_1rfuyiq" sourceRef="Activity_1j0eeky" targetRef="Activity_0hsrzur" />
          <bpmn:sequenceFlow id="Flow_1ct18xn" sourceRef="Activity_18975yi" targetRef="Gateway_09aff9u" />
          <bpmn:sequenceFlow id="Flow_09v504f" sourceRef="Activity_0hsrzur" targetRef="Gateway_09aff9u" />
          <bpmn:sequenceFlow id="Flow_04dzghr" sourceRef="Gateway_09aff9u" targetRef="Activity_16yto4w" />
          <bpmn:textAnnotation id="TextAnnotation_0ywywy2">
            <bpmn:text>Запись результатов в хранилище (База данных событий)</bpmn:text>
          </bpmn:textAnnotation>
          <bpmn:association id="Association_0ayx24h" sourceRef="Activity_12hhrtd" targetRef="TextAnnotation_0ywywy2" />
        </bpmn:process>
        <bpmndi:BPMNDiagram id="BPMNDiagram_1">
          <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_1nnbvw6">
            <bpmndi:BPMNShape id="Participant_1ypi8mk_di" bpmnElement="Participant_1ypi8mk" isHorizontal="true">
              <dc:Bounds x="200" y="80" width="1460" height="910" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Lane_1o55h40_di" bpmnElement="Lane_1o55h40" isHorizontal="true">
              <dc:Bounds x="230" y="550" width="1430" height="440" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Lane_1hixfvi_di" bpmnElement="Lane_1hixfvi" isHorizontal="true">
              <dc:Bounds x="230" y="80" width="1430" height="470" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="TextAnnotation_0ywywy2_di" bpmnElement="TextAnnotation_0ywywy2">
              <dc:Bounds x="1030" y="200" width="389" height="34" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="Flow_037zn5p_di" bpmnElement="Flow_037zn5p">
              <di:waypoint x="308" y="360" />
              <di:waypoint x="339" y="360" />
              <di:waypoint x="339" y="310" />
              <di:waypoint x="370" y="310" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_08k068z_di" bpmnElement="Flow_08k068z">
              <di:waypoint x="470" y="310" />
              <di:waypoint x="535" y="310" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_01h0arp_di" bpmnElement="Flow_01h0arp">
              <di:waypoint x="560" y="285" />
              <di:waypoint x="560" y="250" />
              <di:waypoint x="630" y="250" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0a3h72x_di" bpmnElement="Flow_0a3h72x">
              <di:waypoint x="560" y="335" />
              <di:waypoint x="560" y="390" />
              <di:waypoint x="620" y="390" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1ryxlh1_di" bpmnElement="Flow_1ryxlh1">
              <di:waypoint x="670" y="430" />
              <di:waypoint x="670" y="460" />
              <di:waypoint x="528" y="460" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0204vr3_di" bpmnElement="Flow_0204vr3">
              <di:waypoint x="492" y="460" />
              <di:waypoint x="410" y="460" />
              <di:waypoint x="410" y="350" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1kxgsd7_di" bpmnElement="Flow_1kxgsd7">
              <di:waypoint x="730" y="250" />
              <di:waypoint x="790" y="250" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1wxduu6_di" bpmnElement="Flow_1wxduu6">
              <di:waypoint x="840" y="210" />
              <di:waypoint x="840" y="170" />
              <di:waypoint x="528" y="170" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_02fpn0l_di" bpmnElement="Flow_02fpn0l">
              <di:waypoint x="492" y="170" />
              <di:waypoint x="410" y="170" />
              <di:waypoint x="410" y="270" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_01ty2da_di" bpmnElement="Flow_01ty2da">
              <di:waypoint x="720" y="390" />
              <di:waypoint x="855" y="390" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_03h3ik8_di" bpmnElement="Flow_03h3ik8">
              <di:waypoint x="840" y="290" />
              <di:waypoint x="840" y="328" />
              <di:waypoint x="880" y="328" />
              <di:waypoint x="880" y="365" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_06ebbk6_di" bpmnElement="Flow_06ebbk6">
              <di:waypoint x="905" y="390" />
              <di:waypoint x="1010" y="390" />
              <di:waypoint x="1010" y="362" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0lwejat_di" bpmnElement="Flow_0lwejat">
              <di:waypoint x="338" y="790" />
              <di:waypoint x="390" y="790" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0xzgkil_di" bpmnElement="Flow_0xzgkil">
              <di:waypoint x="490" y="790" />
              <di:waypoint x="550" y="790" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0zfa1u5_di" bpmnElement="Flow_0zfa1u5">
              <di:waypoint x="650" y="790" />
              <di:waypoint x="715" y="790" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_086stcy_di" bpmnElement="Flow_086stcy">
              <di:waypoint x="740" y="765" />
              <di:waypoint x="740" y="680" />
              <di:waypoint x="780" y="680" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0oxnirj_di" bpmnElement="Flow_0oxnirj">
              <di:waypoint x="740" y="815" />
              <di:waypoint x="740" y="880" />
              <di:waypoint x="780" y="880" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1rfuyiq_di" bpmnElement="Flow_1rfuyiq">
              <di:waypoint x="880" y="880" />
              <di:waypoint x="950" y="880" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1ct18xn_di" bpmnElement="Flow_1ct18xn">
              <di:waypoint x="880" y="680" />
              <di:waypoint x="1060" y="680" />
              <di:waypoint x="1060" y="725" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_09v504f_di" bpmnElement="Flow_09v504f">
              <di:waypoint x="1000" y="840" />
              <di:waypoint x="1000" y="808" />
              <di:waypoint x="1060" y="808" />
              <di:waypoint x="1060" y="775" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_04dzghr_di" bpmnElement="Flow_04dzghr">
              <di:waypoint x="1085" y="750" />
              <di:waypoint x="1128" y="750" />
              <di:waypoint x="1128" y="760" />
              <di:waypoint x="1170" y="760" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="Event_105tn2q_di" bpmnElement="Event_105tn2q">
              <dc:Bounds x="272" y="342" width="36" height="36" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_1msuaf1_di" bpmnElement="Activity_0w8wb0s">
              <dc:Bounds x="630" y="210" width="100" height="80" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_1fa4c3u_di" bpmnElement="Activity_1u2euno">
              <dc:Bounds x="370" y="270" width="100" height="80" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Gateway_0dspevv_di" bpmnElement="Gateway_1rrql66" isMarkerVisible="true">
              <dc:Bounds x="535" y="285" width="50" height="50" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Event_1l1gbbo_di" bpmnElement="Event_0et2kvw">
              <dc:Bounds x="492" y="442" width="36" height="36" />
              <bpmndi:BPMNLabel>
                <dc:Bounds x="480" y="485" width="62" height="27" />
              </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Event_16xzc1f_di" bpmnElement="Event_0x4lmg2">
              <dc:Bounds x="492" y="152" width="36" height="36" />
              <bpmndi:BPMNLabel>
                <dc:Bounds x="479" y="195" width="62" height="27" />
              </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Gateway_08mcuaf_di" bpmnElement="Gateway_08mcuaf" isMarkerVisible="true">
              <dc:Bounds x="855" y="365" width="50" height="50" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_1plk1o8_di" bpmnElement="Activity_12hhrtd">
              <dc:Bounds x="960" y="282" width="100" height="80" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_1xqg2up_di" bpmnElement="Activity_1ywdpnb">
              <dc:Bounds x="790" y="210" width="100" height="80" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_051g2nd_di" bpmnElement="Activity_0r1qf46">
              <dc:Bounds x="620" y="350" width="100" height="80" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1s76t6e">
              <dc:Bounds x="302" y="772" width="36" height="36" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_039cv2f_di" bpmnElement="Activity_0joany6">
              <dc:Bounds x="390" y="750" width="100" height="80" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_19ozuhf_di" bpmnElement="Activity_0hrt32i">
              <dc:Bounds x="550" y="750" width="100" height="80" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Gateway_160hvzi_di" bpmnElement="Gateway_09bo9yo">
              <dc:Bounds x="715" y="765" width="50" height="50" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_1alkpka_di" bpmnElement="Activity_1j0eeky">
              <dc:Bounds x="780" y="840" width="100" height="80" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_1s6j6ap_di" bpmnElement="Activity_18975yi">
              <dc:Bounds x="780" y="640" width="100" height="80" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_12inn9a_di" bpmnElement="Activity_16yto4w">
              <dc:Bounds x="1170" y="720" width="100" height="80" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Gateway_09aff9u_di" bpmnElement="Gateway_09aff9u" isMarkerVisible="true">
              <dc:Bounds x="1035" y="725" width="50" height="50" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_1lk2qjq_di" bpmnElement="Activity_0hsrzur">
              <dc:Bounds x="950" y="840" width="100" height="80" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="Association_0ayx24h_di" bpmnElement="Association_0ayx24h">
              <di:waypoint x="1036" y="282" />
              <di:waypoint x="1068" y="234" />
            </bpmndi:BPMNEdge>
          </bpmndi:BPMNPlane>
        </bpmndi:BPMNDiagram>
      </bpmn:definitions>
      `
      openDiagram(v_diagram);
      async function openDiagram(bpmnXML) {

        // import diagram
        try {

          await bpmnModeler.importXML(bpmnXML);

          // access modeler components
          var canvas = bpmnModeler.get('canvas');
          var overlays = bpmnModeler.get('overlays');


          // zoom to fit full viewport
          canvas.zoom('fit-viewport');

          // attach an overlay to a node
          overlays.add('SCAN_OK', 'note', {
            position: {
              bottom: 0,
              right: 0
            },
            html: '<div class="diagram-note">Mixed up the labels?</div>'
          });

          // add marker
          canvas.addMarker('SCAN_OK', 'needs-discussion');
        } catch (err) {

          console.error('could not import BPMN 2.0 diagram', err);
        }
      }


      // load external diagram file via AJAX and open it
     // $.get(diagramUrl, openDiagram, 'text');

      // wire save button
      $('#save-button').click(exportDiagram);
})()